import React, { useState } from "react";
import { getAllCity, getAllLanguage } from "../../utils/allLanguages";
import { Button, Col, Form, Row, Select, SelectProps, Tag } from "antd";
import "../../assets/css/searchForm.css";
import { useNavigate } from "react-router-dom";

const options: SelectProps["options"] = getAllLanguage;

type TagRender = SelectProps["tagRender"];

const tagRender: TagRender = (props) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={"blue"}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 10 }}
    >
      {label}
    </Tag>
  );
};

const SearchForm: React.FC = () => {
  const navigate = useNavigate();

  

  const handleFinish = (value: any) => {
    console.log(value);
    const language = Array.isArray(value.language)
      ? value.language.map((lang:string) => lang.toLowerCase()).join(",") 
      : value.language.toLowerCase();
    let city = value?.city;
    city = city === "all" ? "" : city;
    navigate(`/search?city=${city}&language=${language}`);
  };

  return (
    <>
      <section className="section__home">
        <h1 className="search__subtitle">1000+ IT Jobs For Developers</h1>
        <Form
          onFinish={handleFinish}
          initialValues={{
            city: "hanoi",
            language: ["Python"],
          }}
        >
          <Row gutter={[12, 0]} >
            <Col xxl={3} xl={6} lg={6} xs={8}>
              <Form.Item name="city">
                <Select style={{ width: 120 }} options={getAllCity} />
              </Form.Item>
            </Col>

            <Col xxl={18} xl={15} lg={15} xs={16}>
              <Form.Item name="language">
                <Select
                  mode="multiple"
                  tagRender={tagRender}
                  placeholder="Programming Language"
                  style={{ width: "100%" }}
                  options={options}
                />
              </Form.Item>
            </Col>

            <Col xxl={3} xl={3} lg={3}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  );
};

export default SearchForm;
