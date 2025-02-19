import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SearchPage from './components/SearchPage';
import PlaylistPage from './components/PlaylistPage';
import LoginPage from './components/auth/LoginPage';
import NowPlaying from './components/NowPlaying';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.content}>
          <Sidebar />
          <main style={styles.mainContent}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/playlist/:id" element={<PlaylistPage />} />
            </Routes>
          </main>
        </div>
        <NowPlaying />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    height: '100vh',
    backgroundColor: '#121212',
  },
  content: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  mainContent: {
    flex: 1,
    overflow: 'auto',
    padding: '20px',
  },
};

export default App; 