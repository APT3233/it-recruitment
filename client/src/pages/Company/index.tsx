import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import CompanyItem from "../../components/Card/CompanyItem";
import JobItem from "../../components/Card/JobItem";


export default function Company() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.company;
  
  return (
    <>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <CompanyItem data={data} />
      <JobItem id={data?.companyId}/>
    </>
  );
}
