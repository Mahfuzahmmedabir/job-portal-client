import React, { useEffect, useState } from 'react';
import HotJobCart from './HotJobCart';

const Hotjobs = () => {
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setjobs(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 bg-slate-800 ">
        {jobs.map(job => (
          <HotJobCart key={job._id} job={job}></HotJobCart>
        ))}
      </div>
    </div>
  );
};

export default Hotjobs;
