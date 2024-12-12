import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDeatils = () => {
  const job = useLoaderData()
  console.log(job)
  return (
    <div>
      
    </div>
  );
};

export default JobDeatils;