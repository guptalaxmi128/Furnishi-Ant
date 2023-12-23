import React, { useState } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { addPlanner} from "../../../actions/master/planner";
import { useDispatch } from "react-redux";

const Planner = (props) => {
  const dispatch =useDispatch();
  const { planners } = props;
  const [plannersTable, setPlannersTable] = useState(planners || []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addPlanner(values));

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
      title: "Planner Code",
      dataIndex: "plannerCode",
      key: "plannerCode",
      align: "center",
    },
    {
      title: "Planner",
      dataIndex: "planner",
      key: "planner",
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
              name="planner"
              label="Planner"
              rules={[{ required: true, message: "Please enter planner!" }]}
            >
              <Input placeholder="Planner" />
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
      {plannersTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={plannersTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Planner;
