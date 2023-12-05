import React, { useEffect, useState } from 'react';
import NavbarDashboard from './components/NavbarDashboard';
import SidebarDashboard from './components/SidebarDashboard';
import handleTitle from '../../handle/handleTitle';
import { useNavigate, useParams } from 'react-router-dom';

function EditQuestionDashboard() {
  handleTitle('Edit Question | GreenWaste');
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: [],
  });

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
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/admin/questions/${params.questionId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate('/dashboard/questions');
      }
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
        <div className="w-full ">
          <div className="m-5 bg-slate-50 rounded-lg shadow-lg">
            <div className="p-5">
              <h1 className="font-bold text-xl">Edit Question</h1>

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
                  className="btn btn-success text-white mt-5"
                >
                  {loading ? 'Loading...' : 'Edit Question'}
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

export default EditQuestionDashboard;
