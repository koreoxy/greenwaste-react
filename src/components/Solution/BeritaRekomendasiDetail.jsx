import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import axios from 'axios';
import BeritaDetailCss from './BeritaDetailCss.module.css';

export default function BeritaRekomendasiDetail() {
  const [beritaRekomendasi, setBeritaRekomendasi] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `https://api-greenwaste.vercel.app/api/berita-rekomendasi/${id}`;

    axios.get(apiUrl)
      .then(response => {
        setBeritaRekomendasi(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // atau Anda bisa menggunakan spinner atau elemen loading yang lebih baik
  }

  if (!beritaRekomendasi) {
    return <p>Data not found</p>;
  }

  const { content } = beritaRekomendasi;

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
