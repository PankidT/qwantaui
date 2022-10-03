import { React, useState } from 'react';
import Link from 'next/link';

import { MdDashboard,MdLogout } from 'react-icons/md';
import { AiFillExperiment, AiFillSetting } from 'react-icons/ai';
import { FaLaptopCode } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';

function Sidebar() {

    const [open, setOpen] = useState(true)

    const Menus = [
        { title: "Dashboard", icon: <MdDashboard/>, route: "/" },
        { title: "Experiment", icon: <AiFillExperiment/>, route: "/Experiment", gap: true },
        { title: "Lab", icon: <FaLaptopCode/>, route: "/Lab" },
        { title: "Account", icon: <RiAccountCircleFill/>, route: "/Account", gap:true },
        { title: "Setting", icon: <AiFillSetting/>, route: "Setting" },
        { title: "Logout", icon: <MdLogout/>, route: "/Logout" },
    ]

    return (
        <div className='flex z-50'>
            <div className={`${open ? 'w-72' : 'w-20'} relative duration-300 h-screen p-5 pt-8 bg-[#262626]`}>

                <MdDashboard
                    className={`absolute cursor-pointer rounded-full h-7
                        -right-3 top-9 w-7 text-white ${!open && 'rotate-180'}`}
                    onClick={()=>setOpen(!open)}>
                </MdDashboard>

                <div className='flex gap-x-4 items-center'>

                    <MdDashboard
                        className={`cursor-pointer duration-500 text-white ${!open && 'rotate-[360deg]'}`}
                        onClick={()=>setOpen(!open)}>
                    </MdDashboard>

                    <h1 
                        className={`text-white orgin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
                            Qwanta
                    </h1>
                </div>
                <ul className='pt-6'>
                    {Menus.map((menu, index)=>(
                        <Link href={menu.route}>
                        <li key={index} 
                            className={`text-gray-300 text-sm flex items-center gap-x-4 
                                cursor-pointer p-2 hover:bg-light-white rounded-md 
                                ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}>

                                {menu.icon}

                                <span className={`${!open && 'hidden'} origin-left duration=200`}>
                                     {menu.title}
                                </span>
                                
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar