import React from 'react'
import { useNavigate } from 'react-router-dom';

const Center = () => {
    const navigate = useNavigate(); 
  return (
    <>
    <div>
        <h1 className='text-4xl font-bold text-center'>THIS IS HOMEPAGE</h1>
    </div>
    <div className='flex justify-around items-center h-56 w-1/2 border-2 border-red-600 m-auto mt-10 bg-purple-300'>
        <button onClick={() => navigate('/home')} className='bg-green-700 text-white h-16 pl-4 pr-4 pb-2 pt-2 mt-2'>NEWS API</button><br/>
        <button onClick={() => navigate('/practice')} className='bg-green-700 text-white h-16 pl-4 pr-4 pb-2 pt-2 mt-2'>JASON DATA</button>
    </div>
    </>
  )
}

export default Center