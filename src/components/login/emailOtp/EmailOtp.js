import React, { useState } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VerifyOtp } from "../../../actions/fmLogin/auth";

const EmailOtp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const data = {
        emailId: values.emailId,
        otp: values.otp,
        role: "factoryManager",
      };
      console.log("Received values:", data);
      setLoading(true);
      const res = await dispatch(VerifyOtp(data));

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
            name="otp"
            rules={[{ required: true, message: "Please enter your otp!" }]}
          >
            <Input placeholder="OTP" />
          </Form.Item>

          <Form.Item>
            <Button className="default-btn" htmlType="submit" loading={loading}>
              Get OTP
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EmailOtp;
