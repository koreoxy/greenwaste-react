import React from 'react';
import BeritaRekomendasiCss from './BeritaRekomendasiCardCss.module.css';
import { Link } from 'react-router-dom';

const BeritaRekomendasiCard = ({ beritaRekomendasi, onClick }) => (
  <div className={BeritaRekomendasiCss.cardBerita} onClick={() => onClick(beritaRekomendasi.id)}>
    <div className={BeritaRekomendasiCss.imgCardBerita}>
      <img src={beritaRekomendasi.image} alt={beritaRekomendasi.title} />
    </div>
    <div className={BeritaRekomendasiCss.descriptionCardBerita}>
      <p style={{ color: '#52C41A', fontWeight: 500 }}>{beritaRekomendasi.category}</p>
      <h2>{beritaRekomendasi.name}</h2>
      <p style={{ color: '#4D4C4C' }}>
        {beritaRekomendasi.contentInfo}{' '}
        <Link to={`/berita/beritarekomendasidetail/${beritaRekomendasi.id}`}>Read More</Link>
      </p>
    </div>
  </div>
);

export default BeritaRekomendasiCard;
