import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className='w-[100vw] h-screen flex justify-center items-center'>
        <PropagateLoader color={'#fca311'} loading={true} size={35} />
    </div>
  )
}

export default Loading