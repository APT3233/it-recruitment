import JobDetail from "../../components/Card/JobDetail";
import "../../assets/css/job.css"
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Job: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Button onClick={() => navigate(-1)} >Back</Button>
      <h2 style={{textAlign: "center", marginBottom: "15px", fontSize: "30px"}}> Job Detail </h2>
      <JobDetail />
    </>
  );
};

export default Job;
