import React from "react"

const BigHeavyComponent = () => {

   for(let i = 0; i < 300000000; i++) {
      // do some mapping or something expensive
   }

   return <div>
      Contrived Example
   </div>
}

export default BigHeavyComponent