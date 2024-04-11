import Link from 'next/link'
import React from 'react'

const button = ({text,url}) => {
  return (
    <Link href={url}>
    <button className='p-5 cursor-pointer rounded bg-green-500 border-none text-white text-3xl w-fit'>{text}</button>
    </Link>
  )
}

export default button