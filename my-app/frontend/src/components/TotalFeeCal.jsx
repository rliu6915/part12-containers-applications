/* eslint-disable react/prop-types */

const TotalFeeCal = ({ totalFee }) => {
  if (!totalFee) {
    return <p>No shipping fee details available.</p>
  }

  return (
    <div>
      <p>
        Total Shipping fee is {totalFee}
      </p>
    </div>
  )
}

export default TotalFeeCal