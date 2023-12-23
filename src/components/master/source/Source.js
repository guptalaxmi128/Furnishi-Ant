import React, { useState, useEffect } from "react";
import { Table, Input, Button, Form, Row, Col,message } from "antd";
import { useDispatch} from "react-redux";
import { addSource } from "../../../actions/master/source";

const columns = [
  {
    title: "SNo",
    dataIndex: "sno",
    key: "sno",
    align: "center",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    align: "center",
  },
  {
    title: "Firm Name",
    dataIndex: "firmName",
    key: "firmName",
    align: "center",
  },
  {
    title: "Firm Address",
    dataIndex: "firmAddress",
    key: "firmAddress",
    align: "center",
  },
  {
    title: "Email Id",
    dataIndex: "emailId",
    key: "emailId",
    align: "center",
  },
  {
    title: "Contact Numbers",
    dataIndex: "contactNumbers",
    key: "contactNumbers",
    align: "center",
    render: (text, record) => (
      <div>
        <div>{record.contactNumberOne}</div>
        <div>{record.contactNumberTwo}</div>
      </div>
    ),
  },
  {
    title: "Cordinator Name",
    dataIndex: "cordinatorName",
    key: "cordinatorName",
    align: "center",
  },
  {
    title: "Cordinator Number",
    dataIndex: "cordinatorNumber",
    key: "cordinatorNumber",
    align: "center",
  },
];

const Source = (props) => {
  const { source } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [sourcesTable, setSourcesTable] = useState([]);

  useEffect(() => {
    if (source && source.data) {
      setSourcesTable(source.data);
      setLoading(false);
    }
  }, [source]);

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addSource(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      message.error(error.response.data.message);
    }
  };

  const validateContactNumber = (_, value) => {
    const regex = /^\d{10}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit contact number!");
  };

  return (
    <>
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
              name="source"
              label="Source"
              rules={[{ required: true, message: "Please enter source!" }]}
            >
              <Input placeholder="Source" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="firmName"
              label="Firm Name"
              rules={[{ required: true, message: "Please enter firm name!" }]}
            >
              <Input placeholder="Firm Name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="firmAddress"
              label="Firm Address"
              rules={[
                { required: true, message: "Please enter firm address!" },
              ]}
            >
              <Input placeholder="Firm Address" />
            </Form.Item>
          </Col>

          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="emailId"
              label="Email Id"
              rules={[
                { required: true, message: "Please enter email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="contactNumberOne"
              label="Contact Number-1"
              rules={[
                { required: true, message: "Please enter contact number!" },
                { validator: validateContactNumber },
              ]}
            >
              <Input type="number" placeholder="Contact Number-1" />
            </Form.Item>
          </Col>

          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item name="contactNumberTwo" label="Contact Number-2"
             rules={[
                // { required: true, message: "Please enter contact number!" },
                { validator: validateContactNumber },
              ]}>
              <Input type="number" placeholder="Contact Number-2" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="cordinatorName"
              label="Cordinator Name"
              rules={[
                { required: true, message: "Please enter cordinator name!" },
              ]}
            >
              <Input placeholder="Cordinator Name" />
            </Form.Item>
          </Col>

          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="cordinatorNumber"
              label="Cordinator Number"
              rules={[
                { required: true, message: "Please enter cordinator number!" },
                { validator: validateContactNumber },
              ]}
            >
              <Input type="number" placeholder="Cordinator Number" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button className="default-btn" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>

      {sourcesTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={sourcesTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          loading={loading}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Source;
