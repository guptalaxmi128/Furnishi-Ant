import React, { useState } from "react";
import { Table, message, Input, Button, Row, Col, Form } from "antd";
import { addLocation } from "../../../actions/master/location";
import { useDispatch } from "react-redux";

const Location = (props) => {
  const dispatch = useDispatch();
  const { locations } = props;
  const [locationsTable, setLocationsTable] = useState(locations || []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addLocation(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
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
      title: "Pincode",
      dataIndex: "pincode",
      key: "pincode",
      align: "center",
    },
    {
      title: "Location",
      key: "location",
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
              name="name"
              label="Location Name"
              rules={[
                { required: true, message: "Please enter location name" },
              ]}
            >
              <Input placeholder="Location Name" />
            </Form.Item>
          </Col>

          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="pincode"
              label="Location PinCode"
              rules={[
                { required: true, message: "Please enter location pincode" },
              ]}
            >
              <Input placeholder="Location Pincode" />
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
      {locationsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={locationsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Location;
