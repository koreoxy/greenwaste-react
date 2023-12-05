import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';
import SolutionDetailCss from './SolutionDetailCss.module.css';

export default function SolutionPengomposanDetail() {
  const [kompos, setKompos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `https://api-greenwaste.vercel.app/api/${id}`;
    console.log('API URL:', apiUrl);


    axios.get(apiUrl)
      .then(response => {
        setKompos(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!kompos) {
    return <p>Loading...</p>;
  }

  const { article } = kompos;

  return (
    <div className={SolutionDetailCss.container}>
      <div className={SolutionDetailCss.arrowBack}>
        <Link to="/solution/pengomposan">
          <img src="https://i.ibb.co/DKVPT3z/arrow-507257.png" alt="arrow-507257" />
        </Link>
      </div>

      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ ...props }) => (
            <h1 className={SolutionDetailCss.pageTitle} {...props} />
          ),
          div: ({ className, ...props }) => (
            <div className={SolutionDetailCss[className]} {...props} />
          ),
        }}
      >
        {article}
      </ReactMarkdown>
    </div>
  );
}
