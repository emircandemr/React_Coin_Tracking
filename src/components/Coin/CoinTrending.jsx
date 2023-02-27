import React from 'react'
import { useSelector } from 'react-redux'

const CoinTrending = () => {
    const {trendingCoins} = useSelector(state => state.coinTracking)

  return (
    <div className='xl:w-[30%] w-[40%] h-full md:block hidden px-2 py-2 bg-[#121212] rounded-xl font-Unbounded overflow-x-hidden overflow-y-auto text-justify scrollbar'>
    <h1 className=' text-secondary text-xl' >Trending Coins</h1>
    {trendingCoins.map((coin) => (
        <div key={coin.id} className='w-full h-14 bg-primary rounded-xl mt-3 flex items-center '>
            <img src={coin.item.large} alt="symbol" className='xl:w-12 xl:h-12 w-8 h-8 rounded-full'/>
            <div className=' min-w-[40%] flex-1 flex-col lg:ml-5 ml-1'>
                <h1 className='xl:text-sm text-xs font-Unbounded truncate '>{coin.item.name}</h1>
                <h2 className='text-xs mt-1 text-gray-500 font-Unbounded uppercase'>{coin.item.symbol}</h2>
            </div>
            <div className='w-[40%] h-full  flex flex-col lg:ml-5 ml-1 justify-center items-center'>
                <span className='xl:text-sm text-xs font-Unbounded text-green-500'>${coin.item.price_btc}</span>
                <span className='text-xs mt-1 text-left text-gray-500 opacity-80  font-Unbounded'>
                    Price BTC
                </span>   
            </div>
    </div>
    ))}
</div>
  )
}

export default CoinTrending