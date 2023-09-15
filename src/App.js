import { useState, useEffect } from "react"
import { api } from "./services"
import {
  Header,
  Footer,
  Table,
  ErrorMessage,
  FilterForm,
  Loader,
  InstructionMessage,
} from "./features"

function App() {

  const [showError, setShowError] = useState(false)
  const [is404, setIs404] = useState(false)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const url = 'people/'

  const handleError = (status) => {
    setShowError(true)
    console.error("Something went wrong: ", status)

  }

  const handleNotFound = (status) => {
    setIs404(true)
    console.error("Resource not found:", status)
  }

  const fetchData = async (queryParams = {}) => {
    setIsLoading(true)
    try {
      const response = await api.get(url, queryParams)
      if (response.status === 404) {
        handleNotFound(response.status)
        
      } else if (response.status >= 400 && response.status < 500) {
        handleError(response.status)
        
      } else if (showError || is404) {
        setIs404(false)
        setShowError(false)
      }

      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      handleError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFormSubmit = (formData) => {
    const queryParams = {
      start_date: formData.startDate,
      end_date: formData.endDate,
      is_gba: formData.isGBA ? true : undefined,
    }

    // Call fetchData with the updated query parameters
    fetchData(queryParams)
  }

  return (
    <div className="App">
      <Header />
      <div className="mx-10 pt-10">
        <h1 className="font-sans text-4xl font-extrabold ml-4">
          GBA Estatus Filter
        </h1>
        <FilterForm onFilterSubmit={handleFormSubmit} />
        {showError ? (
          <ErrorMessage />
        ) : isLoading ? (
          <Loader />
        ) : (
          <Table data={data} />
        )}
        <InstructionMessage />
      </div>
      <Footer />
    </div>
  )
}

export default App
