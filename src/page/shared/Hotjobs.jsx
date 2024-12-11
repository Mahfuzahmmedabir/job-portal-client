import React, { useEffect, useState } from 'react';

const Hotjobs = () => {
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        console.log;
      });
  }, []);

  return <div>sdfsdfsadfsdaf</div>;
};

export default Hotjobs;
