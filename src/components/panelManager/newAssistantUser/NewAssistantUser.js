import React, { useState, useEffect } from "react";
import { Form, Input, Select, Checkbox, Button, Row, Col } from "antd";

const { Option } = Select;

const NewAssistantUser = (props) => {
  const { role, orderlists = [] } = props;
  const [roles, setRoles] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    if (role && role.data) setRoles(role.data);
  }, [role]);

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


  const renderCheckboxes = () => {
    const selectedRoleId = form.getFieldValue("role");
    console.log("Selected Role ID:", selectedRoleId);
  
    const selectedRole = roles.find((r) => r.id === selectedRoleId);
    console.log("Selected Role:", selectedRole);
  
    const defaultPanelControl = selectedRole?.defaultPanelControl || {};
  
    return Object.entries(defaultPanelControl)
      .filter(([key]) => !["id", "createdAt", "updatedAt"].includes(key))
      .map(([key, value]) => (
        <Col lg={12} sm={24} xs={24} md={12} key={key}>
          <Form.Item name={key} valuePropName="checked" initialValue={value}>
          <Checkbox  checked={value} /> &nbsp; {key}
          </Form.Item>
        </Col>
      )); 
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
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select role!" }]}
          >
            <Select placeholder="Role" >
              {roles?.map((role, index) => (
                <Option key={index} value={role.id}>
                  {role.role}
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
      <Row gutter={16}>{renderCheckboxes()}</Row>
      <Form.Item>
        <Button className="default-btn" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewAssistantUser;
