import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PostsList page component
 * Displays a list of the user's blog posts with filtering and sorting options
 */
const PostsList = () => {
  // Mock data for demonstration
  const posts = [
    {
      id: 1,
      title: "Getting Started with WriteEase",
      excerpt: "Learn how to make the most of the WriteEase platform for your blogging needs.",
      status: "Published",
      date: "May 15, 2023",
      views: 243
    },
    {
      id: 2,
      title: "10 Tips for Better Writing",
      excerpt: "Improve your writing skills with these proven techniques that professional writers use.",
      status: "Published",
      date: "May 10, 2023",
      views: 187
    },
    {
      id: 3,
      title: "The Future of Content Creation",
      excerpt: "Exploring how AI and new technologies are changing the landscape of content creation.",
      status: "Draft",
      date: "May 5, 2023",
      views: 0
    },
  ];

  return (
    <div className="posts-list-page">
      <header className="page-header">
        <div className="page-title-area">
          <h1>My Posts</h1>
          <p className="subtitle">Manage your blog posts</p>
        </div>
        <div className="page-actions">
          <Link to="/editor/new" className="btn">Create New Post</Link>
        </div>
      </header>

      <div className="posts-controls">
        <div className="filters">
          <select className="filter-dropdown">
            <option>All Posts</option>
            <option>Published</option>
            <option>Drafts</option>
            <option>Archived</option>
          </select>
          <select className="filter-dropdown">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Writing</option>
            <option>Marketing</option>
          </select>
        </div>
        <div className="search">
          <input type="text" placeholder="Search posts..." className="search-input" />
        </div>
      </div>

      <div className="posts-table">
        <div className="table-header">
          <div className="th title-col">Title</div>
          <div className="th status-col">Status</div>
          <div className="th date-col">Date</div>
          <div className="th views-col">Views</div>
          <div className="th actions-col">Actions</div>
        </div>
        
        <div className="table-body">
          {posts.map(post => (
            <div key={post.id} className="table-row">
              <div className="td title-col">
                <div className="post-title">{post.title}</div>
                <div className="post-excerpt">{post.excerpt}</div>
              </div>
              <div className="td status-col">
                <span className={`status-badge ${post.status.toLowerCase()}`}>
                  {post.status}
                </span>
              </div>
              <div className="td date-col">{post.date}</div>
              <div className="td views-col">{post.status === "Draft" ? "—" : post.views}</div>
              <div className="td actions-col">
                <button className="action-btn">View</button>
                <button className="action-btn">Edit</button>
                <button className="action-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button className="pagination-btn prev" disabled>Previous</button>
        <div className="pagination-info">Page 1 of 1</div>
        <button className="pagination-btn next" disabled>Next</button>
      </div>
    </div>
  );
};

export default PostsList;
