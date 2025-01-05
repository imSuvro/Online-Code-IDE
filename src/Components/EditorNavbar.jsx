import React from 'react'
import logo from '../Images/logo.png'
import { FiDownload } from 'react-icons/fi'


const EditorNavbar = () => {
    return (
        <>
            <div className="editorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
                <div className="logo">
                    <img className='w-[150px] cursor-pointer' src={logo} alt="logo" />
                </div>
                <p>File / <span className='text-[gray]'>My First Project</span></p>
                <i className='p-[8px] bg-black rounded-[5px] cursor-pointer text-[20px]'><FiDownload /></i>
            </div>
        </>
    )
}

export default EditorNavbar