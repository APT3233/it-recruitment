import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { submitApplicationForm } from "../../services/JobService";
import AlertNoti from "../Ui/Notif/noti";

interface JobType {
  jobId: number;
  name: string;
  city: string;
  salary: number;
  status: string;
  language: string | string[];
  timePost: string;
}

const JobDetail: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<boolean | null>(null);
  const location = useLocation();
  const data: JobType = location.state?.job;
  const languages = typeof data.language === "string" ? JSON.parse(data.language) : data.language;
  const formattedTime = new Date(data.timePost).toLocaleDateString();

  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
    introduce: "",
    link_project: "",
    yoe: 0,
    job_id: data.jobId,
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(applicant)
    submitApplicationForm(applicant)
    .then((res) => {
      console.log(res)
      if(res.status === "ok"){
        setSubmitStatus(true)
      }
      else{
        setSubmitStatus(false)
      }
        
    })
    .catch((error) => {
      console.error("Send FAILED",error)
      setSubmitStatus(false)
    })
    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="job-detail-container">
        <div className="job-detail">
          <p><strong>Job Title:</strong> {data.name}</p>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>Salary:</strong> ${data.salary.toLocaleString()}</p>
          <p><strong>Status:</strong> {data.status}</p>
          <p><strong>Languages:</strong> {languages.join(", ")}</p>
          <p><strong>Posted On:</strong> {formattedTime}</p>
        </div>

        <h2 className="subtitle-apply-job">Apply for this job</h2>

        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={applicant.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={applicant.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={applicant.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="introduce">Introduce Yourself:</label>
            <textarea
              id="introduce"
              name="introduce"
              value={applicant.introduce}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="link_project">Link to Project (optional):</label>
            <input
              type="text"
              id="link_project"
              name="link_project"
              value={applicant.link_project}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="yoe">Years of Experience:</label>
            <input
              type="number"
              id="yoe"
              name="yoe"
              value={applicant.yoe}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Apply</button>
        </form>
        <br/>
        {submitStatus !== null && ( 
          submitStatus ? (
            <AlertNoti
              type="success"
              title="Submitted."
              desc="Your form is submitted successfully."
            />
          ) : (
            <AlertNoti
              type="error"
              title="Submission failed."
              desc="Your form submission failed."
            />
          )
        )}
      </div>
    </>
  );
};

export default JobDetail;
