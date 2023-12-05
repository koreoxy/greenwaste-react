import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeritaRekomendasiCard from './BeritaRekomendasiCard';
import BeritaTerkiniCard from './BeritaTerkiniCard';
import BeritaListCardCss from './BeritaListCss.module.css';
import axios from 'axios';

const BeritaList = () => {
  const [beritaRekomendasiList, setBeritaRekomendasiList] = useState([]);
  const [beritaTerkiniList, setBeritaTerkiniList] = useState([]);
  
  useEffect(() => {

    axios.get('https://api-greenwaste.vercel.app/api/berita-rekomendasi')
    .then(response => setBeritaRekomendasiList(response.data))
    .catch(error => console.error('Error fetching Berita Rekomendasi data:', error));

    axios.get('https://api-greenwaste.vercel.app/api/berita-terkini')
      .then(response => setBeritaTerkiniList(response.data))
      .catch(error => console.error('Error fetching Berita Terkini data:', error));
    
  }, []);

  const handleBeritaClick = (id) => {
    console.log(`Berita clicked with ID: ${id}`);
  };

  return (
    <>
      <div className={BeritaListCardCss.heroSection}>
        <div className={BeritaListCardCss.heroSectionContainer}>
          <div className={BeritaListCardCss.descriptionContainer}>
            <div className={BeritaListCardCss.heroSectionJudul}>
              <h1>DLHK Kabupaten Tangerang Dorong Peran Masyarakat Mengatasi Sampah</h1>
            </div>
            <div className={BeritaListCardCss.heroSectionDeskripsi}>
              <p className={BeritaListCardCss.description}>
                Tangerang, GreenWaste - DLHK Kabupaten Tangerang tetap berkomitmen untuk meningkatkan partisipasi masyarakat dalam usaha mengurangi sampah sepanjang tahun 2022. Hal ini didasari oleh kesadaran bahwa tanpa keterlibatan aktif masyarakat, volume sampah akan terus mengalami peningkatan yang signifikan.
              </p>
            </div>
          </div>
          <div className={BeritaListCardCss.buttonContainer}>
            <Link to="./beritaDetail"> 
              <button>Read More</button>
            </Link>
          </div>
          <img src="./img/Solution/news3.jpg" alt="Hero Image" />
        </div>
      </div>

      <div className={BeritaListCardCss.section}>
        <div className={BeritaListCardCss.sectionTitle}>
          <img src="/img/Solution/bookmark.png" alt="" />
          <h2>
            Rekomendasi Untuk Anda
          </h2>
        </div>
        {beritaRekomendasiList.map((beritaRekomendasi) => (
          <BeritaRekomendasiCard
            key={beritaRekomendasi._id.toString()} 
            beritaRekomendasi={{ id: beritaRekomendasi._id.toString(), ...beritaRekomendasi}}
            onClick={() => handleBeritaClick(beritaRekomendasi._id)}
          />
        ))}

      </div>

      <div className={BeritaListCardCss.section2}>
        <div className={BeritaListCardCss.judulSection2}>
          <img src="/img/Solution/lightning.png" alt=""/>
          <h2>
            Berita Terkini
          </h2>
        </div>
        <div className={BeritaListCardCss.cardContainer}>
        {beritaTerkiniList.map((beritaTerkini) => (
          <BeritaTerkiniCard
            key={beritaTerkini._id.toString()}
            beritaTerkini={{ id: beritaTerkini._id.toString(), ... beritaTerkini}}
            onClick={() => handleBeritaClick(beritaTerkini._id)}
          />
        ))}
        </div>
    </div>
    </>
  )
};

export default BeritaList;


