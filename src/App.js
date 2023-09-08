import {useState, useEffect} from 'react'
import axios from "axios"
import Header from './features/Header'
import Footer from './features/Footer'
import Table from './features/Table'
import ErrorMessage from './features/ErrorMessage'
import FilterForm from './features/FilterForm'
import Loader from './features/Loader/Loader'
import InstructionMessage from './features/InstructionMessage'


function App() {
  const [showError, setShowError] = useState(false)
  const [is404, setIs404] = useState(false)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const url = "http://127.0.0.1:8000/v1/"
  
  
  const fetchData = async (queryParams = {}) => {
    try {
        setIsLoading(true)
        const response = await axios.get(`${url}people/`, {
          params: queryParams
        })
        
        if (response.status === 404) {
          setIs404(true)
          console.error('Resource not found:', response.status)
        }else if (response.status >= 400 && response.status < 500) {
          setShowError(true)
        }else if (showError || is404){
          setIs404(false)
          setShowError(false)
        }
        
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching people:", error)
        setIsLoading(false)
        setShowError(true)
      }
    }

    useEffect(() => {  
      fetchData()
    
    }, []); 



    const handleFormSubmit = (formData) => {
      
      const queryParams = {
        'start_date': formData.startDate,
        'end_date': formData.endDate,
      }

      if (formData.isGBA) {
        queryParams.is_gba = true;
      }
    
      // Call fetchData with the updated query parameters
      fetchData(queryParams);
    };
  return (
    <div className="App">
      <Header />
      <div className='mx-10 pt-10'>
        <h1 className="font-sans text-4xl font-extrabold ml-4"> GBA Estatus Filter</h1>
        <FilterForm onFilterSubmit={handleFormSubmit}/>
        {showError ? <ErrorMessage /> : isLoading? <Loader /> : <Table data={data} />}
        <InstructionMessage />
        
      </div>
      <Footer />

    </div>
  )
}

export default App
