import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';


function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error){
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchTours();
  }, [])

  const handleDelete = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(loading){
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} handleDelete={handleDelete} />
    </main>
  )
}

export default App
