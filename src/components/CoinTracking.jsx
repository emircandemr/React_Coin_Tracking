import React from 'react'
import {FaLongArrowAltUp,FaLongArrowAltDown,FaStar} from 'react-icons/fa'

const CoinTracking = () => {
  return (
    <div className='w-[99%] h-20 bg-[#121212] hover:bg-[#212121] px-2 py-1 rounded-lg flex gap-x-10 items-center relative cursor-pointer'>
        <div className='h-full flex items-center'>
            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" className='w-12'/>
            <div className='flex flex-col ml-3'>
                <h1 className='text-sm font-Unbounded'>Bitcoin</h1>
                <h2 className='text-xs mt-1 text-gray-500 font-Unbounded'>BTC</h2>
            </div>
        </div>
        <div className='h-full flex flex-col  justify-center'>
            <span className='text-sm font-Unbounded'>$57,626.53</span>
            <span className='text-xs mt-2 flex justify-end items-center text-green-500 font-Unbounded'>
                 <FaLongArrowAltUp className='text-xs mr-1'/>
                 $355.68
            </span>            
        </div>
        <div className='h-full flex flex-col justify-center'>
            <span className='text-sm font-Unbounded text-green-500'>%15.5</span>
            <span className='text-xs mt-2 text-right text-gray-500 opacity-80  font-Unbounded'>
                 1h
            </span>            
        </div>
        <div className='h-full flex flex-col justify-center'>
            <span className='text-sm font-Unbounded text-green-500'>%15.5</span>
            <span className='text-xs mt-2 text-right text-gray-500 opacity-80  font-Unbounded'>
                 24h
            </span>            
        </div>
        <div className='h-full flex flex-col justify-center'>
            <span className='text-sm font-Unbounded text-green-500'>%15.5</span>
            <span className='text-xs mt-2 text-right text-gray-500 opacity-80  font-Unbounded'>
                 24V
            </span>            
        </div>
        <div className='h-full  flex-1 '>

        </div>
        <span className='absolute top-2 right-3'>
            <FaStar/>
        </span>
    </div>
  )
}

export default CoinTracking