import React from 'react'
import codeImg from '../Images/code.png'
import deleteBtn from '../Images/delete.png'

const ListCard = () => {
    return (
        <>
            <div className="listCard w-full mb-2 flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
                <div className="flex items-center gap-4">
                    <img className='w-[80px]' src={codeImg} alt="codeImg" />
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-[20px]'>
                            My First Project
                        </h3>
                        <p className='text-[gray] text-[14px]'>
                            Created on 4th January, 2025
                        </p>
                    </div>
                </div>
                <div>
                    <img className='w-[40px] cursor-pointer mr-4' src={deleteBtn} alt="deleteBtn" />
                </div>
            </div>
        </>
    )
}

export default ListCard