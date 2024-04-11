/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useSession, } from 'next-auth/react'
import React, { useEffect,useState } from "react";
import { useRouter } from 'next/navigation'
import styles from "./page.module.css";
import { data } from 'autoprefixer';

const donateform = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8080/api/categories/`, {
        cache: "no-store",
      });
      if (!res.ok) {
        setErr(true);
      }
      const data = await res.json()
    
      setData(data);
      setIsLoading(false);
    };
    getData()
  }, []);

  console.log(data)
  
  // get Id when select title 

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategoryId(data[0].categoryId);
    }
  }, [data]);

  const handleCategoryChange = (e) => {
    const selectedOptionIndex = e.target.selectedIndex;
    const categoryId = data[selectedOptionIndex].categoryId;
    setSelectedCategoryId(categoryId);
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const content = e.target[1].value;

      try {
        await fetch(`http://localhost:8080/api/category/${selectedCategoryId}/user/${session.data.user.id}/posts`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
          }),
        });
        
        e.target.reset()
        router?.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    };



  
return (
  
  <form className={styles.new} onSubmit={handleSubmit}>
    <label className="text-gray-900 font-bold text-2xl donate-label">記事のタイトル</label>
    <input type="text" placeholder="タイトル" className={styles.input} required />
    <label className="text-gray-900 font-bold text-2xl donate-label">コンテンツ</label>
    <textarea
      placeholder="コンテンツ"
      className={styles.textArea}
      cols="30"
      rows="10"
      required
    ></textarea>
    <label className="text-gray-900 font-bold text-2xl donate-label">種類</label>
    <select className={styles.input} onChange={handleCategoryChange}>
    {data.map((item) => (
      <option key={item.categoryId}>{item.categoryTitle}</option>
      ))}
    </select>
    <button className={styles.button}>投稿</button>
  </form>

  );
};

export default donateform