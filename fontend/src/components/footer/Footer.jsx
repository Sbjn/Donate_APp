import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-14 flex items-center justify-between'>
            <div>@6/2023 Donate With B</div>
            <div className='flex items-center gap-4'>
                <Image className='opacity-80 cursor-pointer' src="/1.png" height={18} width={18} alt="Donate FB"/>
                <Image className='opacity-80 cursor-pointer' src="/2.png" height={18} width={18} alt="Donate Ins"/>
                <Image className='opacity-80 cursor-pointer' src="/3.png" height={18} width={18} alt="Donate"/>
                <Image className='opacity-80 cursor-pointer' src="/4.png" height={18} width={18} alt="Donate"/>
            </div>
    </div>
  );
};

export default Footer