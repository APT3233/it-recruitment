import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../utils/fetchAPI";
import "../../assets/css/companyList.css"

interface Company {
  id: number;
  name: string;
  phone: string;
  email: string;
  quanityCv: number;
  quanityJob: number;
}

const CompanyList: React.FC = () => {
  const [data, setData] = useState<Company>();
  const [loadingList, setLoadingList] = useState<boolean>(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    const getData = async () => {
      const res = await instance.get("/companies");
      if (res) {
        console.log(res.data);
        setData(res.data);
        setLoadingList(false);
      }
    };
    getData()
  }, []);
  
  return (
    <>
      <div className="section-companylist">
        <h3>Company List</h3>

        <div className="companies__list">
          {!loadingList && data && Array.isArray(data) ? (
            data.map((item, index) => (
              <div
                key={index}
                className="companies__item"
                onClick={() =>
                  navigate(`/company/${item.id}`, {
                    state: { company: item },
                  })
                }
              >
                <p>
                  Company{" "}
                  <span className="company-name">{item.name}</span>
                </p>

                <p>
                  Staff:{" "}
                  <span className="company-staff">
                    {item.quanityStaff}
                  </span>
                </p>
                <p>
                  Jobs:{" "}
                  <span className="company-job">{item.quanityJob}</span>
                </p>
                <p>
                  Phone:{" "}
                  <span className="company-staff">{item.phone}</span>
                </p>
                <p>
                  Email:{" "}
                  <span className="company-email">{item.email}</span>
                </p>
              </div>
            ))
          ) : (
            <div className="section-companylist__loading"><Spin size="large" /></div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyList;
