import React from 'react';
import './Save.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeJob } from '../redux/action';
import { NavLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Save = () => {
  const savedJobs = useSelector((state) => state.saveJob);
  console.log(savedJobs)
  const dispatch = useDispatch();

  const handleClose = (event,job) => {
    event.preventDefault();
    dispatch(removeJob(job))
  }

  const emptySave = () => {
    return (
      <div className='emptySave'>
        <h3>No job saved</h3>
      </div>
    )
  };

  const moreJob = () => {
    return (
      <div className='more-jobs'>
        <NavLink style={{ textDecoration: 'none' }} to='/placement' ><p>Get more Jobs   <FaExternalLinkAlt /></p></NavLink>
      </div>
    )
  }

  return (
    <div className='save-container'>
      <h1 className='save-job-title'>Saved Jobs<span>.</span></h1>
      <div className="save-main-container">
        {savedJobs.length === 0 && emptySave()}
        {savedJobs.length !== 0 && savedJobs.map((savedJob) => (
          <div className='saved-jobs' key={savedJob.id}>
              <div className='saved-job-title-company'>
                <h3>{savedJob.title}</h3>
                <p>{savedJob.company}</p>
                <p>{savedJob.location}</p>
              </div>
              <div className="save-job-button-container">
                <button onClick={(event) => handleClose(event,savedJob)}>Remove</button>
                <button><a className='apply-link' href={savedJob.link} target='blank' >Apply</a></button>
              </div>
            </div>
        ))}
        {savedJobs.length == 0 && moreJob()}
      </div>
    </div>
  )
}

export default Save