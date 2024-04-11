/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const session = useSession();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    
      signIn("credentials", {
        username,
        password,
      });
   };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated" && session?.data) {
    router?.push("/dashboard");
  }

  return (
    <div className="flex text-center items-center justify-center text-black ">
      <div className="">
        <h2 className="py-1 text-gray-900 text-3xl"><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>ログイン</span></h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className=" text-left py-1 text-slate-400" htmlFor="email">
          Eメール
          </label>
          <input
            className="bg-white my-2 p-4 border-2 rounded-lg bg-transparent text-gray-900 font-medium"
            type="username"
            placeholder="Eメール"
            id="email"
            name="email"
            required
          />
          <label className="text-left py-1 text-slate-400 " htmlFor="password">
          パスワード
          </label>
          <input
            className="bg-white my-2 p-4 border-2 rounded-lg bg-transparent text-gray-900 font-medium"
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button
            className="border-2 rounded-lg p-2 my-4 cursor-pointer font-bold text-xl text-white bg-green-500"
            type="submit"
          >
            ログイン
          </button>
        </form>
      <div>
      <Link href="/dashboard/register">
        <button className="text-slate-400">
        アカウントをお持ちでない方
        </button>
      </Link>
      </div>

      </div>
    </div>
  );
};


export default LoginPage;