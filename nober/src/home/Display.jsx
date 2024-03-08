import React, { useState } from 'react'
import '../App.css'
import Typewriter from 'typewriter-effect';

const Display = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const rotateStyle = {
    transform: isHovered ? 'rotate(2deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className='mt-4'>
    <div className='flex justify-center'>
<div className='flex justify-center relative  w-full'>
<div
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
style={rotateStyle}
className='moving-words-container md:ml-[12rem]  rounded-xl md:w-8/12 w-10/12 md:h-[20rem] h-[15rem] wel-bg'>
<div className=' move-words text-neutral-300 md:text-2xl p-4 font-bold'>Welfare Management System</div>

<div
className=' text-neutral-300 md:text-lg text-sm md:font-bold absolute md:top-[10rem] top-[6rem] md:left-[6rem] left-[2rem]  flex items-center'
>
<Typewriter
            options={{
              strings: [
                "We Ensure Every Contribution Counts",
                "Access Financial Records instantly by Phone",
                "Automation with Minimal Human Interaction"
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              cursor: "|",
              deleteSpeed: 60

            }}
          />
</div>

</div>
</div>
    </div>
    </div>
  )
}

export default Display