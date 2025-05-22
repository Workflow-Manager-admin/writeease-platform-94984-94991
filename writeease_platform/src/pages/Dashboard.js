import React from 'react';

/**
 * Dashboard page component
 * Shows overview of user's writing activities and statistics
 */
const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="page-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Welcome back! Here's an overview of your writing activities.</p>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-title">Total Posts</div>
          <div className="stat-value">24</div>
          <div className="stat-change positive">+3 this month</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Published</div>
          <div className="stat-value">18</div>
          <div className="stat-change positive">75% of total</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Drafts</div>
          <div className="stat-value">6</div>
          <div className="stat-change neutral">25% of total</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Total Views</div>
          <div className="stat-value">1,254</div>
          <div className="stat-change positive">+12% this month</div>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="recent-posts">
          <div className="section-header">
            <h2>Recent Posts</h2>
            <button className="btn btn-secondary">View all</button>
          </div>
          <div className="posts-list">
            {/* Placeholder for posts list */}
            <div className="placeholder-message">
              Your recent posts will appear here.
            </div>
          </div>
        </section>

        <section className="activity-timeline">
          <div className="section-header">
            <h2>Recent Activity</h2>
          </div>
          <div className="timeline">
            {/* Placeholder for activity timeline */}
            <div className="placeholder-message">
              Your recent activities will appear here.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
