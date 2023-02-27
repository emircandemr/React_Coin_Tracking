import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {MdClose} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeCoin } from '../../store/Slice/coin-slice'
const WatchlistItem = (props) => {
    const {coin} = props
    const dispatch = useDispatch()

    const handleClose = (id) => {
        dispatch(removeCoin(id))
    }
  return (


    <div  className='w-44 h-32 bg-[#121212] hover:bg-[#212121] p-2 rounded-lg flex flex-row md:flex-col relative' >
        <Link to={`/coin/${coin.id}`} className='w-full h-full flex flex-col justify-between items-center '  >
        <div className='flex justify-center items-center'>
            <img src={coin.image} alt="symbol" className='w-11 rounded-full' />
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
        </Link>
        <div className='absolute top-1 right-1'>
            <MdClose onClick={() => handleClose(coin.id)} className='hover:text-secondary cursor-pointer ' />
        </div>
    </div>
  )
}

export default WatchlistItem