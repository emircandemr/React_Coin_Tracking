import React from 'react'
import { useSelector } from 'react-redux'
import WatchlistItemtItem from './WatchListItem'

const WatchList = () => {

    const {trackingCoins } = useSelector(state => state.coinTracking)

  return (
    <div className='w-[45%] h-[calc(100vh_-_100px)]  '>
        <div className='w-full h-full flex flex-col p-5'>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='text-xl font-Unbounded text-secondary'>Watchlist</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-3' >
            {trackingCoins.map((coin) => (
                <WatchlistItemtItem key={coin.id} coin={coin}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WatchList