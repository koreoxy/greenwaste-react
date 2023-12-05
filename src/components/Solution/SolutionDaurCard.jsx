import React from 'react';
import { Link } from 'react-router-dom'
import SolutionCardCss from './SolutionCardCss.module.css';

const SolutionDaurCard = ({ daurUlang, onClick }) => (
  <div className={SolutionCardCss.card} onClick={() => onClick(daurUlang.id)}>
    <img src={daurUlang.image} alt={daurUlang.name} />
    <h3>{daurUlang.name}</h3>
    <p>
      {daurUlang.articleInfo}{' '}
      <Link to={`/solution/daurulang/detail/${daurUlang.id}`} style={{ color: '#0073C6' }}>
        Read More
      </Link>
    </p>
  </div>
);

export default SolutionDaurCard;
