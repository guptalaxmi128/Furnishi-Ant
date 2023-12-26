import React, { useState ,useEffect} from "react";
import { Table, Input, Button, Form, Row, Col,message } from "antd";
import { addCarcass } from "../../../actions/master/carcass";
import { useDispatch } from "react-redux";

const Carcass = (props) => {
  const dispatch=useDispatch();
  const { carcass } = props;
  const [carcassTable, setCarcassTable] = useState([]);

  useEffect(() => {
    if(carcass)
  setCarcassTable(carcass.data)
  }, [carcass])

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(addCarcass(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error('Error:', error);
      message.error(error.response?.data?.message || 'An error occurred');
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
      title: "Carcass",
      dataIndex:'carcass',
      key: "carcass",
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
              name="carcass"
              label="Carcass"
              rules={[{ required: true, message: "Please enter carcass!" }]}
            >
              <Input placeholder="Carcass"/>
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
      {carcassTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={carcassTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default Carcass;
