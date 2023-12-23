import React, { useState } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { updateLogin } from "../../actions/fmLogin/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const data = {
        emailId: values.emailId,
        password: values.password,
        role: "factoryManager",
      };
      console.log("Received values:", data);
      setLoading(true);
      const res = await dispatch(updateLogin(data));

      message.success(res.message);
      navigate("/factory");
    } catch (error) {
      console.error("Error updating login:", error);
    //   message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card title="Login" style={{ width: 300 }}>
        <Form onFinish={onFinish} initialValues={{ remember: true }}>
          <Form.Item
            name="emailId"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button className="default-btn" htmlType="submit" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
