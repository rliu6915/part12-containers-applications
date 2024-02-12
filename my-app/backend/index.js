const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

app.post('/api/calShippingFees', (request, response) => {
  const parcels = request.body.parcels
  console.log(request.body)
  let totalShippingFee = 0

  parcels.map((parcel) => {
    const cost = calculateCost(parcel)
    totalShippingFee += cost
  })

  response.json({
    totalShippingFee: totalShippingFee
  })
})

const calculateCost = (parcel) => {
  const volumetricWeight = calculateVolumetricWeight(parcel.length, parcel.width, parcel.height);
  const weight = Math.max(parcel.weight, volumetricWeight)
  const rate = (weight <= 5)
      ? (parcel.temperatureCondition === 'Ambient' ? 10 : 20)
      : (parcel.temperatureCondition === 'Ambient' ? 15 : 30)
  return weight * rate
}

const calculateVolumetricWeight = (length, width, height) => {
  return (length * width * height) / 5000;
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})