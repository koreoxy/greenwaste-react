import React, { useState } from 'react';
import NavbarDashboard from './components/NavbarDashboard';
import SidebarDashboard from './components/SidebarDashboard';
import handleTitle from '../../handle/handleTitle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddNewQuestion() {
  handleTitle('Add New Question GreenWaste');

  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: [],
  });
  const navigate = useNavigate();

  const categoriesOptions = [
    { label: 'Limbah Anorganik', value: 'Limbah Anorganik' },
    { label: 'Limbah Organik', value: 'Limbah Organik' },
    { label: 'Limbah B3', value: 'Limbah B3' },
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const isChecked = e.target.checked;
      const updatedCategory = isChecked
        ? [...formData.category, value]
        : formData.category.filter((category) => category !== value);

      setFormData({
        ...formData,
        category: updatedCategory,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
          author: currentUser.username,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      //   navigate(`/details-question/${data._id}`);
      navigate('/dashboard/questions');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <NavbarDashboard />
      <div className="flex flex-row h-screen">
        <SidebarDashboard />
        <div className="w-full max-h-screen">
          <div className="m-5 bg-slate-50 rounded-lg shadow-lg">
            <div className="p-5">
              <h1 className="font-bold text-xl">Add New Question</h1>

              {/* FORM */}
              <form onSubmit={handleSubmit}>
                <div className="mt-5">
                  <h1 className="text-black text-base font-semibold pb-1">
                    Judul
                  </h1>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Contoh title, Bagaimana cara mengelola limbah?"
                    value={formData.title}
                    onChange={handleChange}
                    className="border p-3 rounded-lg w-full max-w-xl text-xs sm:text-base"
                    required
                  />
                </div>

                <div className="mt-5">
                  <h1 className="text-black text-base font-semibold pb-1">
                    Pertanyaan apa yang mau di tanyakan?
                  </h1>
                  <h6 className="text-sm text-gray-400 pb-1">
                    Deskripsikan dan Jelaskan pertanyaan anda dengan lengkap
                    minimal 20 karakter.
                  </h6>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border p-3 rounded-lg w-full max-w-xl"
                    placeholder="Tulis Pertanyaan anda disini"
                    required
                  />
                </div>

                <div className="mt-5">
                  <h1 className="text-black text-base font-semibold pb-1">
                    Kategori Pertanyaan
                  </h1>
                  <h6 className="text-sm text-gray-400 pb-1">Pilih Kategori</h6>
                  {categoriesOptions.map((option) => (
                    <div key={option.value}>
                      <input
                        type="checkbox"
                        id={option.value}
                        name="category"
                        value={option.value}
                        checked={formData.category.includes(option.value)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.value}</label>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="btn btn-success text-white mt-5"
                >
                  {loading ? 'Loading...' : 'Add New Question'}
                </button>
                {error && <p className="text-red-700 text-sm">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewQuestion;
