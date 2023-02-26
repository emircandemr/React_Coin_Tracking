import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loader/Loading'
import Header from './Header/Header'
import CoinList from './Coin/CoinList'
import WatchList from './Watchlist/WatchList'
import CoinSearch from './Coin/CoinSearch'

const Dashboard = () => {
    const {status } = useSelector(state => state.coinTracking)
    
    const [search, setSearch] = useState('')
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  return (
    <section className='w-full h-screen bg-primary p-5 overflow-hidden   '>
        {status === 'pending' && <Loading/>}
        <div className='container mx-auto flex flex-col text-white'> 
            <Header search={search} setSearch={setSearch} setIsSearchModalOpen ={setIsSearchModalOpen}  />
            <div className='flex'>
                <CoinList/>
                <WatchList/>
            </div>
            {isSearchModalOpen && <CoinSearch />}
        </div>
    </section>
  )
}

export default Dashboard