import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
const Job = ({job}) => {
    const {logo,job_title,company_name, remote_or_onsite,location,job_type,salary,job_description} = job
    return (
        <div>
               <div className="card bg-base-100 shadow-xl">
    <figure><img src={logo}alt="Shoes" /></figure>
   <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="border border-red-800 rounded text-lg px-4 py-1 bg-green-500 font-bold">{remote_or_onsite}</button>
        <button  className="border border-red-800 rounded text-lg 
        px-4 py-1 bg-sky-500 ml-4 font-bold">{job_type}</button>
    </div>
    <div className="flex text-lg items-center">
        <span><FaLocationDot /></span>
        <p className="ml-4">{location}</p>

        <span><RiMoneyDollarCircleFill /></span>
        <p className="ml-4">{salary}</p>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary w-36 mx-auto">Show All</button>
    </div>
   </div>
  </div>
        </div>
    );
};

export default Job;