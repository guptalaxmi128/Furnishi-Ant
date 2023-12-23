import React, { useState } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { addSnagSolution } from "../../../actions/master/snagSolution";

const SnagSolution = (props) => {
  const dispatch=useDispatch();
  const { snagSolutions } = props;
  const [snagSolutionsTable, setSnagSolutionsTable] = useState(
    snagSolutions || []
  );

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addSnagSolution(values));

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
      title: "Snag Solution Code",
      dataIndex: "solutionCode",
      key: "solutionCode",
      align: "center",
    },
    {
      title: "Solution",
      key: "solution",
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
              name="solution"
              label="Solution"
              rules={[{ required: true, message: "Please select solution!" }]}
            >
              <Input placeholder="Solution" />
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

      {snagSolutionsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={snagSolutionsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default SnagSolution;
