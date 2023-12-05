import React, { useEffect, useState } from 'react';
import NavbarDashboard from './components/NavbarDashboard';
import SidebarDashboard from './components/SidebarDashboard';
import handleTitle from '../../handle/handleTitle';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

function QuestionDashboard() {
  handleTitle('List All Question| GreenWaste');

  const [question, setQuestions] = useState([]);

  useEffect(() => {
    const apiUrl = '/api/admin/questions';
    const token = Cookies.get('access_token');

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteQuestion = async (questionId) => {
    const token = Cookies.get('access_token');
    try {
      await fetch(`/api/admin/questions/${questionId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setQuestions((prevQuestions) =>
        prevQuestions.filter((q) => q._id !== questionId)
      );
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div>
      <NavbarDashboard />
      <div className="flex flex-row h-screen">
        <SidebarDashboard />
        <div className="w-full">
          <div className="m-5 bg-slate-50 rounded-lg shadow-lg">
            <div className="p-5">
              <h1 className="font-bold text-xl">List All Question</h1>
              <Link to="/dashboard/questions/add-new-question">
                <button className="btn btn-success text-white mt-2">
                  Add New Question
                </button>
              </Link>
              {/* TABLE */}
              <div className="overflow-x-auto mt-5">
                <table className="table table-xs">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {question.map((item, i) => (
                      <tr key={i + 1}>
                        <th>{i + 1}</th>
                        <td>
                          <Link
                            to={`/details-question/${item._id}`}
                            className="text-green-600 hover:text-green-800"
                          >
                            {item.title}
                          </Link>
                        </td>
                        <td>{item.description.substring(0, 50)}...</td>
                        <td>{item.category.join(`, `)}</td>
                        <td>{item.author}</td>
                        <td className="flex flex-col items-center gap-2">
                          <Link
                            to={`/dashboard/questions/edit-question/${item._id}`}
                          >
                            <button className="btn btn-success btn-xs">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="btn btn-error btn-xs ml-1"
                            onClick={() => handleDeleteQuestion(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDashboard;
