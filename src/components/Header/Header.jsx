import React from 'react'
import { FaHome, FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { getCoinHistory, getCoinQuery } from '../../store/Slice/coin-slice'

const Header = ({search,setSearch,setIsSearchModalOpen}) => {

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchModal = () => {
    setIsSearchModalOpen(true)
    dispatch(getCoinQuery(search))
    dispatch(getCoinHistory(search))
    setSearch('')
  }

  return (
    <div className='flex justify-between items-center py-5 border-b border-gray-300 border-opacity-20'>
        <div className='flex items-center  gap-2 '>
            <FaHome className='text-2xl text-secondary'/>
            <h1 className='text-2xl  font-Unbounded '>Dashboard</h1>
        </div>
        <div className='md:w-[25%] md:mr-0 mr-2 w-1/2'>
            <div class="w-full flex justify-center items-center bg-transparent border border-[#212121] rounded-lg p-2  ">
                <FaSearch className='text-xl text-[#212121]'/>
                <input 
                  type="text" 
                  value={search}
                  onChange={handleSearch}
                  onKeyDown = {(e) => { if (e.key === 'Enter') { handleSearchModal() } }}
                  className="w-full h-full bg-transparent outline-none px-2 text-sm placeholder:text-[#454444] font-Unbounded " 
                  placeholder="Search" />
            </div>
        </div>
    </div>
  )
}

export default Header