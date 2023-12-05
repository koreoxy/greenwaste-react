import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SolutionCss from './Solution.module.css';

export default function Solution() {
  useEffect(() => {
    const arrowContainers = document.querySelectorAll(`.${SolutionCss.arrowcontainer}`);
    
    arrowContainers.forEach((arrowContainer) => {
      const question = arrowContainer.parentElement;
      const answer = question.querySelector(`.${SolutionCss.answer}`);

      arrowContainer.addEventListener('click', () => {
        if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block';
          arrowContainer.querySelector(`.${SolutionCss.arrow}`).style.transform = 'rotate(180deg)';
        } else {
          answer.style.display = 'none';
          arrowContainer.querySelector(`.${SolutionCss.arrow}`).style.transform = 'rotate(0deg)';
        }
      });
    });
  }, []);

  return (
        <>
            <div className={SolutionCss.pagetitle}>
                <h1>Solusi</h1>
                <p>Solusi Terbaik untuk Lingkungan dan Masa Depan</p>
            </div>

            <div className={SolutionCss.herosection}>
                <div className={SolutionCss.heroimage}>
                <img src="/img/Solution/business-idea.png" alt="" />
                </div>
                <div className={SolutionCss.herodescription}>
                <h1>Mengapa Pengolahan Limbah Itu Penting?</h1>
                <p>
                    Pengolahan limbah penting karena melindungi lingkungan, kesehatan manusia, dan berkontribusi pada keberlanjutan. Limbah yang tidak dikelola dengan baik dapat mencemari alam, mengancam kesehatan, dan menyumbang emisi gas rumah kaca. Dengan pengelolaan limbah yang baik, kita menjaga lingkungan yang lebih bersih, sehat, dan ramah lingkungan.
                </p>
                </div>
            </div>

            <div className={SolutionCss.categorywrapper}>
                <div className={SolutionCss.contentjudulcontainer}>
                <h1>Solusi yang kami tawarkan</h1>
                </div>

                <div className={SolutionCss.cardcontainer}>
                <div className={SolutionCss.card}>
                    <img src="/img/Solution/pengomposan-removebg-preview.png" alt="" />
                    <h2>Pengomposan</h2>
                    <Link to="/solution/pengomposan">Read More</Link>
                </div>
                <div className={SolutionCss.card}>
                    <img src="/img/Solution/ramah lingkungan.jpg" alt="" />
                    <h2>Penggunaan Produk Ramah Lingkungan</h2>
                    <Link to="/solution/produk">Read More</Link>
                </div>
                <div className={SolutionCss.card}>
                    <img src="/img/Solution/daur_ulang-removebg-preview.png" alt="" />
                    <h2>Daur Ulang</h2>
                    <Link to="/solution/daurulang">Read More</Link>
                </div>
                </div>
            </div>

            <div className={SolutionCss.questionsection}>
                <div className={SolutionCss.titlequestion}>
                <h1>Sering Ditanyakan</h1>
                </div>
                <div className={SolutionCss.listquestion}>
                <ul>
                    <li>
                        <p>Apa yang bisa saya lakukan untuk mengurangi limbah rumah tangga saya?</p>
                        <div className={SolutionCss.arrowcontainer}>
                            <div className={SolutionCss.arrow}></div>
                        </div>
                        <div className={SolutionCss.answer}>Untuk mengurangi limbah rumah tangga, kurangi penggunaan produk sekali pakai, daur ulang, dan kurangi pemborosan makanan</div>
                    </li>
                    <li>
                        <p>
                            Bagaimana cara memulai pengomposan di rumah?
                        </p>
                        <div className={SolutionCss.arrowcontainer}>
                        <div className={SolutionCss.arrow}></div>
                        </div>
                        <div className={SolutionCss.answer}>Untuk memulai pengomposan di rumah, pilih lokasi yang teduh, kumpulkan bahan kompos, campur dengan benar, dan putar komposter secara teratur.</div>
                    </li>
                    <li>
                        <p>
                            Apa manfaat penggunaa produk ramah lingkungan?
                        </p>
                        <div className={SolutionCss.arrowcontainer}>
                        <div className={SolutionCss.arrow}></div>
                        </div>
                        <div className={SolutionCss.answer}>Manfaat penggunaan produk ramah lingkungan termasuk mengurangi dampak lingkungan, hemat sumber daya, dan mendukung inovasi berkelanjutan.</div>
                    </li>
                    <li>
                        <p>
                        Apakah ada peraturan yang harus saya ikuti terkait pengelolaan limbah?
                        </p>
                        <div className={SolutionCss.arrowcontainer}>
                        <div className={SolutionCss.arrow}></div>
                        </div>
                        <div className={SolutionCss.answer}>Peraturan pengelolaan limbah bervariasi, namun biasanya melibatkan pemisahan limbah berbahaya, pengumpulan limbah elektronik, dan kepatuhan dengan peraturan setempat.</div>
                    </li>
                    <li>
                        <p>
                        Apa yang bisa saya lakukan untuk mendukung penggunaan energi yang lebih efisien dalam pengelolaan limbah?
                        </p>
                        <div className={SolutionCss.arrowcontainer}>
                        <div className={SolutionCss.arrow}></div>
                        </div>
                        <div className={SolutionCss.answer}>Untuk mendukung penggunaan energi yang lebih efisien dalam pengelolaan limbah, gunakan peralatan Energy Star, pertimbangkan energi terbarukan, perbarui sistem pengelolaan limbah, dan edukasi tentang efisiensi energi.</div>
                    </li>
                </ul>
                </div>
            </div>
        </>
    

  )
}
