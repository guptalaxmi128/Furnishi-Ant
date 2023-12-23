import React, { useState } from "react";
import { Table, Input, Button, Checkbox, Form, Row, Col } from "antd";

const Panel = (props) => {
  const { panels } = props;
  const [panelsTable, setPanelsTable] = useState(panels || []);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission
    console.log("Received values:", values);
  };

  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
      align: "center",
    },
    {
      title: "Panel Code",
      dataIndex: "panelCode",
      key: "panelCode",
      align: "center",
    },
    {
      title: "Panel",
      dataIndex: "panel",
      key: "panel",
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
              name="panel"
              label="Panel"
              rules={[{ required: true, message: "Please enter panel!" }]}
            >
              <Input placeholder="Panel" />
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
      {panelsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={panelsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Panel;
