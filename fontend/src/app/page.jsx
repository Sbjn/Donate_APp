import Image from 'next/image'
import Hero from 'public/logo2.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <><div className="h-400 bg-[url('/donate.png')]">
     
    </div><div className="flex items-center gap-20 grid-cols-2">
        <div className='flex-1 flex flex-col gap-12'>
          <h1 className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>
            私達の地球 - 私達の未来
          </h1>
          <p className='text-2xl font-light'>
            あらゆる寄付が、困っている人々に変化をもたらします。
            困っている何千人もの人々の生活に変化をもたらすために私たちにご協力ください<br></br><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>寄付しましょう</span>
          </p>
          <Button url="/products" text="食品情報" />
        </div>

        <div>
          <Image className='animate-bounce-slow-2 w-full h-big object-cover' src={Hero} alt="" />
        </div>

      </div></>
  )
}
