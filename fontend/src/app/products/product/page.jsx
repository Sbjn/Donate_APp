import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Product =({image,name,id})=>{
return (
    <article className={styles.product}>
    <div className={styles.image}>
    <img src={image} alt={name}/>
    </div>
    <div className={styles.productfooter}>
    <h3>{name}</h3>
    <Link  className={styles.btn} href={`/blog/${id}`}>Recevie</Link>
    </div>
    
    </article>

)
};

export default Product;