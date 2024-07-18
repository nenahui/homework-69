import './App.css';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Show } from './containers/Show/Show';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show/:showId' element={<Show />} />
      </Routes>
    </Layout>
  );
};
