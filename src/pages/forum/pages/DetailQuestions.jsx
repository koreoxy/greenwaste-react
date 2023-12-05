import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import handleTitle from '../../../handle/handleTitle';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MobileMenu from '../../../components/MobileMenu';

function DetailQuestions() {
  handleTitle('Details Question | GreenWaste');
  const { currentUser } = useSelector((state) => state.user);

  const params = useParams();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState(null);

  console.log(answer);
  // COMMENT STATE
  const [commentData, setCommentData] = useState({
    commentDescription: '',
    userName: '',
  });

  // API QUESTION DETAILS
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/questions/${params.questionId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }

        setQuestion(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchQuestion();
  }, []);

  // API COMMENT OR ANSWERS
  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/comments/${params.questionId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setAnswer(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAnswer();
  }, []);

  // COMMENT SUBMIT
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      description: commentData.commentDescription,
      userName: currentUser.username,
      questionRef: params.questionId,
    };

    // Submit comment to the server
    axios
      .post('/api/comments/', newComment)
      .then((response) => {
        console.log('Comment submitted successfully:', response.data);
        // Clear comment fields after submission
        setCommentData({
          ...commentData,
          commentDescription: '',
        });
        alert('Answer Berhasil di post !');
        location.reload();
      })
      .catch((error) => console.error('Error submitting comment:', error));
  };

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div className="fixed bottom-0 left-0 right-0 lg:hidden">
        <MobileMenu />
      </div>
      <div className="max-w-xs sm:max-w-xl lg:max-w-2xl lg:flex-initial mx-auto mt-10 mb-20">
        {loading && <p>Loading....</p>} {error && <p>Error</p>}
        {question && !loading && !error && (
          <div className="flex flex-col">
            <div className="mb-5">
              <ul className="flex flex-row gap-3 text-sm">
                <Link to={'/forum/all-question'}>
                  <li className="text-green-900 hover:text-green-500 cursor-pointer">
                    All Question
                  </li>
                </Link>
                <Link to={'/forum/ask-question'}>
                  <li className="text-green-900 hover:text-green-500 cursor-pointer">
                    Ask Question
                  </li>
                </Link>
                <Link to={'/forum/my-question'}>
                  <li className="text-green-900 hover:text-green-500 cursor-pointer">
                    My Question
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{question.title}</h1>
            </div>
            <div className="flex flex-row mt-10">
              <img
                src="/img/avatar.png"
                alt="avatar icon"
                className="w-[40px] object-contain"
              />
              <div className="flex flex-col ml-2">
                <span className="">{question.author}</span>
                <span className="text-sm text-gray-500">
                  {question.date.substring(0, 10)}
                </span>
              </div>
            </div>
            <div className="mt-5 text-lg">{question.description}</div>
            <div className="mt-4">
              <span className="text-green-700 mt-1">
                <b className="text-black font-normal">Category</b> :{' '}
                {question.category.join(`, `)}
              </span>
            </div>

            {/* ANSWER */}
            <div className="mt-10">
              <h1 className="border-b-2 font-bold">
                Answers {answer && answer.length}
              </h1>
              {/* LIST COMMENT OR ANSWERS */}
              <div className="flex flex-col">
                {loading && <p>Loading....</p>} {error && <p>Error</p>}
                {answer && !loading && !error && answer.length > 0 ? (
                  answer.map((item, i) => (
                    <div className="border-b-2" key={i}>
                      <div className="flex flex-row mt-5">
                        <img
                          src="/img/avatar.png"
                          alt="avatar icon"
                          className="w-[40px] object-contain"
                        />
                        <div className="flex flex-col ml-2">
                          <span className="">{item.userName}</span>
                          <span className="text-sm text-gray-500">
                            {item.date.substring(0, 10)}
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 mt-5">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="mt-2">
                    <h1>Tidak ada Jawaban Terbaru</h1>
                  </div>
                )}
              </div>

              <div className="mt-10">
                {currentUser ? (
                  <div>
                    <form onSubmit={handleCommentSubmit}>
                      <h1 className="font-bold">Add Your Answer</h1>

                      <textarea
                        name="commentDescription"
                        value={commentData.commentDescription}
                        onChange={handleChange}
                        required
                        placeholder="Tambahkan jawaban mu disini"
                        className="border p-3 rounded-lg w-full max-w-2xl"
                      />

                      <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 w-full sm:w-auto shadow-lg"
                      >
                        Submit Answer
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row">
                    <span>Login untuk menambahkan jawaban baru</span>
                    <Link to="/login">
                      <button className="bg-green-500 text-white p-2 rounded-md sm:ml-2 hover:bg-green-700 w-full sm:w-auto shadow-lg">
                        Login
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default DetailQuestions;
