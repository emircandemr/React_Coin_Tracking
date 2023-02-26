import React from 'react'
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi'

const CoinDetailItem = ({coin}) => {
  return (
    <div className='w-[70%] h-[15%] rounded-xl p-5 mt-5 flex gap-x-8'>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className='text-base font-Unbounded tracking-wider '>${coin.market_data?.current_price.usd}</span>
        <span className={`text-sm mt-2 flex justify-center items-center font-Unbounded ${coin.market_data?.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'} `}>
            {
                coin.market_data?.price_change_24h > 0 ? <BiTrendingUp className='text-xs mr-1'/> : <BiTrendingDown className='text-xs mr-1'/>
            }
            {coin.market_data?.price_change_24h.toFixed(5)}
        </span>            
    </div>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className={`text-sm font-Unbounded ${coin.market_data?.price_change_percentage_1h_in_currency > 0 ? 'text-green-500' : 'text-red-500' }`}>
            %{coin.market_data?.price_change_percentage_1h_in_currency.usd}
        </span>
        <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
            1h
        </span>            
    </div>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className={`text-sm font-Unbounded ${coin.market_data?.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500' }`}>
            %{coin.market_data?.price_change_percentage_24h}
        </span>
        <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
            24h
        </span>            
    </div>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className={`text-sm font-Unbounded ${coin.market_data?.price_change_percentage_7d > 0 ? 'text-green-500' : 'text-red-500' }`}>
            %{coin.market_data?.price_change_percentage_7d}
        </span>
        <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
            7d
        </span>            
    </div>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className={`text-sm font-Unbounded ${coin.market_data?.price_change_percentage_14d > 0 ? 'text-green-500' : 'text-red-500' }`}>
            %{coin.market_data?.price_change_percentage_14d}
        </span>
        <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
            14d
        </span>            
    </div>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className={`text-sm font-Unbounded ${coin.market_data?.price_change_percentage_30d > 0 ? 'text-green-500' : 'text-red-500' }`}>
            %{coin.market_data?.price_change_percentage_30d}
        </span>
        <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
            30d
        </span>            
    </div>
    <div className='h-full w-32 px-3 rounded-lg bg-[#121212] hover:bg-primary hover:border hover:border-[#212121] box-border cursor-pointer flex flex-col justify-center items-center'>
        <span className={`text-sm font-Unbounded ${coin.market_data?.price_change_percentage_1y > 0 ? 'text-green-500' : 'text-red-500' }`}>
            %{coin.market_data?.price_change_percentage_1y}
        </span>
        <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
            1y
        </span>            
    </div>
</div>
  )
}

export default CoinDetailItem