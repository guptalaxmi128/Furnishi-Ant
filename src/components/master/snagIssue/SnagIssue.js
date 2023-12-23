import React, { useState } from "react";
import { Table, Input, Button,Form, Row, Col,message } from "antd";
import { useDispatch } from "react-redux";
import { addSnagIssue } from "../../../actions/master/snagIssue";

const SnagIssue = (props) => {
  const dispatch=useDispatch();
  const { snagIssues } = props;
  const [snagIssuesTable, setSnagIssuesTable] = useState(snagIssues || []);

  const [form] = Form.useForm();

 
  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addSnagIssue(values));

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
      title: "Issue Code",
      dataIndex: "issueCode",
      key: "issueCode",
      align: "center",
    },
    {
      title: "Issue",
      key: "issue",
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
              name="issue"
              label="Issue"
              rules={[{ required: true, message: "Please select issue!" }]}
            >
              <Input placeholder="Issue" />
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
      {snagIssuesTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={snagIssuesTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default SnagIssue;
