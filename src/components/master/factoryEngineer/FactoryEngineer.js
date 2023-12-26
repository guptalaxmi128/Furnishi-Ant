import React, { useState,useEffect } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { addFactoryEngineer } from "../../../actions/master/factoryEngineer";

const FactoryEngineer = (props) => {
  const dispatch = useDispatch();
  const { factoryEngineer } = props;
  const [factoryEngineersTable, setFactoryEngineersTable] = useState([]);

  const [form] = Form.useForm();

  useEffect(()=>{
    if(factoryEngineer)
setFactoryEngineersTable(factoryEngineer.data)
  },[factoryEngineer])

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addFactoryEngineer(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error.response?.data?.message  || "An error occurred");
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
      title: "Factory Engineer",
      dataIndex: "factoryEngineer",
      key: "factoryEngineer",
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
              name="factoryEngineer"
              label="Factory Engineer"
              rules={[
                { required: true, message: "Please enter factory engineer!" },
              ]}
            >
              <Input placeholder="Factory Engineer" />
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
      {factoryEngineersTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={factoryEngineersTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default FactoryEngineer;
