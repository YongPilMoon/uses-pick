import React from 'react';
import styles from './Product.module.scss';
import images from '../images';

function Product({name, count, description, url, position, right = false}) {
  return (
    <div className={styles.product} style={ right ? {
      alignItems: 'flex-end',
      ...position,
    } : {
      alignItems: 'start',
      ...position,
    }}>
      <h1>{name}</h1>
      <div>
        <img className={styles.heart} src={images.heart} alt="heart"/>
        <span className={styles.count}>{count.toLocaleString()}</span>
      </div>
      <div className={styles.description}>{description}</div>
      <div>{url}</div>
    </div>
  );
}

export default Product;