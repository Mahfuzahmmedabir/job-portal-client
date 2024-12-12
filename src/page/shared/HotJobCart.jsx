import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCart = ({ job }) => {
  const {
    _id,
    title,
    salaryRange,
    location,
    jobType,
    requirements,
    category,
    applicationDeadline,
    company,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <div className=" p-3 bg-slate-800 text-white  shadow-xl">
      <div className="flex gap-2">
        <figure>
          <img className="w-14" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-left font-semibold text-xl">{company}</h4>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>

      <div className="">
        <div>
          <h2 className="card-title">
            <p className="text-left">{title}</p>
          </h2>
          <p className=" text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
            culpa.
          </p>
        </div>
        <div className=" flex gap-2 flex-wrap mt-3">
          {requirements.map(skill => (
            <p className="flex border py-2 px-3"> {skill}</p>
          ))}
        </div>

        <div className="card-actions mb-4 items-center justify-between mt-3">
          <div className=" ">
            Salary: $ {salaryRange.max} - {salaryRange.min}
          </div>
          <Link to={`/jobs/${_id}`} className="text-center mx-auto flex-grow">
            <button className="btn ">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCart;
