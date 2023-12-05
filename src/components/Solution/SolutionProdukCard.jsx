import React from 'react';
import { Link } from 'react-router-dom'
import SolutionCardCss from './SolutionCardCss.module.css';

const SolutionProdukCard = ({ produk, onClick }) => (
  <div className={SolutionCardCss.card} onClick={() => onClick(produk.id)}>
    <img src={produk.image} alt={produk.name} />
    <h3>{produk.name}</h3>
    <p>
      {produk.articleInfo}{' '}
      <Link to={`/solution/produk/detail/${produk.id}`} style={{ color: '#0073C6' }}>
        Read More
      </Link>
    </p>
  </div>
);

export default SolutionProdukCard;
