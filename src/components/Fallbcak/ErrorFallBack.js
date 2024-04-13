import React from "react"

const ErrorFallBack = ({error,resetErrorBoundery})=>{
  console.log({error,resetErrorBoundery})
  return(
    <div>    <h1>somthing went wrong!!</h1>
    <h2>Error:{error.message}</h2>
    <button onClick={resetErrorBoundery} >try again</button>
    </div>
  )
}
export default ErrorFallBack;