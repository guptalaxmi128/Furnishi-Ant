import React, { useState ,useEffect} from "react";
import {
  Table,
  Input,
  Button,
  Row,
  Col,
  Form,
  message
  //   Pagination,
} from "antd";
import { useDispatch } from "react-redux";
import { addFactory } from "../../../actions/master/factory";

const columns = [
  {
    title: "SNo",
    dataIndex: "sno",
    key: "sno",
    align: "center",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    align: "center",
  },
  {
    title: "Company Address",
    dataIndex: "companyAddress",
    key: "companyAddress",
    align: "center",
  },
  {
    title: "Contact Number",
    dataIndex: "contactNumber",
    key: "contactNumber",
    align: "center",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    align: "center",
  },
  {
    title: "GST Number",
    dataIndex: "gstNumber",
    key: "gstNumber",
    align: "center",
  
  },
  {
    title: "Manager",
    dataIndex: "manager",
    key: "manager",
    align: "center",
  },
  {
    title: "Manager Number",
    dataIndex: "managerNumber",
    key: "managerNumber",
    align: "center",
  },
  {
    title: "Manager Email Id",
    dataIndex: "managerEmailId",
    key: "managerEmailId",
    align: "center",
  },
];

const FactoryInfo = (props) => {
  const dispatch = useDispatch();
  const { factory } = props;
  const [factoryTable, setFactoryTable] = useState([]);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addFactory(values));
      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message || "An error occurred");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      message.error(
        error.response?.data?.message ||
          "An unexpected error occurred. Please try again later."
      );
    }
  };
  

  const validateContactNumber = (_, value) => {
    const regex = /^\d{10}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit contact number!");
  };

  useEffect(() => {
    if (factory) {
      setFactoryTable(factory.data);
    }
  }, [factory]);

  return (
    <div>
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
              label="Company Name"
              name="companyName"
              rules={[{ required: true, message: "Please enter Company Name" }]}
            >
              <Input type="text" placeholder="Company Name" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Company Address"
              name="companyAddress"
              rules={[
                { required: true, message: "Please enter Company Address" },
              ]}
            >
              <Input type="text" placeholder="Company Address" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                { required: true, message: "Please enter Contact Number" },
                { validator: validateContactNumber },
              ]}
            >
              <Input type="number" placeholder="Contact Number" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="Website" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="GST Number"
              name="gstNumber"
              rules={[{ required: true, message: "Please enter GST Number" }]}
            >
              <Input type="text" placeholder="GST Number" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Manager"
              name="manager"
              rules={[{ required: true, message: "Please enter Manager" }]}
            >
              <Input type="text" placeholder="Manager" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Manager Number"
              name="managerNumber"
              rules={[
                { required: true, message: "Please enter Manager Number" },
                { validator: validateContactNumber },
              ]}
            >
              <Input type="number" placeholder="Manager Number" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Manager Email Id"
              name="managerEmailId"
              rules={[
                { required: true, message: "Please enter Manager Email Id" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input type="email" placeholder="Manager Email Id" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
        <Button className="default-btn" htmlType="submit">
              Submit
            </Button>
        </Form.Item>
      </Form>
      {factoryTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={factoryTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </div>
  );
};

export default FactoryInfo;
