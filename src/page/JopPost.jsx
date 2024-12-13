import React from 'react';

const JopPost = () => {

  const handealJopPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries())
    console.log(initialData)
  }
  return (
    <div>
      <form onSubmit={handealJopPost} className="card-body">
        {/* job title */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job location"
            className="input input-bordered"
            required
          />
        </div>

        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job cartagory</span>
          </label>
          <select name="cartagory" className="select select-ghost w-full ">
            <option disabled selected>
              Pick a job Cartagory
            </option>
            <option>full time</option>
            <option>intarn </option>
            <option>part time</option>
          </select>
        </div>

        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-bold">Job fild</span>
          </label>
          <select name="jobfild" className="select select-ghost w-full ">
            <option disabled selected>
              Pick the job fild
            </option>
            <option>Engineering</option>
            <option>Marketing </option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salry range */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Slary range</span>
            </label>

            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              type="text"
              name="Max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <select
              required
              name="curnnrey"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled selected>
                Curnnrey
              </option>
              <option>USD</option>
              <option>BDT</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* text */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Decription</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Decription"
            name="decription"
            required
          ></textarea>
        </div>
        {/* company name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            className="input input-bordered"
            required
          />
        </div>
        {/* job requrements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job requrements </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="textarea"
            placeholder="put each  requrements in new line"
            required
          ></textarea>
          {/* hr email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Hr name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr Name</span>
          </label>
          <input
            type="text"
            name="hr-name"
            placeholder="HR name"
            className="input input-bordered"
            required
          />
        </div>
        {/* company log */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">company log</span>
          </label>
          <input
            type="url"
            name="url"
            placeholder="company log"
            className="input input-bordered"
            required
          />
        </div>

        {/* submit button */}

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JopPost;
