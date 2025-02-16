import React, { useEffect, useState } from "react";
import { getJobByCompanyId } from "../../services/CompaniesService";
import "../../assets/css/company.css";
import { useNavigate } from "react-router-dom";

interface Job {
  jobId: number;
  name: string;
  language: string[];
  city: string;
  salary: number;
  status: string;
  timePost: string;
}

const JobItem: React.FC<{ id: number }> = ({ id }) => {
  const [job, setJob] = useState<Job[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const jobDetail: Job[] = await getJobByCompanyId(id);
      setJob(jobDetail);
      console.log(jobDetail);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="company-job">
        <h3 className="company-job__subtitle">Some Job Avaiable</h3>
        {job && job.length > 0 ? (
          <>
            <div className="company-job__box">
              {job.map((item) => (
                <div
                  key={item.jobId}
                  className="job-item"
                  onClick={() =>
                    navigate(`/job/${item.jobId}`, {
                      state: { job: item },
                    })
                  }
                >
                  <h4>{item.name}</h4>
                  <p>
                    <strong>City:</strong> {item.city}
                  </p>
                  <p>
                    <strong>Salary:</strong> ${item.salary}
                  </p>
                  <p>
                    <strong>Status:</strong> {item.status}
                  </p>
                  <p>
                    <strong>Posted On:</strong> {item.timePost}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h4>We will update soon!</h4>
        )}
      </div>
    </>
  );
};

export default JobItem;
