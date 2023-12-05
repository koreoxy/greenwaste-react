import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SolutionPengomposanCss from './SolutionPengomposanCss.module.css';
import SolutionPengomposanCard from './SolutionPengomposanCard';

function SolutionPengomposan() {
  const [komposList, setKomposList] = useState([]);

  useEffect(() => {
    axios.get('https://api-greenwaste.vercel.app/api/solutionskompos')
      .then(response => setKomposList(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const yourClickHandlerFunction = (id) => {
    console.log(`Card clicked with ID: ${id}`);
  };

  return (
    <>
      <div className={SolutionPengomposanCss.heroSection} style={{ background: `url('/img/Solution/composting.jpg') center no-repeat`, backgroundSize: 'cover' }}>
        <div className={SolutionPengomposanCss.container}>
          <div className={SolutionPengomposanCss.heroSectionDeskripsi}>
            <p className={SolutionPengomposanCss.description}>
              Solusi | Pengomposan
            </p>
          </div>
          <div className={SolutionPengomposanCss.heroSectionJudul}>
            <h1>Pengomposan</h1>
          </div>
          <div className={SolutionPengomposanCss.heroSectionDeskripsi}>
            <p className={SolutionPengomposanCss.description}>
              Pengomposan adalah proses alami untuk mengurai bahan organik menjadi pupuk yang berguna untuk pertanian dan kebun. Ini adalah solusi yang ramah lingkungan dan ekonomis untuk mengurangi volume limbah organik dan menciptakan pupuk berkualitas tinggi.
            </p>
          </div>
        </div>
      </div>

      <div className={SolutionPengomposanCss.section}>
        <div className={SolutionPengomposanCss.sectionJudul}>
          <h1>
            Ternyata, ada fakta-fakta seru yang mungkin belum kamu tahu, nih! Yuk, kita kupas sebentar:
          </h1>
        </div>
        <div className={SolutionPengomposanCss.sectionContainer}>
        <div className={SolutionPengomposanCss.sectionDescription}>
            <ul>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" />
                <p>
                  Setiap tahunnya, jutaan ton limbah organik diarahkan ke tempat pembuangan sampah, dan ini bukan sekadar permasalahan ringan. Dampaknya bisa mencemari lingkungan dan menghasilkan emisi metana yang merugikan.
                </p>
              </li>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" />
                <p>
                  Namun, pengomposan hadir sebagai solusi yang patut dipertimbangkan. Proses ini mampu mengurangi volume limbah organik sebanyak 30-50%, dengan demikian mengurangi beban pada tempat pembuangan sampah.
                </p>
              </li>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" />
                <p>
                  Selain itu, pupuk kompos yang dihasilkan dari pengomposan mengandung nutrisi yang sangat penting dan mampu meningkatkan kesuburan tanah. Sebuah langkah yang baik untuk menjaga keberlanjutan pertanian dan kebun Anda.
                </p>
              </li>
            </ul>
          </div>
          <div className={SolutionPengomposanCss.sectionImage}>
            <img src="/img/Solution/facts_image-removebg-preview (1).png" alt="" />
          </div>
        </div>
      </div>

      <div className={`${SolutionPengomposanCss.section} ${SolutionPengomposanCss.backgroundF3F3F3}`}>
        <div className={SolutionPengomposanCss.sectionJudul}>
          <h1>
            Yuk, kita intip apa saja keuntungan keren yang bisa kamu dapatkan dari pengomposan!
          </h1>
        </div>
        <div className={SolutionPengomposanCss.sectionContainer}>
          <div className={SolutionPengomposanCss.sectionimage}>
            <img src="/img/Solution/compost2-removebg-preview (1).png" alt="" />
          </div>
          <div className={SolutionPengomposanCss.sectionDescription}>
            <ul>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p>Pengomposan mengurangi limbah organik di tempat pembuangan sampah serta membantu mengurangi beban sampah dan dampak lingkungan.</p>
              </li>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p>Pengomposan menghasilkan pupuk organik berkualitas tinggi yang kaya nutrisi, mendukung pertumbuhan tanaman, dan menjaga kesehatan tanah.</p>
              </li>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p>Pengomposan juga berkontribusi pada pengurangan emisi gas metana yang kuat, sehingga berperan dalam mengurangi dampak perubahan iklim global.</p>
              </li>
              <li>
                <img src="/img/Solution/checkmark (1).png" alt="Checkmark" /> <p>Selain mengurangi limbah dan emisi gas, pengomposan juga meningkatkan kesuburan tanah, memberikan nutrisi yang penting, dan mendukung pertumbuhan tanaman yang lebih kuat.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className={SolutionPengomposanCss.section2}>
        <div className={SolutionPengomposanCss.judulSection2}>
          <h2>
            Pilihan Solusi untuk Anda
          </h2>
        </div>
        <div className={SolutionPengomposanCss.cardContainer}>
          {komposList.map((kompos) => (
            <SolutionPengomposanCard key={kompos.id} kompos={{ id: kompos._id.toString(), key: kompos._id.toString(), ...kompos }} onClick={yourClickHandlerFunction} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SolutionPengomposan;

