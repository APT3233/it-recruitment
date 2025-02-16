import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm";
import { getAllJob } from "../../services/JobService";

interface JobType {
  name: string;
  city: string;
  salary: number;
  status: string;
  language: string | string[];
  timePost: string;
}

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<JobType[]>([]);

  // 🔥 Giải mã `city` từ query và loại bỏ khoảng trắng thừa
  const city = searchParams.get("city") ? decodeURIComponent(searchParams.get("city")!).trim() : "";
  // 🔥 Giải mã `language`, tách thành mảng, chuẩn hóa về chữ thường
  const language = searchParams.get("language")
    ? decodeURIComponent(searchParams.get("language")!)
        .split(",")
        .map((lang) => lang.trim().toLowerCase())
    : [];

  useEffect(() => {
    const fetchJob = async () => {
      const response = await getAllJob();
      const filteredData = response.filter((item: JobType) => {

        const jobCity = decodeURIComponent(item.city).trim();
        const jobLanguages = Array.isArray(item.language)
          ? item.language.map((lang) => lang.trim().toLowerCase())
          : [item.language.trim().toLowerCase()];

        // 🎯 Kiểm tra `city` có trùng không?
        const matchCity = city ? jobCity === city : true;

        // 🎯 Kiểm tra `language` có ít nhất một phần tử trùng không?
        const matchLanguage =
          language.length > 0
            ? jobLanguages.some((lang) => language.includes(lang))
            : true;

        return matchCity && matchLanguage && item.status === "Active";
      });

      setData(filteredData);
    };

    fetchJob();
  }, []);

  return (
    <>
      <SearchForm />
      <h2>Search Results:</h2>
      {data.length > 0 ? (
        <div className="job-list">
          {data.map((job, index) => (
            <div key={index} className="job-item">
              <h3>{job.name}</h3>
              <p>
                <strong>City:</strong> {job.city}
              </p>
              <p>
                <strong>Salary:</strong> ${job.salary}
              </p>
              <p>
                <strong>Status:</strong> {job.status}
              </p>
              <p>
                <strong>Language:</strong> {Array.isArray(job.language) ? job.language.join(", ") : job.language}
              </p>
              <p>
                <strong>Posted On:</strong> {job.timePost}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs found matching your criteria.</p>
      )}
    </>
  );
};

export default Search;
