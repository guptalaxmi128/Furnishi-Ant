import React, { useState, useEffect } from "react";
import { Table, Input, Button, Row, Col, Form, message,Select } from "antd";
import { addProduct } from "../../../actions/master/product";
import { useDispatch } from "react-redux";

const { Option } = Select;

const columns = [
  {
    title: "SNo",
    dataIndex: "sno",
    key: "sno",
    align: "center",
    render: (text, record, index) => index + 1,
  },

  {
    title: "Product Name",
    dataIndex: "product",
    key: "product",
    align: "center",
  },
  {
    title: "Company Name",
    dataIndex: ["factory", "companyName"],
    key: "companyName",
    align: "center",
  },
];

const Product = (props) => {
  const dispatch = useDispatch();
  const { product, factory } = props;

  const [productTable, setProductTable] = useState([]);
  const [factories, setFactories] = useState([]);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addProduct(values));
       console.log(res)
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

  useEffect(() => {
    if (product) {
      setProductTable(product.data);
    }
  }, [product]);

  useEffect(() => {
    if (factory) {
      setFactories(factory.data);
    }
  }, [factory]);

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
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: "Please enter product name" }]}
          >
            <Input placeholder="Product Name" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="factoryId"
              label="Factory"
              rules={[{ required: true, message: "Please select factory!" }]}
            >
              <Select placeholder="Select Factory" >
                {factories?.map((factory) => (
                  <Option key={factory.id} value={factory.id}>
                    {factory.companyName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item>
            <Button className="default-btn" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Col>
      </Row>

      {productTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={productTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </Form>
  );
};

export default Product;
