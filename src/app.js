import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home';
import Exercise from './pages/exercise';
import Layout from './components/layout';
import styles from './app.module.css';

function App() {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <Exercise path="/:exerciseId"  />
      </Router>
    </Layout>
  );
}

export default App;
