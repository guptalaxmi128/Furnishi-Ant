import React, { useState } from "react";
import { Table, Input, Button, message, Form, Row, Col } from "antd";
import { addFinalSiteSurveyor } from "../../../actions/master/finalSiteSurveyor";
import { useDispatch } from "react-redux";

const SiteSurveyor = (props) => {
  const dispatch=useDispatch();
  const { siteSurveyors } = props;
  const [siteSurveyorsTable, setSiteSurveyorsTable] = useState(
    siteSurveyors || []
  );

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addFinalSiteSurveyor(values));

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
      title: "Site Surveyor Code",
      dataIndex: "finalSiteSurveyorCode",
      key: "finalSiteSurveyorCode",
      align: "center",
    },
    {
      title: "Site Surveyor",
      dataIndex: "finalSiteSurveyor",
      key: "finalSiteSurveyor",
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
              name="siteSurveyor"
              label="Site Surveyor"
              rules={[
                { required: true, message: "Please enter site surveyor!" },
              ]}
            >
              <Input placeholder="Site Surveyor" />
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
      {siteSurveyorsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={siteSurveyorsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default SiteSurveyor;
