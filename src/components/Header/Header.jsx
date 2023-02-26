import React from 'react'
import { FaHome, FaSearch } from 'react-icons/fa'

const Header = ({search,setSearch,setIsSearchModalOpen}) => {

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
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
                  value={search}
                  onChange={handleSearch}
                  onKeyDown = {(e) => { if (e.key === 'Enter') { setIsSearchModalOpen(true) } }}
                  className="w-full h-full bg-transparent outline-none px-2 text-sm placeholder:text-[#454444] font-Unbounded " 
                  placeholder="Search" />
            </div>
        </div>
    </div>
  )
}

export default Header