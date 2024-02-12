/* eslint-disable react/prop-types */


const ParcelInput = ({ parcelData, onParcelChange, removeParcel }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onParcelChange({ ...parcelData, [name]: value });
  };

  return (
    <div className="parcel-input">
      <input
        type="number"
        name="length"
        placeholder="Length (cm)"
        value={parcelData.length}
        onChange={handleChange}
      />
      <input
        type="number"
        name="width"
        placeholder="Width (cm)"
        value={parcelData.width}
        onChange={handleChange}
      />
      <input
        type="number"
        name="height"
        placeholder="Height (cm)"
        value={parcelData.height}
        onChange={handleChange}
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={parcelData.weight}
        onChange={handleChange}
      />
      <select
        name="temperatureCondition"
        value={parcelData.temperatureCondition}
        onChange={handleChange}
        required
      >
        <option value="Ambient">Ambient</option>
        <option value="Chill">Chill</option>
      </select> 
      <button 
        type="button" 
        onClick={removeParcel}
      >
        Remove
      </button>
    </div >
  )
}

export default ParcelInput
