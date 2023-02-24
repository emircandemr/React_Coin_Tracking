import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'

const CoinItem = (props) => {
    const {coin} = props
  return (
    <div className='w-36 h-32 bg-[#121212] hover:bg-[#212121] p-2 rounded-lg flex flex-col justify-between items-center' >
        <div className='flex justify-center items-center'>
            <img src={coin.image} alt="" className='w-11 rounded-full' />
            <div className='min-w-1/2 flex flex-col ml-2 '>
                <h1 className='w-20 text-sm font-Unbounded truncate '>{coin.name}</h1>
                <h2 className='text-xs mt-1 text-gray-500 font-Unbounded uppercase'>{coin.symbol}</h2>
            </div>
        </div>
        <div className='h-full flex flex-col  justify-center'>
            <span className='text-sm font-Unbounded tracking-wider '>${coin.current_price}</span>
            <span className={`text-[0.7rem] mt-2 flex justify-start items-center font-Unbounded ${coin.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'} `}>
                {
                coin.price_change_24h > 0 ? <FaLongArrowAltUp className='text-xs mr-1'/> : <FaLongArrowAltDown className='text-xs mr-1'/>
                }
                {coin.price_change_24h}
            </span>            
        </div>
    </div>
  )
}

export default CoinItem