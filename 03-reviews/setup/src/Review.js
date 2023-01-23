import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review, setReview] = useState(people[0]);

  const goesLeft = () => {
    people.indexOf(review) === 0 ? setReview(people[people.length-1]) : setReview(people[people.indexOf(review)-1]);
  }
  const goesRight = () => {
    people.indexOf(review) === people.length-1 ? setReview(people[0]) : setReview(people[people.indexOf(review)+1]);
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    setReview(people[randomIndex]);
  }

  return(
    <div className='review'>
      <div className='img-container'>
        <img src={review.image} alt={review.name} className="person-img"/>
        <span className='quote-icon'><FaQuoteRight /></span>
      </div>
      <h4 className='author'>{review.name}</h4>
      <h5 className='job'>{review.job}</h5>
      <p className='info'>{review.text}</p>
      <div className='button-container'>
        <button onClick={goesLeft} className="prev-btn"><FaChevronLeft /></button>
        <button onClick={goesRight} className="next-btn"><FaChevronRight /></button>
      </div>
      <button onClick={randomPerson} className='random-btn'>Surprise Me</button>
    </div>
  )
};

export default Review;
