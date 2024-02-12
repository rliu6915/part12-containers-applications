import { useState } from "react"
import ShippingForm from "./components/ShippingForm"
import TotalFeeCal from "./components/TotalFeeCal"

const App = () => {
  const [totalFee, setTotalFee] = useState(0)

  return (
    <div>
      <ShippingForm setTotalFee={setTotalFee}/>
      <TotalFeeCal totalFee={totalFee}/>
    </div>
  )
}

export default App