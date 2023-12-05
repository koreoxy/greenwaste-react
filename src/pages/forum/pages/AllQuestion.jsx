import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import { getQuestions } from '../../../api/api';
import { Link } from 'react-router-dom';
import handleTitle from '../../../handle/handleTitle';
import MobileMenu from '../../../components/MobileMenu';

function AllQuestion() {
  handleTitle('All Question | GreenWaste');

  const [question, setQuestion] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getQuestions((dataQuestion) => {
      setQuestion(dataQuestion);
    });
  }, []);

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
              <h1>All Questions</h1>
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
          {question.length > 0 ? (
            question.map((item, i) => (
              <div
                className="flex flex-col lg:ml-10 mt-10 border-b-2 pb-5"
                key={item._id}
              >
                <div className="flex flex-row justify-between">
                  <div className="w-auto">
                    <Link to={`/details-question/${item._id}`}>
                      <h1 className="text-xl font-bold text-green-900 hover:text-green-500">
                        {item.title}
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="mt-2 mb-2 text-sm text-gray-500">
                  <p>{item.description.substring(0, 100)}...</p>
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
                    <div className="text-green-500">{item.author}</div>
                    <div className="text-gray-400 ml-2">
                      {item.date.substring(0, 10)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="lg:ml-10">
              <h1>Loading.....</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllQuestion;
