import React, { useState } from "react";
import { Card, Form, Input, Button, Typography, Breadcrumb,Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
// import { useDispatch } from 'react-redux';
// import { updatePassword } from '../actions/auth/auth';

const { Title, Text } = Typography;

const Settings = () => {
  //   const user = JSON.parse(localStorage.getItem('profile')).data;

  const [form] = Form.useForm();
  const [userInfo, setUserInfo] = useState({
    // email: user.email,
    email: "",
    password: "",
    confirmPassword: "",
    oldPassword: "",
  });

  //   const dispatch = useDispatch();

  const handleChange = (changedValues) => {
    setUserInfo({
      ...userInfo,
      ...changedValues,
    });
  };

  const handleSubmit = async () => {
    try {
      //   dispatch(updatePassword(userInfo));
      form.resetFields();
      alert("Password updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{padding:'20px'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",  
        }}
      >
        <p style={{ fontSize: "22px" }}>Settings</p>
        <Breadcrumb style={{ margin: "22px 0"}}>
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card title="User Settings" extra={<Text>{"abc@gmail.com"}</Text>} style={{ maxWidth: "800vw" }}>
        <Form
          form={form}
          onFinish={handleSubmit}
          onValuesChange={handleChange}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="New Password"
              name="password"
              rules={[{ required: true, message: "Please enter new password" }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[{ required: true, message: "Please enter old password" }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item>
            <Button className="default-btn" htmlType="submit">
            Update Password
            </Button>
            </Form.Item>
          </Col>
        </Form>
      </Card>
    </div>
  );
};

export default Settings;
