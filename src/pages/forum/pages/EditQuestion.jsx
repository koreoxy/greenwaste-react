import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import handleTitle from '../../../handle/handleTitle';
import MobileMenu from '../../../components/MobileMenu';

function EditQuestion() {
  handleTitle('Edit Question | GreenWaste');

  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: [],
  });
  const navigate = useNavigate();
  const params = useParams();

  const categoriesOptions = [
    { label: 'Limbah Anorganik', value: 'Limbah Anorganik' },
    { label: 'Limbah Organik', value: 'Limbah Organik' },
    { label: 'Limbah B3', value: 'Limbah B3' },
  ];

  useEffect(() => {
    const fetchQuestion = async () => {
      const questionId = params.questionId;
      const res = await fetch(`/api/questions/${questionId}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
      }
      setFormData(data);
    };

    fetchQuestion();
  }, []);

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
      const res = await fetch(`/api/questions/${params.questionId}`, {
        method: 'PATCH',
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
      navigate(`/details-question/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="hidden lg:inline">
        <Sidebar />
      </div>
      <div className="fixed bottom-0 left-0 right-0 lg:hidden">
        <MobileMenu />
      </div>

      <div className="w-full max-w-xs sm:max-w-xl lg:max-w-2xl lg:flex-initial lg:w-[650px] mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between lg:ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>Edit Question</h1>
            </div>
          </div>

          {/* SECTION ASK QUESTION */}
          <form onSubmit={handleSubmit} className="lg:ml-10">
            <div className="mt-5">
              <h1 className="text-black text-base font-semibold pb-1">Judul</h1>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full max-w-xl"
                required
              />
            </div>

            <div className="mt-5">
              <h1 className="text-black text-base font-semibold pb-1">
                Deskripsi Pertanyaan
              </h1>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full max-w-xl"
                required
              />
            </div>

            <div className="mt-5">
              <h1 className="text-black text-base font-semibold pb-1">
                Kategori Pertanyaan
              </h1>
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
              className="bg-green-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-5 w-full sm:w-auto shadow-lg"
            >
              {loading ? 'Loading...' : 'Edit Question'}
            </button>
            {error && <p className="text-red-700 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditQuestion;
