/* eslint-disable react/prop-types */
import { useState } from "react"
import ParcelInput from "./ParcelInput"
import parcelService from "../services/parcels"

const ShippingForm = ({ setTotalFee }) => {
  const [parcels, setParcels] = useState([
    { length: '', width: '', height: '', weight: '', temperatureCondition: 'Ambient' },
  ]);

  const addParcel = () => {
    setParcels([
      ...parcels,
      { length: '', width: '', height: '', weight: '', temperatureCondition: 'Ambient' },
    ]);
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log(parcels)
    const data = await parcelService.create({
      parcels: parcels
    })
    console.log(data)
    setTotalFee(data.totalShippingFee)
  }

  const handleParcelChange = (index, parcelData) => {
    const newParcels = [...parcels]
    newParcels[index] = parcelData
    setParcels(newParcels)
  }

  const removeParcel = (index) => {
    setParcels(parcels.filter((_, idx) => idx !== index));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {parcels.map((parcel, index) => (
          <ParcelInput
            key={index}
            parcelData={parcel}
            onParcelChange={(data) => handleParcelChange(index, data)}
            removeParcel={() => removeParcel(index)}
          />
        ))}
        <button type="button" onClick={addParcel}>
          Add Another Parcel
        </button>
        <button type="submit">
          Calculate Shipping Fee 
        </button>
      </form>
    </div>
  )
}

export default ShippingForm