import React, { useState } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { addShutter } from "../../../actions/master/shutter";
import { useDispatch } from "react-redux";

const Shutter = (props) => {
  const dispatch=useDispatch();
  const { shutters } = props;
  const [shuttersTable, setShuttersTable] = useState(shutters || []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addShutter(values));

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
      title: "Shutter Code",
      dataIndex: "shutterCode",
      key: "shutterCode",
      align: "center",
    },
    {
      title: "Shutter",
      dataIndex: "shutter",
      key: "shutter",
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
              name="shutter"
              label="Shutter"
              rules={[{ required: true, message: "Please enter shutter!" }]}
            >
              <Input placeholder="Shutter" />
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
      {shuttersTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={shuttersTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Shutter;
