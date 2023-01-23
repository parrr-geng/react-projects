import React from 'react';
import Tour from './Tour';

const Tours = ({tours, handleDelete}) => {
  return(
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} handleDelete={handleDelete} />
         )
        )}
      </div>
    </section>
  ) 
};

export default Tours;
