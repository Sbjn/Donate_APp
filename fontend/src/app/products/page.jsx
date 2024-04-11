"use client"
import React from 'react'
import Link from 'next/link'
import styles from "./page.module.css";
import Product from "./product/page";

async function getData1() {
  const res = await fetch("http://localhost:8080/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getData() {
  const res = await fetch("http://localhost:8080/api/categories/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Portfolio = async () => {
  const data = await getData();

  const data1 = await getData1();
  return (
    <><div className="grid m-6 justify-center gap-3">
      <h1 className="my-5 text-4xl">食べ物の種類を選ぶ</h1>
      <div className="grid grid-cols-3 gap-3  [&>*:nth-child(1)]:bg-[url(/fruid.jpg)] [&>*:nth-child(2)]:bg-[url(/cannedfood.jpg)] [&>*:nth-child(3)]:bg-[url(/vegetables.jpg)] ">
        {data.map((item) => (
          <Link className="m-8 relative border-5 border-solid border-#bbb rounded h-400 w-80  !bg-cover text-white hover:text-green-200" key={item.categoryId} href={`/products/${item.categoryId}`}>
            <div>
              <span className="absolute right-3 bottom-3 text-3xl font-bold ">{item.categoryTitle}</span>
            </div>
          </Link>
        ))}
      </div>
    </div><div>
        <section className={styles.sectionapp}>
          <div className={styles.section}>
            <h1 className={styles.sectiontitle}>食品リスト</h1>
            <div className={styles.productscenter}>
              {data1.reverse().map(product => (
                <Product
                  key={product.postId}
                  name={product.title}
                  image={product.image ? `http://localhost:8080/api/profiles/${product.image}` : '/logo1.png'}
                  id={product.postId} />
              ))}
            </div>
          </div>
        </section>
      </div></>
  )
}         

export default Portfolio