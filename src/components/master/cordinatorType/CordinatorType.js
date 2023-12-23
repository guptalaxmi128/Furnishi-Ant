import React, { useState, useEffect } from "react";
import { Table, Input, Button, Checkbox, Form, Row, Col, Space,message } from "antd";
import { useDispatch } from "react-redux";
import { addCordinatorType } from "../../../actions/master/cordinatorType";

const CordinatorType = (props) => {
  const { cordinatorType } = props;
  const dispatch = useDispatch();
  const [cordinatorTypesTable, setCordinatorTypesTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addCordinatorType(values));

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

  useEffect(() => {
    if (cordinatorType && cordinatorType.data) {
      setCordinatorTypesTable(cordinatorType.data);
    }
    setLoading(false);
  }, [cordinatorType]);

  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1,
      align: "center",
    },
    {
      title: "Cordinator Type",
      dataIndex: "cordinatorType",
      key: "cordinatorType",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (text, record) => (
        <Space size="middle">
          <Checkbox
          // checked={selected.includes(record.id)}
          // onChange={(e) => handleCheckboxChange(e, record.id)}
          />
        </Space>
      ),
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
            name="cordinatorType"
            label="Cordinator Type"
            rules={[
              { required: true, message: "Please enter cordinator type!" },
            ]}
          >
            <Input placeholder="Cordinator Type" />
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

      {cordinatorTypesTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={cordinatorTypesTable}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </Form>
  );
};

export default CordinatorType;
