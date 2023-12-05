import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { useSelector } from 'react-redux';
import handleTitle from '../../../handle/handleTitle';
import { Link } from 'react-router-dom';
import MobileMenu from '../../../components/MobileMenu';

function MyQuestion() {
  handleTitle('My Question | GreenWaste');

  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/question/${currentUser._id}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuestionDelete = async (questionId) => {
    try {
      const res = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setData((prev) => prev.filter((item) => item._id !== questionId));
    } catch (error) {
      console.log(error.message);
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

      <div className="max-w-xs sm:max-w-xl lg:max-w-2xl lg:flex-initial lg:w-[650px] mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between lg:ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>My Questions</h1>
            </div>
            <div>
              <Link to={'/forum/ask-question'}>
                <button className="bg-green-500 text-white p-2 text-sm rounded-md hover:bg-green-900">
                  Ask Question
                </button>
              </Link>
            </div>
          </div>

          {/* LIST ALL QUESTION */}
          {data.length > 0 ? (
            data.map((item, i) => (
              <div
                className="flex flex-col lg:ml-10 mt-10 border-b-2 pb-5"
                key={item._id}
              >
                <div className="flex flex-row justify-between">
                  <div className="">
                    <Link to={`/details-question/${item._id}`}>
                      <h1 className="text-xl font-bold text-green-900 hover:text-green-500">
                        {item.title}
                      </h1>
                    </Link>
                  </div>
                  {/* BUTTON DELETE AND EDIT DEKSTOP VERSION */}
                  <div className="hidden sm:flex flex-row gap-2">
                    <Link to={`/edit-question/${item._id}`}>
                      <button className="bg-green-600 text-white p-1 text-sm rounded-md hover:bg-green-900 w-[50px] h-[25px] text-center">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleQuestionDelete(item._id)}
                      className="bg-red-600 text-white p-1 text-sm rounded-md hover:bg-red-900 w-[50px] h-[25px]  text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-2 mb-2 text-sm text-gray-500">
                  <p>{item.description}</p>
                </div>
                <div className="flex flex-row justify-between mt-2">
                  <div className="">
                    <span className=" text-green-700 rounded-md p-1 text-sm mr-2">
                      <b>Category : </b>
                      {item.category.join(`, `)}
                    </span>
                  </div>
                  <div className="flex flex-row flex-wrap justify-end">
                    <div className="w-[25px] h-[25px] mr-1">
                      <img src="/img/avatar.png" alt="avatar icon" />
                    </div>
                    <div className="text-green-500">{currentUser.username}</div>
                    <div className="text-gray-400 ml-2">
                      {item.date.substring(0, 10)}
                    </div>
                  </div>
                </div>

                {/* BUTTON DELETE AND EDIT MOBILE VERSION */}
                <div className="flex flex-row justify-between mt-2 sm:hidden">
                  <Link to={`/edit-question/${item._id}`}>
                    <button className="bg-green-600 text-white p-1 text-sm rounded-md hover:bg-green-900 w-[50px] h-[25px] text-center">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleQuestionDelete(item._id)}
                    className="bg-red-600 text-white p-1 text-sm rounded-md hover:bg-red-900 w-[50px] h-[25px]  text-center"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="lg:ml-10 mt-10">
              <h1>Belum ada Pertanyaan yang ditanyakan !!!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyQuestion;
