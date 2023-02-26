import React from 'react'
import { useSelector } from 'react-redux'
import CoinChart from './CoinChart'

const CoinSearch = ({setIsSearchModalOpen}) => {
  const {statusChart,coinHistory,searchedCoin} = useSelector(state => state.coinTracking)
  return (
    <div className='w-full h-full fixed top-0  left-0;'>
        <div onClick={() => setIsSearchModalOpen(false)} className='w-full h-full bg-black bg-opacity-80 backdrop-filter: blur(1px)'></div>
        <div className='w-[60%] h-[50%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  bg-[#121212] rounded-xl shadow-xl flex justify-center items-center '>
          <div className='w-[80%] p-5 h-full flex justify-center items-center'>
                  {statusChart === 'succeeded' && <CoinChart name={searchedCoin.name} coinData={coinHistory} />}
            </div>
            <div className='w-[30%] h-full flex flex-col justify-center items-center'>
                    <img src={searchedCoin.large} alt="" className='w-20 h-20 object-cover'/>
                    <h1 className='text-2xl font-Unbounded text-secondary mt-3'>{searchedCoin.name}</h1>
                    <h1 className='text-xl font-Unbounded text-gray-500 mt-1'>{searchedCoin.symbol}</h1>
            </div>
        </div>
    </div>
  )
}

export default CoinSearch