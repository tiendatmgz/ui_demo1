import React from 'react';
import { useEffect, useState } from "react";
import { getConfigNav } from '../config/ConfigObject'
var nav = getConfigNav();
const Nav = () => {
    return (
        <div className='text-white  mix-blend-difference'>
            <NavTop />
            <NavLeft />
        </div>
    );
};
const NavTop = () => {
    return (
        <div className="nav_top p-5 h-32 w-full  bg-black border-white fixed top-0 left-0">
            <div className="w-full h-full border  flex ">
                <div className="h-full aspect-square"></div>
                <div className="h-full aspect-square"></div>
                <div className='flex justify-between w-full'>
                    <ul className='flex h-full space-x-5'>
                        {nav.map((item, index) =>
                            <li key={index} className='flex ' >
                                <a href={'/' + item.name} className='h-full flex flex-col justify-center '>
                                    <div>{`0${index + 1}.`}</div>
                                    <div className='font-bold'>
                                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                    <a href='/' className='h-full flex gap-2 items-center justify-center px-5'>
                        <span className='font-bold'>Contact</span>
                        <span className='mix-blend-normal bg-white text-black w-8 aspect-square flex justify-center items-center rounded-full'><i className="fa-solid fa-arrow-right"></i></span>
                        <></>
                    </a>
                </div>
            </div>
        </div >
    );
}

const NavLeft = () => {
    const [windownheight, setWindownHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleResize = () => {
            setWindownHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="nav_left p-5 w-32 fixed top-0" style={{ height: `${windownheight}px` }}>
            <div className="w-full h-full border border-white flex flex-col items-center justify-between">
                <div className="w-full aspect-square flex  items-center justify-center">
                    <div className="w-16 rounded-full aspect-square border-2 border-white flex items-center justify-center uppercase font-bold">đạt</div>
                </div>
                <div className="mb-5 w-full flex flex-col items-center justify-center">
                    <a href="/" className="text-lg h-full flex p-4 items-center justify-center">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/" className="text-lg h-full flex p-4 items-center justify-center">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}



export default Nav