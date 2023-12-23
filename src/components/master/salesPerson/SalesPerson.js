import React, { useState } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { addSalesPerson } from "../../../actions/master/salesPerson";
import { useDispatch } from "react-redux";

const SalesPerson = (props) => {
  const dispatch =useDispatch();
  const { salesPersons } = props;
  const [salesPersonsTable, setSalesPersonsTable] = useState(
    salesPersons || []
  );

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addSalesPerson(values));

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
      title: "Cordinator Type Code",
      dataIndex: "salesPersonCode",
      key: "salesPersonCode",
      align: "center",
    },
    {
      title: "Cordinator Type",
      dataIndex: "salesPerson",
      key: "salesPerson",
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
              name="salesPerson"
              label="Sales Person"
              rules={[
                { required: true, message: "Please enter sales person!" },
              ]}
            >
              <Input placeholder="Sales Person" />
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
      {salesPersonsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={salesPersonsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default SalesPerson;
