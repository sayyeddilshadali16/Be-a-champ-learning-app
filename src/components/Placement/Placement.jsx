import React, { useState } from 'react';
import './Placement.css';
import { placementData } from '../../Data/PlacementData';
import { saveJob } from '../redux/action';
import { useDispatch } from 'react-redux';
import { BsSearch } from "react-icons/bs";

const Placement = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const handleSave = (event,job) => {
    event.preventDefault();
    dispatch(saveJob(job))
  }

  const handleSearch = () => {
    const filteredResults = placementData.filter(
      job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className='placement-container'>
      <div className='main-search-container'>
        <h1 className='search-job-title'>Search Jobs <span>.</span> </h1>
        <div className='search-container'>
          <input
            type="text"
            placeholder="Search by title, company, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-button-icon' onClick={handleSearch}><BsSearch /></button>
        </div>

        <div>
          {searchResults.map((job) => (
            <div key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <table>
                <tr>
                  <td><strong>Company:</strong></td>
                  <td>{job.company}</td>
                </tr>
                <tr>
                  <td><strong>Location:</strong> </td>
                  <td>{job.location}</td>
                </tr>
                <tr>
                  <td><strong>Experience:</strong></td>
                  <td>{job.experience}</td>
                </tr>
                <tr>
                  <td><strong>Responsibilties:</strong></td>
                  <td>{job.responsibilites}</td>
                </tr>
                <tr>
                  <td><strong>Qualification:</strong></td>
                  <td>{job.qualification}</td>
                </tr>
                <tr>
                  <td><strong>Salary:</strong></td>
                  <td>{job.salary}</td>
                </tr>
              </table>
              <div className="apply-button-container">
                <button><a className='apply-link' href={job.link} target='blank' >Apply</a></button>
                <button onClick={(event)=>handleSave(event,job)}>Save Job</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Placement