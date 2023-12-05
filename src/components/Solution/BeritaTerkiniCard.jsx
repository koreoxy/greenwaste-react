import React from 'react';
import { Link } from 'react-router-dom';
import BeritaTerkiniCardCss from './BeritaTerkiniCardCss.module.css'

const BeritaTerkiniCard = ({ beritaTerkini, onClick }) => (
  <div className={BeritaTerkiniCardCss.card} onClick={() => onClick(beritaTerkini.id)}>
    <img src={beritaTerkini.image} alt={beritaTerkini.name} />
    <h3>{beritaTerkini.name}</h3>
    <p>
        <Link to={`/berita/beritaterkinidetail/${beritaTerkini.id}`} style={{ color: '#0073C6' }}>
            Read More
        </Link>
    </p>
</div>

);


export default BeritaTerkiniCard;
