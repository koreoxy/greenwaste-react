import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';
import SolutionDetailCss from './SolutionDetailCss.module.css';

export default function SolutionProdukDetail() {
  const [produk, setProduk] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `https://api-greenwaste.vercel.app/api/solutionsProduk/${id}`;
    console.log('API URL:', apiUrl);

    axios.get(apiUrl)
      .then(response => {
        setProduk(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!produk) {
    return <p>Loading...</p>;
  }

  const { article } = produk;

  return (
    <div className={SolutionDetailCss.container}>
      <div className={SolutionDetailCss.arrowBack}>
        <Link to="/solution/produk">
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
