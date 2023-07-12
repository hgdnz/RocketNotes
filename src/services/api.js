import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-o9h0.onrender.com'
})
