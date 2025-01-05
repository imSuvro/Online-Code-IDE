import React from 'react'
import EditorNavbar from '../Components/EditorNavbar'
import Editor from '@monaco-editor/react';

const EditorSide = () => {
    return (
        <>
            <EditorNavbar />
            <div className="flex">
                <div className="left w-[50%]">
                    <div className='flex items-center gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]'>
                        <div className="tab p-[6px] bg-[#1E1E1E] px-[10px] text-[15px] cursor-pointer hover:bg-[#202020]">HTML</div>
                        <div className="tab p-[6px] bg-[#1E1E1E] px-[10px] text-[15px] cursor-pointer hover:bg-[#202020]">CSS</div>
                        <div className="tab p-[6px] bg-[#1E1E1E] px-[10px] text-[15px] cursor-pointer hover:bg-[#202020]">JavaScript</div>
                    </div>
                    <Editor height="80vh" theme="vs-dark" defaultLanguage="javascript" defaultValue="// Write your JS code" />
                </div>
                <iframe id="output" className='w-[50%] min-h-[89vh] bg-[#fff]' src=""></iframe>
            </div>
        </>
    )
}

export default EditorSide