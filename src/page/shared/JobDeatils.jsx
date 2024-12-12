import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDeatils = () => {
  const { _id } = useLoaderData();
  
  return (
    <div>
      <Link to={`/jobApply/:${_id}`}>
        <button className="btn">Apply now</button>
      </Link>
    </div>
  );
};

export default JobDeatils;
