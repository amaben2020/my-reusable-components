import React from 'react';
import { useContext } from 'react';

import styles from '../../styles/card.module.scss';

interface Product {
  product: any;
  key: string;
}

const ProductCard: React.JSXElementConstructor<Product> = ({
  product,
}: any) => {
  const { _id, image, name, price, category, bestseller } = product;

  return (
    <div>
      <div className={styles.card} key={_id}>
        <div>
          {bestseller && (
            <p className={styles.card__bestseller}> Best Seller</p>
          )}
        </div>
        <img className={styles.card__img} src={image && image.url} />

        <button className={styles.card__btn}>ADD TO CART</button>
      </div>
      <div className={styles.card__priceArea}>
        <p className={styles.card__priceArea__smallText}>{category}</p>
        <p className={styles.card__priceArea__largeText}>{name}</p>
        <p className={styles.card__priceArea__smallText}> $ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
