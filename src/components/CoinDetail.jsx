import React, { useEffect, useState } from 'react'
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCoinDetail, getCoinHistory, getTrendingCoins } from '../store/Slice/coin-slice'
import CoinChart from './CoinChart'

const CoinDetail = () => {

    const dispatch = useDispatch()
    const {coin,trendingCoins,coinHistory} = useSelector(state => state.coinTracking)
    const {id} = useParams()
    const [day, setDay] = useState(7)

    useEffect(() => {
        dispatch(getCoinDetail(id))
        dispatch(getTrendingCoins())
        dispatch(getCoinHistory(id,day))
    }, [dispatch,day])
    

    const handleDay = (e) => {
        setDay(e.target.value)
    }
    
    return (
    <div className='w-full h-full container mx-auto text-white flex flex-col'>
            <div className='flex items-center py-3 gap-2 border-b border-gray-300 border-opacity-20'>
                <img src={coin.image?.large} alt="" className='w-12 h-12 rounded-full'/>
                <h1 className='text-2xl flex justify-center items-center  font-Unbounded '>{coin.name} - <span className='text-sm ml-2 text-gray-500 font-Unbounded uppercase' >{coin.symbol}</span> </h1>
            </div>
            <div className='w-full h-[60%] mt-5 flex justify-between'>
                <div className='w-[70%] min-h-full bg-red-500 '>
                    <CoinChart coinHistory={coinHistory} day={day} handleDay={handleDay}/>
                </div>
                <div className='w-[25%] h-full px-2 py-2 bg-[#121212] rounded-xl font-Unbounded overflow-x-hidden overflow-y-auto text-justify scrollbar'>
                    <h1 className=' text-secondary text-xl' >Trending Coins</h1>
                    {trendingCoins.map((coin) => (
                        <div className='w-full h-14 bg-primary rounded-xl mt-3 flex items-center '>
                        <img src={coin.item.large} alt="" className='w-12 h-12 rounded-full'/>
                        <div className=' min-w-[40%] flex-1 flex-col ml-5'>
                            <h1 className='text-sm font-Unbounded truncate '>{coin.item.name}</h1>
                            <h2 className='text-xs mt-1 text-gray-500 font-Unbounded uppercase'>{coin.item.symbol}</h2>
                        </div>
                        <div className='w-[40%] h-full  flex flex-col ml-5 justify-center items-center'>
                            <span className='text-sm font-Unbounded text-green-500'>${coin.item.price_btc}</span>
                            <span className='text-xs mt-1 text-left text-gray-500 opacity-80  font-Unbounded'>
                                Price BTC
                            </span>   
                        </div>
                    </div>
                    ))}
                </div>
            </div>
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
    </div>
    )
}

export default CoinDetail