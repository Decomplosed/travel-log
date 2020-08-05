import React from 'react';
import { useForm } from 'react-hook-form';

const LogEntryForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form className='entry-form'>
      <label htmlFor='title'>Title</label>
      <input name='title' required />
      <label htmlFor='comments'>Comments</label>
      <textarea name='comments' rows={3} />
      <label htmlFor='description'>Description</label>
      <textarea name='description' rows={3} />
      <label htmlFor='image'>Image</label>
      <input name='image' />
      <label htmlFor='visitDate'>Visit Date</label>
      <input name='visitDate' type='date' />
      <button>Create Travel Log</button>
    </form>
  );
};

export default LogEntryForm;
