'use client'
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'

const HomePage = () => {
  const router=useRouter()
  const [roomID, setRoomID] = useState('')
  const handleJoin = () => {
    if (!roomID) return;
    router.push(`/room/${roomID}`);

  }
  return (
    <div className='flex items-center h-screen justify-center w-full flex-col'>
      <h1 className='text-center text-4xl font-bold'>Video Conference App Using Zegocloud
      <br/>
      <span className='px-7 py-2 mt-3 mb-3 w-fit  bg-blue-700 text-white inline-block rounded-xl '>ZEGOCLOUD</span>
      </h1>
      <div className='mt-10'>
      <input type='text' placeholder='Enter Room ID ' className='px-8 py-3 bg-gray-300 rounded-md  block outline-none'
        onChange={(e) => setRoomID(e.target.value)}
      />
      <button onClick={handleJoin} className='px-8 py-2.5 w-full mt-2 bg-blue-700 rounded-md hover:bg-blue-900 transition-all duration-200 block outline-none text-white text-lg'>Join</button>

      </div>
    </div>
  )
}

export default HomePage