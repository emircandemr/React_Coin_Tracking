import React from 'react'
import {FaStar} from 'react-icons/fa'
import {BiTrendingDown,BiTrendingUp} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addCoin } from '../../store/Slice/coin-slice'
import { Link } from 'react-router-dom'

const CoinItem = (props) => {
    const {coin} = props
    const dispatch = useDispatch()
    const {trackingCoins } = useSelector(state => state.coinTracking)

    const handleFavorite = (coin) => {
        dispatch(addCoin(coin))
    }

    const isFavorite = trackingCoins.find((item) => item.id === coin.id)


  return (
    <div className='w-[98%] h-28 bg-[#121212] hover:bg-[#212121] pl-2 rounded-lg flex justify-center items-center relative cursor-pointer'>
        <Link to={`/coin/${coin.id}`} className='w-full h-full flex items-center lg:gap-x-10 gap-x-5' >  
            <div className='h-full min-w-[20%]  flex items-center'>
                <img src={coin.image} alt="symbol" className='w-12 rounded-full'/>
                <div className='min-w-[50%] flex flex-col ml-5'>
                    <h1 className='w-24 text-sm font-Unbounded truncate '>{coin.name}</h1>
                    <h2 className='text-xs mt-1 text-gray-500 font-Unbounded uppercase'>{coin.symbol}</h2>
                </div>
            </div>
            <div className='h-full flex flex-col min-w-[15%] justify-center'>
                <span className='text-sm font-Unbounded tracking-wider '>${coin.current_price}</span>
                <span className={`text-[0.7rem] mt-2 flex justify-start items-center font-Unbounded ${coin.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'} `}>
                    {
                    coin.price_change_24h > 0 ? <BiTrendingUp className='text-xs mr-1'/> : <BiTrendingDown className='text-xs mr-1'/>
                    }
                    {coin.price_change_24h}
                </span>            
            </div>
            <div className='min-w-[12%]  h-full flex flex-col justify-center'>
                <span className='text-sm font-Unbounded text-green-500'>${coin.high_24h}</span>
                <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
                    High 24h
                </span>            
            </div>
            <div className='min-w-[12%]  h-full sm:flex hidden flex-col justify-center'>
                <span className='text-sm font-Unbounded text-red-500'>${coin.low_24h}</span>
                <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
                    Low 24h
                </span>            
            </div>
            <div className='min-w-[12%] xl:flex hidden h-full flex-col justify-center'>
                <span className={`text-sm font-Unbounded ${ coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500' }`}>
                    %{coin.price_change_percentage_24h}
                </span>
                <span className='text-xs mt-2 text-left text-gray-500 opacity-80  font-Unbounded'>
                    24h
                </span>            
            </div>
        </Link>
        <button 
            onClick={() => {handleFavorite(coin)}}
            className={`absolute top-2 right-3 ${isFavorite ? 'cursor-not-allowed' : '' } `}
            disabled={isFavorite ? true : false}
            >
            <FaStar className={`hover:text-secondary ${isFavorite ? 'text-secondary' : 'text-white' } `}/>
        </button>
    </div>
  )
}

export default CoinItem