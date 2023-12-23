import React, { useState, useEffect } from "react";
import { Table, Input, Button, Row, Col, Form, message } from "antd";
import { addProduct } from "../../../actions/master/product";
import { useDispatch } from "react-redux";

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
];

const Product = (props) => {
  const dispatch = useDispatch();
  const { product } = props;

  const [productTable, setProductTable] = useState([]);

  const [form] = Form.useForm();



  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = dispatch(addProduct(values));

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
    if (product) {
      setProductTable(product.data);
    }
  }, [product]);

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
