import { React, useState }  from 'react';
import Gmap from '../../component/Gmap';
// import './experStyle.css'

// import { BsChevronLeft } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';

function Experiment() {

    const [open, setOpen] = useState(true)

    return (

        <div className='flex w-full h-100 bg-gray1 text-[#d1d5dc]'>
            <Gmap />
            <div className='flex z-50'>
                <div className={`${open ? 'w-5/12' : 'w-5'} absolute right-0 duration-300 h-screen bg-[#262626]`}>

                    <div className={`absolute cursor-pointer bottom-1/2 duration-300 ${open && 'rotate-[180deg]'}`} 
                        onClick={()=>setOpen(!open)}>
                        <MdDashboard />
                    </div>
                    {open ? 

                    // Provide user form here
                    <form>
                        <label htmlFor="exper-select">Choose your experiment:</label>
                        <br/>
                        <select className='bg-[#171717]'>
                            <option value={null}>1 exper</option>
                            <option value={null}>2 exper</option>
                            <option value={null}>3 exper</option>
                            <option value={null}>4 exper</option>
                            <option value={null}>5 exper</option>
                        </select>
                    </form>
                    //
                    
                    : null}
                </div>

            </div>
        </div>

    )
}

export default Experiment;