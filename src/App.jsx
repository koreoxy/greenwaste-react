import Home from './pages/Home';
import PageSolution from './pages/PageSolution';
import PageSolutionDaurUlang from './pages/PageSolutionDaurUlang';
import PageSolutionDaurUlangDetail from './pages/PageSolutionDaurUlangDetail';
import PageSolutionPengomposan from './pages/PageSolutionPengomposan';
import PageSolutionPengomposanDetail from './pages/PageSolutionPengomposanDetail';
import PageSolutionProduk from './pages/PageSolutionProduk';
import PageSolutionProdukDetail from './pages/PageSolutionProdukDetail';
import PageBerita from './pages/PageBerita';
import PageBeritaRekomendasiDetail from './pages/PageBeritaRekomendasiDetail';
import PageBeritaTerkiniDetail from './pages/PageBeritaTerkiniDetail';
import PageBeritaDetail from './pages/PageBeritaDetail';
import AllQuestion from './pages/forum/pages/AllQuestion';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import ErrorPage from './pages/ErrorPages';
import Login from './pages/Login';
import Register from './pages/Register';
import AskQuestion from './pages/forum/pages/AskQuestion';
import MyQuestion from './pages/forum/pages/MyQuestion';
import PrivateRoute from './components/PrivateRoute';
import MyProfile from './pages/forum/pages/MyProfile';
import EditQuestion from './pages/forum/pages/EditQuestion';
import DetailQuestions from './pages/forum/pages/DetailQuestions';

import VideoTutorial from './pages/VideoTutorial';
import Dashboard from './pages/admin/Dashboard';
import UsersDashboard from './pages/admin/UsersDashboard';
import AddNewUser from './pages/admin/AddNewUser';
import EditUser from './pages/admin/EditUser';
import QuestionDashboard from './pages/admin/QuestionDashboard';
import AddNewQuestion from './pages/admin/AddNewQuestion';
import EditQuestionDashboard from './pages/admin/EditQuestionDashboard';
import InfoPage from './pages/InfoPage';
import IsAdmin from './components/IsAdmin';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/solution',
          element: <PageSolution />,
        },
        {
          path: '/solution/daurulang',
          element: <PageSolutionDaurUlang />,
        },
        {
          path: '/solution/daurulang/detail/:id',
          element: <PageSolutionDaurUlangDetail />,
        },
        {
          path: '/solution/pengomposan',
          element: <PageSolutionPengomposan />,
        },
        {
          path: '/solution/pengomposan/detail/:id',
          element: <PageSolutionPengomposanDetail />,
        },
        {
          path: '/solution/produk',
          element: <PageSolutionProduk />,
        },
        {
          path: '/solution/produk/detail/:id',
          element: <PageSolutionProdukDetail />,
        },
        {
          path: '/berita',
          element: <PageBerita />,
        },
        {
          path: '/berita/beritaDetail',
          element: <PageBeritaDetail />,
        },
        {
          path: '/berita/beritarekomendasidetail/:id',
          element: <PageBeritaRekomendasiDetail />,
        },
        {
          path: '/berita/beritaterkinidetail/:id',
          element: <PageBeritaTerkiniDetail />,
        },
        {
          path: '/forum/all-question',
          element: <AllQuestion />,
        },
        {
          path: '/details-question/:questionId',
          element: <DetailQuestions />,
        },
        {
          path: '/info-page',
          element: <InfoPage />,
        },
        {
          element: <PrivateRoute />,
          children: [
            {
              path: '/forum/ask-question',
              element: <AskQuestion />,
            },
            {
              path: '/forum/my-question',
              element: <MyQuestion />,
            },
            {
              path: '/my-profile',
              element: <MyProfile />,
            },
            {
              path: '/edit-question/:questionId',
              element: <EditQuestion />,
            },
          ],
        },
        {
          path: '/video_tutorial',
          element: <VideoTutorial />,
        },
      ],
    },
    {
      element: <IsAdmin />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/dashboard/users',
          element: <UsersDashboard />,
        },
        {
          path: '/dashboard/users/add-new-user',
          element: <AddNewUser />,
        },
        {
          path: '/dashboard/users/edit-user/:userId',
          element: <EditUser />,
        },
        {
          path: '/dashboard/questions',
          element: <QuestionDashboard />,
        },
        {
          path: '/dashboard/questions/add-new-question',
          element: <AddNewQuestion />,
        },
        {
          path: '/dashboard/questions/edit-question/:questionId',
          element: <EditQuestionDashboard />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
