import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SolutionProdukCss from './SolutionProdukCss.module.css';
import SolutionProdukCard from './SolutionProdukCard';

function SolutionProduk() {
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    axios.get('https://api-greenwaste.vercel.app/api/solutionsProduk')
      .then(response => setProdukList(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const yourClickHandlerFunction = (id) => {
    console.log(`Card clicked with ID: ${id}`);
  };
  return (
    <>
      <div className={SolutionProdukCss.heroSection} style={{ background: 'url("/img/Solution/plastik-ramah-lingkungan.jpg") center no-repeat', backgroundSize: 'cover' }}>
        <div className={SolutionProdukCss.container}>
          <div className={SolutionProdukCss.heroSectionDeskripsi}>
            <p className={SolutionProdukCss.description}>
                Solusi | Penggunaan Produk Ramah Lingkungan
            </p>
          </div>
          <div className={SolutionProdukCss.heroSectionJudul}>
            <h1>Penggunaan Produk Ramah Lingkungan</h1>
          </div>
          <div className={SolutionProdukCss.heroSectionDeskripsi}>
            <p className={SolutionProdukCss.description}>
              Tindakan penggunaan produk ramah lingkungan melibatkan pemilihan, penggunaan, dan dukungan terhadap produk-produk yang bertujuan mengurangi dampak negatif terhadap lingkungan, menjalankan praktik-produksi yang berkelanjutan, dan mengurangi jejak karbon, serta berkontribusi pada pemeliharaan lingkungan yang lebih baik.
            </p>
          </div>
        </div>
      </div>

      <div className={SolutionProdukCss.section}>
        <div className={SolutionProdukCss.sectionJudul}>
          <h1>
              Tahukah kamu betapa pentingnya menggunakan produk yang ramah lingkungan? Mari kita jelajahi bagaimana hal ini bisa merubah dunia kita!
          </h1>
        </div>
        <div className={SolutionProdukCss.sectionContainer}>
          <div className={SolutionProdukCss.sectionImage}>
              <img src="/img/Solution/green_ecology-removebg-preview.png" alt=""/>
          </div>
          <div className={SolutionProdukCss.sectionDescription}>
            <ul>
              <li>
                  <img src="img/Solution/checkmark (1).png" alt="Checkmark"/> <p>Penggunaan produk ramah lingkungan membantu melindungi alam dengan mengurangi polusi dan kerusakan habitat.</p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark"/> <p>Produk yang efisien energi dan berkarbon rendah membantu mengurangi emisi gas rumah kaca yang memperburuk perubahan iklim.
                </p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark"/> <p>Menggunakan produk tahan lama mengurangi eksploitasi sumber daya alam terbatas.
                </p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark"/> <p>Produk yang tahan lama mengurangi jumlah limbah yang masuk ke tempat pembuangan sampah.
                  </p>
              </li>
              <li>
                  <img src="/img/Solution/checkmark (1).png" alt="Checkmark"/> <p>Produk ramah lingkungan memiliki bahan yang lebih aman bagi kesehatan manusia.
                  </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={SolutionProdukCss.section2}>
        <div className={SolutionProdukCss.judulSection2}>
          <h2>
            Pilihan Solusi untuk Anda
          </h2>
        </div>
        <div className={SolutionProdukCss.cardContainer}>
          {produkList.map((produk) => (
            <SolutionProdukCard key={produk._id} produk={{ id: produk._id.toString(),...produk }} onClick={yourClickHandlerFunction} />
          ))}
        </div>
      </div>
    </>
  )
}
export default SolutionProduk;