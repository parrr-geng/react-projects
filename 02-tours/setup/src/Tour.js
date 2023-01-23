import React, { useState } from 'react';

const Tour = ({tour, handleDelete}) => {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(!readMore);
  }
  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className='tour-info'>
          <h4>{tour.name}</h4>
          <div className='tour-price'>{tour.price}</div>
        </div>
        <p>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`} <button onClick={handleClick}>Read More</button>
        </p>
        <button className='delete-btn' onClick={()=> handleDelete(tour.id)}>Not Interested</button>
      </footer>  
    </div>
  )
};

export default Tour;
