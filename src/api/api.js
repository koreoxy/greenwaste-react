import axios from 'axios';

export const getQuestions = (callback) => {
  axios
    .get('https://api-greenwaste.vercel.app/api/questions')
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
