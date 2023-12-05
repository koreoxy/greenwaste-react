// BeritaTerkiniDetail.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';
import BeritaDetailCss from './BeritaDetailCss.module.css';

export default function BeritaTerkiniDetail() {
  const [beritaTerkini, setBeritaTerkini] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `https://api-greenwaste.vercel.app/api/berita-terkini/${id}`;
    console.log('API URL:', apiUrl);

    axios.get(apiUrl)
      .then(response => {
        setBeritaTerkini(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!beritaTerkini) {
    return <p>Loading...</p>;
  }

  const { content } = beritaTerkini;

  return (
    <div className={BeritaDetailCss.container}>
      <div className={BeritaDetailCss.arrowBack}>
        <Link to="/berita">
          <img src="https://i.ibb.co/DKVPT3z/arrow-507257.png" alt="arrow-507257" />
        </Link>
      </div>

      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          div: ({ className, ...props }) => (
            <div className={BeritaDetailCss[className]} {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
