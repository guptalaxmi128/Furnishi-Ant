import React, { useState } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { addDesigner } from "../../../actions/master/designer";
import { useDispatch } from "react-redux";

const Designer = (props) => {
  const dispatch=useDispatch();
  const { designers } = props;
  const [designersTable, setDesignersTable] = useState(designers || []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addDesigner(values));

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
      title: "Designer Code",
      dataIndex: "designerCode",
      key: "designerCode",
      align: "center",
    },
    {
      title: "Designer",
      dataIndex: "designer",
      key: "designer",
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
              name="designer"
              label="Designer"
              rules={[{ required: true, message: "Please enter designer!" }]}
            >
              <Input placeholder="Designer" />
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
      {designersTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={designersTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Designer;
