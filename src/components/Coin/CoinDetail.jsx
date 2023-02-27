import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCoinDetail, getCoinHistory, getTrendingCoins } from '../../store/Slice/coin-slice'
import CoinChart from './CoinChart'
import CoinTrending from './CoinTrending'
import CoinDetailItem from './CoinDetailItem'

const CoinDetail = () => {

    const dispatch = useDispatch()
    const {coin,statusChart,coinHistory} = useSelector(state => state.coinTracking)
    const {id} = useParams()

    useEffect(() => {
            dispatch(getTrendingCoins())
            dispatch(getCoinDetail(id))
            dispatch(getCoinHistory(id))
    }, [id])

    return (
    <div className='w-full h-full container mx-auto text-white flex flex-col'>
            <div className='flex items-center py-3 gap-2 border-b border-gray-300 border-opacity-20'>
                <img src={coin.image?.large} alt="symbol" className='w-12 h-12 rounded-full'/>
                <h1 className='text-2xl flex justify-center items-center  font-Unbounded '>{coin.name} - <span className='text-sm ml-2 text-gray-500 font-Unbounded uppercase' >{coin.symbol}</span> </h1>
            </div>
            <div className='w-full md:h-[60%] mt-5 flex justify-between'>
                <div className='xl:w-[70%] md:w-[60%] w-full  '>
                    {statusChart === 'succeeded' && <CoinChart name={coin.name} coinData={coinHistory} />}
                </div>
                <CoinTrending/>
            </div>
                <CoinDetailItem coin={coin}/>
          
    </div>
    )
}

export default CoinDetail