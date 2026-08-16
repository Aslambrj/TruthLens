/**
 * TruthLens Frontend - Main App Component
 * React application for misinformation detection platform
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>TruthLens</h1>
          <p>Evidence-Based AI Platform for Misinformation Detection</p>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/text" element={<TextAnalysis />} />
            <Route path="/image" element={<ImageAnalysis />} />
            <Route path="/video" element={<VideoAnalysis />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2026 TruthLens. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to TruthLens</h2>
      <p>Analyze claims, images, and videos for misinformation.</p>
      <nav>
        <ul>
          <li><a href="/text">Text Verification</a></li>
          <li><a href="/image">Image Analysis</a></li>
          <li><a href="/video">Video Analysis</a></li>
        </ul>
      </nav>
    </div>
  );
}

function TextAnalysis() {
  return <div className="analysis"><h2>Text Claim Verification</h2></div>;
}

function ImageAnalysis() {
  return <div className="analysis"><h2>Image Analysis</h2></div>;
}

function VideoAnalysis() {
  return <div className="analysis"><h2>Video Analysis</h2></div>;
}

export default App;
