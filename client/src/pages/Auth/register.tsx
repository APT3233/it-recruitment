import logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import type { CascaderProps } from "antd";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Select,
} from "antd";
import { API_ADDRESS_VN } from "../../utils/api_addr";

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}
const residences: CascaderProps<DataNodeType>["options"] = API_ADDRESS_VN;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="226">+226</Option>
        <Option value="86">+86</Option>
        <Option value="30">+30</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".vn", ".org", ".net", ".onion"].map(
          (domain) => `${value}${domain}`
        )
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <>
      <div className="auth__page reg__page">
        <div className="auth__container">
          <div className="auth__top">
            <a href="/">
              <img src={logo} alt="logo-apt-login" />
            </a>
          </div>
          <div className="auth__main">
            <h3 className="submain__title">Refactor to improve</h3>
            <div className="register__form">
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  prefix: "84",
                }}
                style={{ maxWidth: 600 }}
                scrollToFirstError
              >
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    {
                      type: "string",
                      message: "The input is a username!",
                    },
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="name"
                  label="Name Company"
                  tooltip="What is your company name?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    {
                      type: "array",
                      required: true,
                      message: "Please select your address!",
                    },
                  ]}
                >
                  <Cascader options={residences} />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item
                  name="website"
                  label="Website"
                  rules={[{ required: true, message: "Please input website!" }]}
                >
                  <AutoComplete
                    options={websiteOptions}
                    onChange={onWebsiteChange}
                    placeholder="website"
                  >
                    <Input />
                  </AutoComplete>
                </Form.Item>

                <Form.Item
                  name="desc"
                  label="Description"
                  rules={[
                    { required: true, message: "Please input Description" },
                  ]}
                >
                  <Input.TextArea
                    showCount
                    maxLength={350}
                    style={{ height: "145px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Should accept agreement")
                            ),
                    },
                  ]}
                >
                  <Checkbox>
                    I have read the <a href="">agreement</a>
                  </Checkbox>
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn__auth--submit"
                >
                  Register
                </Button>

                <div className="third-party-join__reg-option">
                  <span className="third__party-join__line--wrapper">
                    <span className="third__party-join__line"></span>
                  </span>
                  <span className="third-party-join__content">
                    <span className="third-party-join__or-span">or</span>
                  </span>
                </div>

                <p className="main__sign-in">
                  Already on APT3233? <a href="/login">Login now</a>
                  <p>Thanks for using..</p>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
