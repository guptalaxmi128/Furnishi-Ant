import React, { useState } from "react";
import { Table, Input, Button,Form, Row, Col,message} from "antd";
import { addSnagCost } from "../../../actions/master/snagCost";
import { useDispatch } from "react-redux";

const SnagCost = (props) => {
  const dispatch=useDispatch();
  const { snagCosts } = props;
  const [snagCostsTable, setSnagCostsTable] = useState(snagCosts || []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addSnagCost(values));

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
      title: "Snag Cost Code",
      dataIndex: "costCode",
      key: "costCode",
      align: "center",
    },
    {
      title: "Cost",
      key: "cost",
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
            name="cost"
            label="Cost"
            rules={[{ required: true, message: "Please enter cost!" }]}
          >
            <Input placeholder="Cost" />
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

      {snagCostsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={snagCostsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </Form>
  );
};

export default SnagCost;
