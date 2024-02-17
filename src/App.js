import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stocks" element={<StocksPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
