import React from 'react';
import { Link } from 'react-router-dom'
import SolutionCardCss from './SolutionCardCss.module.css'

const SolutionPengomposanCard = ({ kompos, onClick }) => (
  <div className={SolutionCardCss.card} onClick={() => onClick(kompos.id)}>
    <img src={kompos.image} alt={kompos.name} />
    <h3>{kompos.name}</h3>
    <p>
      {kompos.articleInfo}{' '}
      <Link to={`/solution/pengomposan/detail/${kompos.id}`} style={{ color: '#0073C6' }}>
        Read More
      </Link>
    </p>
  </div>
);

export default SolutionPengomposanCard;
