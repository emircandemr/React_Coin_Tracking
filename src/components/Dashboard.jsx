import React, { useEffect, useState } from 'react'
import {FaHome,FaSearch} from 'react-icons/fa'
import CoinTracking from './CoinTracking'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from '../store/Slice/coin-slice'
import CoinItem from './CoinItem'

const Dashboard = () => {
    const dispatch = useDispatch()
    const {coinList,trackingCoins} = useSelector(state => state.coinTracking)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentCoinList , setCurrentCoinList] = useState(1)

    const coinsPerPage = 7
    const lastCoinIndex = currentCoinList * coinsPerPage
    const firstCoinIndex = lastCoinIndex - coinsPerPage
    const currentCoins = coinList.slice(firstCoinIndex, lastCoinIndex)

    const paginate = (pageNumber) => {
        if(pageNumber < 1) return
        console.log(pageNumber)
        if(pageNumber > Math.ceil(coinList.length / coinsPerPage)) {
            setCurrentPage((currentPage) => currentPage + 1)
        }
        setCurrentCoinList(pageNumber)
    }

    useEffect(() => {
        dispatch(getCoins(currentPage))
    }, [currentPage, dispatch])
    
    
  return (
    <section className='w-full h-screen bg-primary p-5 overflow-hidden   '>
        <div className='container mx-auto flex flex-col text-white'> 
        {/* HEADER BAŞLANGIÇ */}
            <div className='flex justify-between items-center py-5 border-b border-gray-300 border-opacity-20'>
               <div className='flex items-center  gap-2 '>
                    <FaHome className='text-2xl text-secondary'/>
                    <h1 className='text-2xl  font-Unbounded '>Dashboard</h1>
               </div>
               <div className='w-[25%]'>
                    <div class="w-full flex justify-center items-center bg-transparent border border-[#212121] rounded-lg p-2  ">
                        <FaSearch className='text-xl text-[#212121]'/>
                        <input 
                        type="text" 
                        className="w-full h-full bg-transparent outline-none px-2 text-sm placeholder:text-[#454444] font-Unbounded " 
                        placeholder="Search" />
                    </div>
               </div>
            </div>
        {/* HEADER BİTİŞ */}
        {/* BODY BAŞLANGIÇ */}
        <div className='flex'>
            <div className='w-[55%] h-[calc(100vh_-_130px)] border-r border-gray-300 border-opacity-20 mt-4 flex flex-col gap-y-5'>
                {currentCoins.map((coin) => (
                    <CoinTracking key={coin.id} coin={coin}/>
                ))}
                <div className='w-full flex justify-center items-center'>
                    <button 
                    onClick={() => paginate(currentCoinList - 1)}
                    className={`inline-flex items-center px-4 py-2 mr-3 text-sm font-medium bg-[#121212] rounded-lg hover:bg-[#212121] ${currentCoinList < 2 ? 'opacity-25' : ''  } `}>
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                            Previous
                    </button>
                    <button 
                    onClick={() => paginate(currentCoinList + 1)}
                    className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium bg-[#121212] rounded-lg hover:bg-[#212121]">
                            Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <div className='w-[45%] h-[calc(100vh_-_100px)]  '>
                <div className='w-full h-full flex flex-col p-5'>
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='text-xl font-Unbounded text-secondary'>Watchlist</h1>
                    </div>
                    <div className='flex flex-wrap justify-center gap-3' >
                    {trackingCoins.map((coin) => (
                        <CoinItem key={coin.id} coin={coin}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Dashboard