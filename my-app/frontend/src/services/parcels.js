import axios from 'axios'
const baseUrl = '/api/calShippingFees'

const create = async (newParcels) => {
  // console.log("newParcels", newParcels)
  const response = await axios.post(baseUrl, newParcels)
  console.log("create", response)
  return response.data
}

export default { create }