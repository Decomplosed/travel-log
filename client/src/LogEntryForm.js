import React from 'react';

const LogEntryForm = () => {
  return (
    <form>
      <label htmlFor='title'>Title</label>
      <input name='title' required />
      <label htmlFor='comments'>Comments</label>
      <textarea name='comments' rows={3} />
      <label htmlFor='description'>Description</label>
      <textarea name='description' rows={3} />
      <label htmlFor='image'>Image</label>
      <input name='image' />
    </form>
  );
};

export default LogEntryForm;
