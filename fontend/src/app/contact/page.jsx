import Image from 'next/image'
import React from 'react'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div>
      <h1 className='text-8xl mb-8 text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>
        お問い合わせ
      </h1>
      <div className='items-center gap-24 grid grid-cols-2'>
          <div className='h-big relative'>
            <Image
            className='animate-bounce-slow-1 object-fill'
            src="/contact.png" 
            fill={true}
            alt=""
            />
          </div>
          <form className='flex flex-col gap-5'>
            <input className='p-5 bg-transparent border-solid border-2 border-#bbb font-bold text-xl' type="text" placeholder='name' />
            <input className='p-5 bg-transparent border-solid border-2 border-#bbb font-bold text-xl' type="email" placeholder="email" />
            <textarea className='p-5 bg-transparent border-solid border-2 border-#bbb font-bold text-xl' placeholder="message" id="" cols="30" rows="10"></textarea>
            <Button url="#" text="送信" />
          </form>
      </div>
    </div>
  )
}

export default Contact