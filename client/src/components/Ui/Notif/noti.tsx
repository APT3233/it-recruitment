import React from "react";
import { Alert } from "antd";

interface AlertProps {
  title: string;
  desc: string;
  type: "success" | "error" | "warning" | "info";
}
const AlertNoti: React.FC<AlertProps> = ({ type, title, desc }) => (
  <>
    <Alert message={title} description={desc} type={type} />
  </>
);

export default AlertNoti;
