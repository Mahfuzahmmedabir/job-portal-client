import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const JobApply = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  console.log(user);

  const submitJobApplecation = e => {
    e.preventDefault();
    const form = e.target;
    const resume = form.resume.value;
    const github = form.github.value;
    const linding = form.linding.value;
    console.log(github, linding, resume);

    const jobapplication = {
      job_id: id,
      job_Applicane: user.email,
      resume,
      github,
      linding, 
    };

    fetch('http://localhost:5000/job-application', {
      method: 'POST',
      headers: {
       'content-type':  'application/json'
      },
      
      body: JSON.stringify(jobapplication )
    })
      .then(res => res.json())
      .then(data => {
      console.log(data)
    })


  };

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={submitJobApplecation} className="card-body">
            <h1 className="text-5xl font-bold">Apply job and good luck</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume</span>
              </label>
              <input
                type="url"
                placeholder="Resume link"
                name="resume"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linding</span>
              </label>
              <input
                type="url"
                placeholder="Linding"
                name="linding"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub link</span>
              </label>
              <input
                type="url"
                placeholder="GitHub link"
                name="github"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
