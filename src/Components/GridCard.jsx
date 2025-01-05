import React from 'react'
import codeImg from '../Images/code.png'
import deleteBtn from '../Images/delete.png'

const GridCard = () => {
    return (
        <>
            <div className="gridCard mb-4 bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black">
                <img className='w-[90px]' src={codeImg} alt="codeImg" />
                <h3 className='text-[20px] w-[90%] line-clamp-1'>My First Project</h3>
                <div className='flex items-center justify-between'>
                    <p className='text-[14px] text-[gray]'>Created on 4th January, 2025</p>
                    <img className='w-[30px] cursor-pointer' src={deleteBtn} alt="deleteBtn" />
                </div>
            </div>
        </>
    )
}

export default GridCard