import { useState, useEffect } from "react"

let eventLoopScheduler = setTimeout
// let eventLoopClearer = clearTimeout

// still experimental and works a bit different from
// set timeout, do a check if its available
if (requestIdleCallback) {
   eventLoopScheduler = requestIdleCallback
   // eventLoopClearer = cancelIdleCallback
}

const RenderLater = (props) => {
   const {
      children
   } = props

   // control the flow using React state
   const [shouldRender, setShouldRender] = useState(false)

   // after the component has mounted, schedule a state update
   // on the event loop
   useEffect(() => {
      if (!shouldRender) {
         eventLoopScheduler(() => setShouldRender(true))
      }
   }, [shouldRender])

   // inital render will return null
   if (!shouldRender) {
      return null
   }

   // finally render state
   return children
}

export default RenderLater