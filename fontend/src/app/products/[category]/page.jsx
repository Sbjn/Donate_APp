import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";


const Caregory = async ({ params }) => {
  
  async function getData() {
    const res = await fetch(`http://localhost:8080/api/category/${params.category}/posts`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const data = await getData(params);

  return (
    <div className="[&>*:nth-child(2n+1)]:flex-row-reverse">
      <h1 className="text-green-200 font-bold my-5 text-4xl">
        {}
      </h1>
      {data.map((item) => (
        <div key={item.categoryId} className="flex mt-14 mb-24 gap-14 ">
        <div className="flex flex-1 flex-col gap-5 justify-center">
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <p className="text-xl">{item.content}</p>
          <Button url={`/blog/${item.postId}`} text="もっと見る" />
        </div>
        <div className="flex flex-1 h-big relative">
          <Image
            className="object-cover rounded-2xl"
            fill={true}
            src={item.image ? `http://localhost:8080/api/profiles/${item.image}` : '/logo1.png'}
            alt=""
          />
        </div>
      </div>
    ))}
    </div>
  );
};

export default Caregory;
