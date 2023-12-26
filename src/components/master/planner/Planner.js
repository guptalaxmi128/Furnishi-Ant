import React, { useState,useEffect } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { addPlanner} from "../../../actions/master/planner";
import { useDispatch } from "react-redux";

const Planner = (props) => {
  const dispatch =useDispatch();
  const { planner } = props;
  const [plannersTable, setPlannersTable] = useState([]);

  const [form] = Form.useForm();

  useEffect(()=>{
    if(planner)
  setPlannersTable(planner.data)
  },[planner])

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addPlanner(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message );
      }
    } catch (error) {
      console.error('Error:', error);
      message.error(error.response?.data?.message|| 'An error occurred');
    }
  };


  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
      align: "center",
      render: (text, record, index) => index + 1,
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
