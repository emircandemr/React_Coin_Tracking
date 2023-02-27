import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from '../../store/Slice/coin-slice'
import {IoMdArrowRoundBack,IoMdArrowRoundForward} from 'react-icons/io'
import CoinItem from './CoinItem'

const CoinList = () => {

    const ref = useRef(null)
    const dispatch = useDispatch()
    const {coinList} = useSelector(state => state.coinTracking)
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

    // Auto refresh every 5 minutes
    useEffect(() => {
        ref.current = setInterval( () => {
            dispatch(getCoins(currentPage))
        }, 5 * 60 * 1000)
        return () => {
            if (ref.current) {
                clearInterval(ref.current)
            }
        }
    },[])

  return (
    <div className='lg:w-[60%] md:w-[70%] w-full md:h-[calc(100vh_-_130px)] h-1/2 border-r border-gray-300 border-opacity-20 mt-4 flex flex-col justify-center items-center gap-y-5 '>
    {currentCoins.map((coin) => (
        <CoinItem key={coin.id} coin={coin}/>
    ))}
    <div className='w-full flex justify-center items-center'>
        <button 
        onClick={() => paginate(currentCoinList - 1)}
        className={`inline-flex items-center px-4 py-2 mr-3 text-sm font-medium bg-[#121212] rounded-lg hover:bg-[#212121] ${currentCoinList < 2 ? 'opacity-25' : ''  } `}>
            <IoMdArrowRoundBack/>
                Previous
        </button>
        <button 
        onClick={() => paginate(currentCoinList + 1)}
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium bg-[#121212] rounded-lg hover:bg-[#212121]">
                Next
                <IoMdArrowRoundForward/>
        </button>
    </div>
</div>
  )
}

export default CoinList