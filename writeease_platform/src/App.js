import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import layout
import MainLayout from './components/layout/MainLayout';

// Import pages
import Dashboard from './pages/Dashboard';
import PostsList from './pages/PostsList';
import PostEditor from './pages/PostEditor';

/**
 * Main App component for WriteEase Platform
 * Sets up routing and main application structure
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Main layout with nested routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/editor/:postId" element={<PostEditor />} />
          <Route path="/editor/new" element={<PostEditor />} />
          
          {/* Placeholder routes for future implementation */}
          <Route path="/categories" element={<PlaceholderPage title="Categories" />} />
          <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/help" element={<PlaceholderPage title="Help Center" />} />
        </Route>
        
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

/**
 * Placeholder component for pages not yet implemented
 */
const PlaceholderPage = ({ title }) => (
  <div className="placeholder-page">
    <h1>{title}</h1>
    <p>This page is under development.</p>
  </div>
);

/**
 * Not Found page for 404 errors
 */
const NotFound = () => (
  <div className="not-found-page">
    <h1>404: Page Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
    <a href="/" className="btn">Return to Dashboard</a>
  </div>
);

export default App;
