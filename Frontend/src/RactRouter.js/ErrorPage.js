import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
const naviget = useNavigate()
const gotoHome = () => {
    naviget('/')
}
  return (
    <>
     <div className='h-screen w-full flex justify-center flex-col gap-3 items-center text-red-500'>
    <h2 className='text-9xl'>404</h2>
    <button onClick={gotoHome}>Go Back To Homepage</button>
    </div>
    </>
  )
}

export default ErrorPage