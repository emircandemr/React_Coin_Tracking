import React from 'react'
import { useSelector } from 'react-redux'
import CoinChart from './CoinChart'

const CoinSearch = ({setIsSearchModalOpen}) => {
  const {statusChart,coinHistory,searchedCoin} = useSelector(state => state.coinTracking)
  return (
    <div className='w-full h-full fixed top-0  left-0;'>
        <div onClick={() => setIsSearchModalOpen(false)} className='w-full h-full bg-black bg-opacity-80 backdrop-filter: blur(1px)'></div>
        <div className='xl:w-[60%] lg:w-[70%] xl:h-[50%] h-[40%] w-[80%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  bg-[#121212] rounded-xl shadow-xl flex  justify-center items-center '>
          {searchedCoin === undefined &&  <div className='w-full h-full flex justify-center items-center ' > <h1 className='text-2xl font-Unbounded text-gray-500'>No Coin Found</h1> </div> }
          {searchedCoin !== undefined && 
          <div className='w-full h-full flex md:flex-row flex-col justify-center items-center ' >
            <div className='md:w-[80%] w-full p-5 h-full flex justify-center items-center'>
                  {statusChart === 'succeeded' && <CoinChart name={searchedCoin?.name} coinData={coinHistory} />}
            </div>
            <div className='w-[30%] h-full md:flex hidden flex-col justify-center items-center'>
                    <img src={searchedCoin?.large} alt="symbol" className='lg:w-20 lg:h-20 w-12 h-12 object-cover'/>
                    <h1 className='lg:text-2xl text-xl font-Unbounded text-secondary mt-3'>{searchedCoin?.name}</h1>
                    <h1 className='lg:text-xl text-base font-Unbounded text-gray-500 mt-1'>{searchedCoin?.symbol}</h1>
            </div>
          </div>
          }
        </div>
    </div>
  )
}

export default CoinSearch