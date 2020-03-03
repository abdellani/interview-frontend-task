import React from 'react';
const Form = ({ height, width, handleSubmit, handleChange }) => (
  <form className='form' onSubmit={handleSubmit}>
    <div className='from-group'>
      <label>Height :</label>
      <input
        type='number'
        id='height'
        min='2'
        max='100'
        value={height}
        onChange={handleChange}
      />
    </div>
    <div className='from-group'>
      <label>Width :</label>
      <input
        type='number'
        id='width'
        min='2'
        max='100'
        value={width}
        onChange={handleChange}
      />
    </div>
    <input type='submit' value='Start the game!' />
  </form>
);

export default Form;
