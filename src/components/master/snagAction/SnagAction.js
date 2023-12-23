import React, { useState } from "react";
import { Table, Input, Button, Form, Row, Col,message } from "antd";
import { useDispatch } from "react-redux";
import { addSnagAction } from "../../../actions/master/snagAction";


const SnagAction = (props) => {
  const dispatch=useDispatch();
  const { snagActions } = props;
  const [snagActionsTable, setSnagActionsTable] = useState(snagActions);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addSnagAction(values));

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
      title: "Action Code",
      dataIndex: "actionCode",
      key: "actionCode",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
    },
  ];

  return (
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
            name="action"
            label="Action"
            rules={[{ required: true, message: "Please enter action!" }]}
          >
            <Input placeholder="Action" />
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

      {snagActionsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={snagActionsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </Form>
  );
};

export default SnagAction;
