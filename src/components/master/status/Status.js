import React, { useState } from "react";
import { Table, Input, Button, Form, Row, Col, message } from "antd";
import { useDispatch } from "react-redux";
import { addStatus } from "../../../actions/master/status";

const Status = (props) => {
  const dispatch=useDispatch();
  const { status } = props;
  const [statusTable, setStatusTable] = useState(status || []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addStatus(values));

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

  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
      align: "center",
    },
    {
      title: "Status Code",
      dataIndex: "statusCode",
      key: "statusCode",
      align: "center",
    },
    {
      title: "Status",
      key: "status",
      align: "center",
    },
  ];

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
              name="status"
              label="Status"
              rules={[{ required: true, message: "Please enter status!" }]}
            >
              <Input placeholder="Status" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item>
            <Button className="default-btn" htmlType="submit">
              Submit
            </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {statusTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={statusTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Status;
