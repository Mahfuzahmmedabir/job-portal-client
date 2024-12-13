import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';

const MyJobsPost = () => {
  const { user } = useContext(AuthContext);
  const [myjob, setMyjob] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyjob(data);
        console.log(data);
      });
  }, [user?.email]);

  return (
    <div>
      <h2>MyJob{myjob.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>date line</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myjob.map((job, inx) => (
              <tr>
                <th>{inx + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobsPost;
