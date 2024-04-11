"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [err, setErr] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    try {
      const res = await fetch(`http://localhost:8080/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
    
      if (res.status === 201) {
        router.push('/dashboard/login');
        console.log("resgister sucssesfully");
      } else {
        console.log("user has been existed");
      }
    } catch (err) {
      setErr(true);
    }
  }
  
  return (
    <div className="flex text-center items-center justify-center text-black ">
      <div className="">
      <h2 className="py-1 text-gray-900 text-3xl"><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>会員登録</span></h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-left py-1 text-slate-400" value="name">ニックネーム</label>
          <input className="bg-white my-2 p-4 border-2 rounded-lg bg-transparent text-gray-900 font-medium" id="name" placeholder="ニックネーム" required />
          <label className="text-left py-1 text-slate-400" value="email">Eメール</label>
          <input className="bg-white my-2 p-4 border-2 rounded-lg bg-transparent text-gray-900 font-medium" type="email" placeholder="Eメール" id="email" name="email"  required/>
          <label className="text-left py-1 text-slate-400" value="password" required>パスワード</label>
          <input className="bg-white my-2 p-4 border-2 rounded-lg bg-transparent text-gray-900 font-medium"
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="border-2 rounded-lg p-2 my-4 cursor-pointer font-bold text-xl text-white bg-green-500" type="submit">会員登録</button>
        </form>
        <p className="text-red-500">{err}</p>
        <Link className=" bg-transparent p-1 my-2 cursor-pointer text-slate-400 " rel="stylesheet" href="/dashboard/login" >すでにアカウントをお持ちですか？ <br></br>ここでログイン。</Link>
      </div>
    </div>
  );
};

export default register;