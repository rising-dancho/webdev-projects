import React from 'react';
import JobListing from './JobListing';
// import jobs from '../jobs.json';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

function JobListings({ isHome = false }) {
  // console.log(jobs);
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  const [jobs, setJobs] = useState([]);
  // for showing a loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-b Browse Jobslue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          // takes in the loading state as props
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
        ;
      </div>
    </section>
  );
}

export default JobListings;
