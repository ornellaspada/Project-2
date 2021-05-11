import axios from 'axios'

const baseUrl = 'https://www.carboninterface.com/api/v1'
const apiKey = 'PoRJbKaz5sWFZKcKRNaw'

function headers() {
  return {
    headers: { Authorization: `Bearer ${apiKey}` },
  }
}

export function createFootprint(formData) {
  return axios.post(`${baseUrl}/estimates`,formData ,headers())
}

export function displayFootprint() {
  return axios.get(`${baseUrl}/estimates` ,headers())
}