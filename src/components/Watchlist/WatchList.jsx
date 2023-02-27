import React from 'react'
import { useSelector } from 'react-redux'
import WatchlistItem from './WatchListItem'

const WatchList = () => {

    const {trackingCoins } = useSelector(state => state.coinTracking)

  return (
    <div className='lg:w-[45%] md:w-[25%] w-full md:h-[calc(100vh_-_180px)] max-h-1/2 overflow-y-auto scrollbar '>
        <div className='w-full h-full flex flex-col p-5'>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='text-xl font-Unbounded text-secondary'>Watchlist</h1>
            </div>
            <div className='w-full flex flex-wrap justify-center gap-5' >
                {trackingCoins.length === 0 && <h1 className='w-full h-full flex justify-center items-center  text-lg font-Unbounded text-gray-400'>No coins in watchlist</h1>}
                {trackingCoins.map((coin) => (
                    <WatchlistItem key={coin.id} coin={coin}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WatchList