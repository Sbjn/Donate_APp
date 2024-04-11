"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {
    const {toggle,mode} = useContext(ThemeContext);
  return (
    <div className='flex items-center justify-between h-6 border-2 border-solid border-#53c28b70 rounded-3xl relative p-1' onClick={toggle}>
        <div className='text-[12px]'>🌙</div>
        <div className='text-[12px]'>🔆</div>
        <div className='w-4 h-4 rounded-full absolute bg-green-300 cursor-pointer'
        style = {mode === "dark" ? {left:"2px"} : {right:"2px"}}/>
    </div>
  )
}

export default DarkModeToggle