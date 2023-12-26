import React, { useState, useEffect } from "react";
import { Table, Input, Button, Form, Row, Col, message } from "antd";
import { addStatusAction } from "../../../actions/master/statusAction";
import { useDispatch } from "react-redux";

const StatusAction = (props) => {
  const dispatch = useDispatch();
  const { statusAction } = props;
  const [statusActionsTable, setStatusActionsTable] = useState([]);

  useEffect(() => {
    if (statusAction) setStatusActionsTable(statusAction.data);
  }, [statusAction]);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addStatusAction(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error.response?.data?.message || "An error occurred");
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
      title: "Status Action",
      dataIndex: "statusAction",
      key: "statusAction",
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
            name="statusAction"
            label="Status/Action"
            rules={[{ required: true, message: "Please enter status/action!" }]}
          >
            <Input placeholder="Status/Action" />
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

      {statusActionsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={statusActionsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </Form>
  );
};

export default StatusAction;
