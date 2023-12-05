import React from 'react';
import { Link } from 'react-router-dom'; 
import BeritaDetailCss from './BeritaDetailCss.module.css'

export default function BeritaDetail() {
  return (
    <>
            <div className={BeritaDetailCss.container}>
            <div className={BeritaDetailCss.arrowback}>
            <Link to="/berita">
                <img src="https://i.ibb.co/DKVPT3z/arrow-507257.png" alt="arrow-507257" />
                </Link>
            </div>
            <div className={BeritaDetailCss.pageTitle}>
                <h1>DLHK Kabupaten Tangerang Dorong Peran Masyarakat Mengatasi Sampah</h1>
            </div>
            <div className={BeritaDetailCss.dateContent}>
                <p>Selasa, 04 Januari 2022</p>
            </div>
            <div className={BeritaDetailCss.imageContent}>
                <img src="/img/Solution/news3.jpg" alt="" />
            </div>
            <div className={BeritaDetailCss.descriptionContent}>
                <p>
                <b>Tangerang, GreenWaste</b> - Dalam rangka tahun 2022, Dinas Lingkungan Hidup dan Kebersihan (DLHK) Kabupaten
                Tangerang berkomitmen untuk meningkatkan partisipasi masyarakat dalam upaya mengurangi volume sampah yang terus
                meningkat. Mereka menyadari bahwa peran aktif masyarakat sangat penting untuk mengendalikan masalah sampah yang
                semakin mendesak.
                <br /><br />
                Kepala Bidang Pengelolaan Sampah dan Limbah B3 DLHK Kabupaten Tangerang, Samsul Romli, menegaskan pentingnya
                kesadaran masyarakat dalam mengurangi sampah. Data menunjukkan bahwa volume sampah di Kabupaten Tangerang pada
                tahun 2021 mencapai angka yang cukup besar, yaitu sekitar 820.000 ton dengan rata-rata harian sekitar 2.250
                hingga 2.500 ton. Kondisi ini tidak dapat dibiarkan berlanjut setiap tahunnya.
                <br /><br />
                Samsul Romli menjelaskan bahwa fokus utama mereka adalah mengedukasi masyarakat untuk tidak lagi membuang sampah
                secara sembarangan. Upaya-upaya konkret telah dilakukan oleh Bidang Kebersihan DLHK Kabupaten Tangerang untuk
                mengurangi volume sampah, termasuk pendirian Tempat Pengelolaan Sampah Reduse Reuse Recycle (TPS3R) di 28 lokasi
                yang tersebar di berbagai kecamatan, serta pengelolaan bank sampah induk dan unit.
                <br /><br />
                Selain itu, peran masyarakat dalam mengurangi volume sampah juga ditingkatkan melalui penggunaan larva maggot
                dan Tempat Pengolahan Sampah Terpadu (TPST). Ini diharapkan dapat mengurangi jumlah sampah yang dihasilkan.
                <br /><br />
                DLHK juga menggalakkan program sedekah sampah dengan Mini Collection Point, yaitu kotak pengumpulan sampah
                botol plastik yang ditempatkan di pesantren, masjid, atau mushalla. Ini adalah langkah konkret untuk mendorong
                peran aktif masyarakat dalam mengurangi sampah.
                <br /><br />
                Samsul Romli menekankan pentingnya pemilahan sampah di rumah tangga sebagai langkah awal yang dapat diambil
                setiap individu. Kesadaran ini terus disosialisasikan kepada masyarakat.
                Dalam rangka tahun 2022, DLHK Kabupaten Tangerang bertekad untuk menghadapi masalah sampah dengan bersama-sama
                melibatkan masyarakat, demi menciptakan lingkungan yang lebih bersih dan sehat.
                </p>
            </div>
        </div>
    </>
    
  );
}
