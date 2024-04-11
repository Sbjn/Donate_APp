/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Button from "../../../components/Button/Button";
import Image from "next/image";

const post = async ({ params }) => {
  async function getData() {
    const res = await fetch(`http://localhost:8080/api/posts/${params.id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const data = await getData();
  return (
    <div>
      <div key={data.postId} className="grid grid-rows mx-14">
        <div className="flex mb-3 justify-center">
          <div className="flex-1 grid grid-rows-2 gap-5">
            <div className="">
              <h1 className="text-5xl font-bold my-7">{data.title}</h1>
              <p className="m-3 text-xl">{data.content}</p>
            </div>
            <div className="flex h-12 content-end">
              <Image
                className="rounded-full object-scale-down bg-cyan-100"
                src={`http://localhost:8080/api/profiles/${data.image}`}
                alt=""
                width={50}
                height={20}
              />
              <span className="flex justify-center items-center ml-2">
                {data.user.username}
              </span>
            </div>
          </div>
          <div className="flex flex-1 m-auto justify-center relative h-400">
            <Image
              className="object-cover h-72 rounded-2xl"
              src={`http://localhost:8080/api/profiles/${data.image}`}
              fill={true}
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Button url="/products" text="受け取り" />
        </div>
      </div>
    </div>
  );
};

export default post;
