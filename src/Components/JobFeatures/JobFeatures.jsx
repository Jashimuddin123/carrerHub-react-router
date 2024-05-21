import { useEffect, useState } from "react";
import Job from "../Job/Job";


const JobFeatures = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect( () =>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))

    } , [])
    return (
        <div>
            <h1 className="text-5xl text-center">Job Features </h1> 
            <p className="text-xl text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
             Doloribus veritatis commodi minus obcaecati voluptatem fugiat.</p>
             
             <div className="grid grid-cols-2 gap-7 mx-auto">
                {
                    jobs.slice(0,dataLength).map(job=><Job  key={job.id} job={job}></Job>)
                }
             </div>
             <div className={dataLength === jobs.length ? "hidden" : ''} >
                <button onClick={()=> setDataLength(jobs.length)} className="bg-slate-500 ml-72 text-white px-4 py-2 rounded my-6 ">Show all</button>
             </div>

        </div>
        
    );
};

export default JobFeatures;