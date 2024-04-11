/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { useRouter,useParams, } from 'next/navigation';
import styles from "./page.module.css";



const updatePost = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
 
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  console.log(id)
  // location.reload();


  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values,setValues] = useState({
    id:id,
    title: '',
    content:'',
  });

  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8080/api/posts/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        setErr(true);
      }
      const data = await res.json()
      setData(data);
      setIsLoading(false);
      setValues({...values,title: data.title,content:data.content})
    };
    getData()
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(data);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const content = e.target[1].value;
      const imageInput = e.target[2];
      const image = imageInput.files[0];
     
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);

     

      try {
        
        await fetch(`http://localhost:8080/api/posts/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            title,
            content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await fetch(`http://localhost:8080/api/posts/image/upload/${id}`, {
          method: "PUT",
          body: formData,
        });
        e.target.reset();
        router?.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    };

return (
  
  <form className={styles.new} onSubmit={handleSubmit} encType="multipart/form-data">
    <label className="text-gray-900 font-bold text-2xl  donate-label">記事のタイトル</label>
    <input type="text" placeholder="タイトル" name="title" value={values.title} onChange={handleChange} className={styles.input} required />
    <label className="text-gray-900 font-bold text-2xl  donate-label">コンテンツ</label>
    <textarea
      placeholder="コンテンツ"
      name="content"
      value={values.content}
      onChange={handleChange}
      className={styles.textArea}
      cols="30"
      rows="10"
      required
    ></textarea>
    <label className="text-gray-900 font-bold text-2xl  donate-label">イメージ</label>
    <input className="image-input" type="file" />
    <button className={styles.button}>保存 </button>
  </form>

  );
};

export default updatePost