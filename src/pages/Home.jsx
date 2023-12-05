import { Link, NavLink, useNavigate } from 'react-router-dom';
import handleTitle from '../handle/handleTitle';
import { useState } from 'react';
import axios from 'axios';

function Home() {
  handleTitle('Home | GreenWaste');

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    // Submit contact to the server
    axios
      .post('/api/contacts/submit-contact', newContact)
      .then((response) => {
        console.log('Message submitted successfully:', response.data);
        setFormData({
          ...formData,
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
        alert('Pesan Berhasil di dikirim!');
        // location.reload();
      })
      .catch((error) => console.error('Gagal mengirim pesan :', error));
  };

  return (
    <>
      <div
        className="bg-home h-screen bg-cover object-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/home/hero-img.jpg')",
        }}
      >
        <div className="text-center md:px-24">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-5 max-w-xl mx-auto">
            Ayo Jadilah Pahlawan Lingkungan Bersama Kami!
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg font-medium mx-5 lg:mx-20 mb-5">
            Dengan setiap tindakan kecil, kita bisa menjadi pahlawan bagi
            lingkungan. Bergabunglah dengan kami di GreenWaste dan mulailah
            perjalanan Anda menuju keberlanjutan dan pelestarian lingkungan.
          </p>
          <Link to="/register">
            <button className="px-8 py-4 text-white text-xl bg-green-button rounded-md hover:bg-white hover:text-green-button">
              Gabung Sekarang
            </button>
          </Link>
        </div>
      </div>
      {/* SECTION TENTANG KAMI */}
      <section className="py-10">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-dark">
            Tentang Kami
          </h1>
          <p className="mx-10 lg:mx-0 text-base lg:text-lg mt-2">
            Misi kami untuk lingkungan yang lebih baik
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10 mt-10 lg:mt-16 justify-center mx-10">
          <p className="font-semibold text-green-dark text-center my-auto">
            “Kami adalah pionir dalam menghadapi tantangan meningkatnya volume
            limbah rumah tangga dan pabrik. Di GreenWaste, kami mendedikasikan
            diri untuk menyediakan solusi yang inovatif dan edukatif bagi
            individu, rumah tangga, dan bisnis untuk menghadapi permasalahan
            lingkungan yang mendesak.”
          </p>
          <img
            className="rounded-2xl shadow-xl shadow-black/50 mt-10 lg:mt-0 lg:w-auto lg:h-1/4"
            src="/img/home/tentang-kami.jpg"
            alt="about-images"
          />
        </div>
      </section>

      {/* SECTION KENAPA MEMILIH GREENWASTE */}
      <section className="w-full py-10 bg-gray-light mt-10">
        <h1 className="text-center text-4xl font-bold text-green-dark">
          Kenapa Memilih GreenWaste?
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-row flex-wrap justify-center mt-14 gap-5 justify-items-center">
            <div className="card bg-white w-72 px-8 py-10 text-center border-default border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-recycle h-32 w-auto text-green-light"
                viewBox="0 0 16 16"
              >
                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
              </svg>
              <h3 className="font-bold text-base mt-4">
                Solusi Pengolahan Limbah
              </h3>
              <p className="mt-2 max-h-screen my-auto">
                Kami menyediakan solusi komprehensif untuk pengelolaan limbah
                yang efisien dan berkelanjutan.
              </p>
              <Link
                to="/solution"
                className="py-2 px-4 w-fit mx-auto mt-8 bg-green-light hover:bg-green-700 text-white rounded-lg"
              >
                Read More
              </Link>
            </div>
            <div className="card bg-white w-72 px-8 py-10 text-center border-default border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-info-circle h-32 w-auto text-green-light"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <h3 className="font-bold text-base mt-4">Informasi Terbaru</h3>
              <p className="mt-2 max-h-screen my-auto">
                Terus memperbarui diri dengan perkembangan terkini dalam
                pengelolaan limbah, teknologi hijau, dan isu-isu lingkungan
                terbaru
              </p>
              <Link
                to="/berita"
                className="py-2 px-4 w-fit mx-auto mt-8 bg-green-light hover:bg-green-700 text-white rounded-lg"
              >
                Read More
              </Link>
            </div>
            <div className="card bg-white w-72 px-8 py-10 text-center border-default border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-fast-forward-circle h-32 w-auto text-green-light"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                <path d="M4.271 5.055a.5.5 0 0 1 .52.038L8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445Z" />
              </svg>
              <h3 className="font-bold text-base mt-4">Video Tutorial</h3>
              <p className="mt-2 max-h-screen my-auto">
                Pelari langkah-langkah praktis dalam mengelola limbah Anda
                melalui koleksi video tutorial kami.
              </p>
              <Link
                to="/video_tutorial"
                className="py-2 px-4 w-fit mx-auto mt-8 bg-green-light hover:bg-green-700 text-white rounded-lg"
              >
                Read More
              </Link>
            </div>
            <div className="card bg-white w-72 px-8 py-10 text-center border-default border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chat-left-text h-32 w-auto text-green-light"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
              <h3 className="font-bold text-base mt-4">Forum</h3>
              <p className="mt-2 max-h-screen my-auto">
                Temukan tempat untuk berdiskusi, berbagi pengetahuan, dan
                terhubung dengan sesama anggota komunitas.
              </p>
              <Link
                to="/forum/all-question"
                className="py-2 px-4 w-fit mx-auto mt-8 bg-green-light hover:bg-green-700 text-white rounded-lg"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT US */}
      <section className="max-w-2xl mx-auto py-20">
        <h1 className="text-center text-4xl font-bold text-green-dark">
          Contact Us
        </h1>
        {/* FORM CONTACT US */}
        <form
          className="mt-8 flex flex-col gap-4 justify-center items-center p-5 md:p-0"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-x-6 w-full max-w-full">
            {/* FIRST NAME */}
            <div className="form-group flex flex-col md:w-1/2">
              <label className="font-bold text-lg">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                id="firstName"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Enter your first name"
                onChange={handleChange}
                required
              />
            </div>

            {/* LAST NAME */}
            <div className="form-group flex flex-col md:w-1/2 mt-2 md:mt-0">
              <label className="font-bold text-lg">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                id="lastName"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Enter your last name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-x-6 w-full max-w-full">
            <div className="form-group flex flex-col md:w-1/2">
              <label className="font-bold text-lg">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                id="email"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group flex flex-col md:w-1/2 mt-2 md:mt-0">
              <label className="font-bold text-lg">Phone Number:</label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                id="phoneNumber"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group w-full flex flex-col">
            <label className="font-bold text-lg">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Enter your message"
              className="px-3 py-2 border-gray-color border-2 rounded-md"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="p-3 bg-green-light hover:bg-green-700  text-white rounded-md">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Home;
