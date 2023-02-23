import React from 'react'
import {FaHome,FaSearch} from 'react-icons/fa'
import CoinTracking from './CoinTracking'

const Dashboard = () => {
  return (
    <section className='w-full h-screen bg-primary p-5 overflow-hidden'>
        <div className='container mx-auto flex flex-col text-white'> 
        {/* HEADER BAŞLANGIÇ */}
            <div className='flex justify-between items-center py-5 border-b border-gray-300 border-opacity-20'>
               <div className='flex items-center  gap-2 '>
                    <FaHome className='text-2xl text-secondary'/>
                    <h1 className='text-2xl  font-Unbounded '>Dashboard</h1>
               </div>
               <div className='w-[25%]'>
                    <div class="w-full flex justify-center items-center bg-transparent border border-[#212121] rounded-lg p-2  ">
                        <FaSearch className='text-xl text-[#212121]'/>
                        <input 
                        type="text" 
                        className="w-full h-full bg-transparent outline-none px-2 text-sm placeholder:text-[#454444] font-Unbounded " 
                        placeholder="Search" />
                    </div>
               </div>
            </div>
        {/* HEADER BİTİŞ */}
        {/* BODY BAŞLANGIÇ */}
        <div className='flex'>
            <div className='w-[65%] h-[calc(100vh_-_100px)]  border-r border-gray-300 border-opacity-20 mt-4 '>
                <CoinTracking/>
            </div>
            <div className='w-[40%] h-[calc(100vh_-_100px)]  '>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Dashboard