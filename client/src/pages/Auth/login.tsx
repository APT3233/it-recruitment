import logo from "../../assets/images/logo.png";
import "../../assets/css/auth.css";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { handleLogin } from "../../services/UserService";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  console.log("Success:", values);
  const username: string = values.username?.toLowerCase() || ""
  const password: string = values.password || ""
  const res = handleLogin(username, password);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => {
  return (
    <>
      <div className="auth__page">
        <div className="auth__container">
          <div className="auth__top">
            <a href="/"><img src={logo} alt="logo-apt-login" /></a>
          </div>
          <div className="auth__main">
            <h2 className="submain__title">How long is forever ?</h2>
            <div className="login__form">
              <Form
                layout="vertical"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
              >
                <Form.Item<FieldType>
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    className="btn__join"
                    type="primary"
                    htmlType="submit"
                  >
                    Agree & Join
                  </Button>
                </Form.Item>

                <div className="third-party-join__reg-option">
                  <span className="third__party-join__line--wrapper">
                    <span className="third__party-join__line"></span>
                  </span>
                  <span className="third-party-join__content">
                    <span className="third-party-join__or-span">or</span>
                  </span>
                </div>

                <p className="main__sign-in">
                  Already on APT3233? <a href="/register">Sign In</a>
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

export default Login;
