import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Switch,
  Button,
  Row,
  Col,
} from "antd";

const { Option } = Select;

const NewAssistantUser = (props) => {
  const { panels = [], orderlists = [] } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("received values");
  };
  const validateContactNumber = (_, value) => {
    const regex = /^\d{10}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit contact number!");
  };
  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="myForm"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Panel"
            name="panel"
            rules={[{ required: true, message: "Please select panel!" }]}
          >
            <Select placeholder="Panel">
              {panels.map((panel, index) => (
                <Option key={index} value={panel.panel}>
                  {panel.panel}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              { required: true, message: "Please enter mobile number!" },
              { validator: validateContactNumber },
            ]}
          >
            <Input placeholder="Mobile Number" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "Please enter a valid email address",
              },
              {
                required: true,
                message: "Email is required",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
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
              {
                required: true,
                message: "Please confirm your password",
              },
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
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Order Number"
            name="orderNumber"
            rules={[{ required: true, message: "Please enter order number!" }]}
          >
            <Select placeholder="Order Number">
              {orderlists.map((orderlist, index) => (
                <Option key={index} value={orderlist.orderNumber}>
                  {orderlist.orderNumber}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
      <Button className="default-btn" htmlType="submit">
              Submit
            </Button>
      </Form.Item>
    </Form>
  );
};

export default NewAssistantUser;
