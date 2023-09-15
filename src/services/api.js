import axios from "axios"

const BASE_URL = process.env.REACT_APP_BACKEND_URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // You can adjust the timeout as needed
})

// Function to make GET requests
export const get = async (url, queryParams = {}) => {
  try {
    const response = await axiosInstance.get(url, { params: queryParams })
    return response
  } catch (error) {
    throw error
  }
}

// Add more functions for other HTTP methods (POST, PUT, DELETE) if needed

// Export all API functions as an object
const api = {
  get,
  // add other functions here as needed
}

export default api
