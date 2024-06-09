import { useEffect, useState } from 'react';

// components

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/v1/workouts');
      const json = await response.json();

      // Log the entire response to the console
      console.log('API response:', json);

      if (response.ok) {
        setWorkouts(json.data);
      } else {
        // Log an error message if the response is not okay
        console.error('Failed to fetch workouts:', response.statusText);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
