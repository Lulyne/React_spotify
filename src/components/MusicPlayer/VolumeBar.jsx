import React from 'react'
import { BiVolumeFull, BiVolumeLow, BiVolumeMute } from 'react-icons/bi'
const VolumeBar = ({ value, min, max, onChange, setVolume }) => {
    return (
        <div className='hidden lg:flex flex-1 items-center justify-end'>
            {value <= 1 && value> 0.5 && <BiVolumeFull size={25} color='#fff' onClick={()=> setVolume(0)} />}
            {value <= 0.5 && value> 0 && <BiVolumeLow size={25} color='#fff' onClick={()=> setVolume(0)} />}
            {value == 0 && <BiVolumeMute size={25} color='#fff' onClick={()=> setVolume(1)} />}
            <input 
                type="range"  
                step="any"
                value={value}
                min={min}
                max={max}
                onChange={onChange}
                className='2xl:w-40 lg:w-32 h-1 ml-2'
            />
        </div>
    )
}

export default VolumeBar