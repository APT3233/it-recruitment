import { useLocation } from "react-router-dom";
import "../../assets/css/company.css";

interface CompanyProfile {
  companyId: number;
  name: string;
  phone: string;
  email: string;
  quanityJob: number;
  quanityCv: number;
  description?: string;
}
const CompanyItem: React.FC = () => {
  const { state } = useLocation();
  const company = state?.company as CompanyProfile;
  console.log("Company Item: ", company)
  return (
    <>
      <div className="company-detail__content">
        <h1 className="company-detail__title">{company?.name}</h1>
        <div className="company-detail__info">
          <p>
            <strong>Phone:</strong> {company?.phone}
          </p>
          <p>
            <strong>Email:</strong> {company?.email}
          </p>
          <p>
            <strong>Jobs:</strong> {company?.quanityJob}
          </p>
          <p>
            <strong>CVs:</strong> {company?.quanityCv}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {company?.description || "No description available"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyItem;
