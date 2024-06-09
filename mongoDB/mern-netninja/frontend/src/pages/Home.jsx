import { useEffect, useState } from 'react';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/v1/workouts');
      const json = await response.json();

      // Log the entire response to the console
      console.log('API response (GET ALL):', json);

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
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
