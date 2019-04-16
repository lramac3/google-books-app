import React from 'react';
import './style.css';

const SearchForm = props => {
  return (
    <form>
      <div className='form-group'>
        <label className='BookSearchLabel'>
          <h3>Book Search</h3>
          <br />
         <h4>Book</h4>
        </label>
        <br />
        <input
          className='col-12 form-control'
          value={props.search}
          type='text'
          name='searchBook'
          placeholder="Harry Potter"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type='submit'
        className='submitBtn btn btn-primary'
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
