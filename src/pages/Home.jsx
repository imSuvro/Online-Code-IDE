import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import ListCard from '../Components/ListCard';
import GridCard from '../Components/GridCard';

const Home = () => {
    const [isGridLayout, setIsGridLayout] = useState(true);
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-between px-[100px] my-[40px]">
                <h2 className='text-2xl'>Hi, Suvra</h2>
                <div className="flex items-center gap-1">
                    <div className="inputBox !w-[350px]">
                        <input type="text" placeholder='Search Here...' />
                    </div>
                    <button className='btnBlue rounded-[5px] mb-4 text-[20px] !p-[5px] !px-[10px]'>+</button>
                </div>
            </div>
            <div className="cards">
                {
                    isGridLayout ?
                        <div className="grid px-[100px]">
                            <GridCard />
                            <GridCard />
                            <GridCard />
                            <GridCard />
                            <GridCard />
                            <GridCard />
                        </div>
                        :
                        <div className="list px-[100px]">
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard />
                        </div>
                }
            </div>
        </>
    )
}

export default Home