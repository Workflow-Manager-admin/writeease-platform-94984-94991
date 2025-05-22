import React from 'react';

/**
 * PostEditor page component
 * Interface for creating and editing blog posts
 */
const PostEditor = () => {
  return (
    <div className="post-editor-page">
      <header className="page-header">
        <h1>Create New Post</h1>
        <div className="editor-actions">
          <button className="btn btn-secondary">Save Draft</button>
          <button className="btn">Publish</button>
        </div>
      </header>

      <div className="editor-container">
        <div className="editor-main">
          <div className="title-input">
            <input 
              type="text" 
              placeholder="Post title" 
              className="title-field"
            />
          </div>

          <div className="content-editor">
            {/* Placeholder for rich text editor */}
            <div className="placeholder-editor">
              <textarea 
                className="content-textarea" 
                placeholder="Start writing your blog post here..."
                rows={15}
              ></textarea>
              <div className="placeholder-message">
                Rich text editor will be implemented here.
              </div>
            </div>
          </div>
        </div>

        <aside className="editor-sidebar">
          <section className="sidebar-section">
            <h3>Settings</h3>
            <div className="form-group">
              <label>Status</label>
              <select className="form-control">
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select className="form-control">
                <option>Select a category</option>
                <option>Technology</option>
                <option>Writing</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
            </div>
          </section>

          <section className="sidebar-section">
            <h3>Featured Image</h3>
            <div className="image-upload">
              <div className="upload-placeholder">
                <div className="placeholder-text">
                  Drop an image here or click to upload
                </div>
              </div>
            </div>
          </section>

          <section className="sidebar-section">
            <h3>Tags</h3>
            <div className="tags-input">
              <input type="text" placeholder="Add tags..." className="tag-field" />
              <div className="tags-list">
                <span className="tag">writing <button className="remove-tag">×</button></span>
                <span className="tag">blog <button className="remove-tag">×</button></span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default PostEditor;
