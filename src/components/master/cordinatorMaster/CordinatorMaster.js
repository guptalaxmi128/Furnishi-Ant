import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  Button,
  Checkbox,
  Form,
  Row,
  Col,
  Space,
  Select,
  message,
} from "antd";
import {
  addCordinator,
} from "../../../actions/master/cordinator";
import { useDispatch } from "react-redux";

const { Option } = Select;

const CordinatorMaster = (props) => {
  const dispatch = useDispatch();
  const { source, cordinatorType, cordinator } = props;
  const [cordinatorTypes, setCordinatorTypes] = useState([]);
  const [sources, setSources] = useState([]);
  const [cordinatorsTable, setCordinatorsTable] = useState([]);
  const [selected, setSelected] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    if (source && cordinatorType) {
      setSources(source.data);
      setCordinatorTypes(cordinatorType.data);
    }
  }, [source, cordinatorType]);

  useEffect(() => {
    if (cordinator) {
      setCordinatorsTable(cordinator.data);
    }
  }, [cordinator]);


  const onFinish = async (values) => {
    try {
      const data = {
        sourceId: values.source,
        cordinatorTypeId: values.cordinatorType,
        emailId: values.emailId,
        number: values.number,
        name: values.name,
      };
  
      console.log("Received values:", data);
      const res = await dispatch(addCordinator(data));
  
      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message );
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("An unexpected error occurred:", error);
      message.error( error.response?.data?.message ||"An error occurred");
    }
  };
  

  const handleSourceChange = (value, option) => {
    const selectedSourceInfo = sources.find((source) => source.id === value);
    form.setFieldsValue({
      firmName: selectedSourceInfo ? selectedSourceInfo.firmName : "",
      firmAddress: selectedSourceInfo ? selectedSourceInfo.firmAddress : "",
    });
  };



  const columns = [
    // {
    //   title: "Cordinator Code",
    //   dataIndex: "id",
    //   key: "id",
    //   align: "center",
    // },
    // {
    //   title: "Source Code",
    //   dataIndex: ["source", "id"],
    //   key: "sourceCode",
    //   align: "center",
    // },
    {
      title: "Source",
      dataIndex: ["source", "source"],
      key: "source",
      align: "center",
    },
    {
      title: "Firm Name",
      dataIndex: ["source", "firmName"],
      key: "firmName",
      align: "center",
    },
    {
      title: "Firm Address",
      dataIndex: ["source", "firmAddress"],
      key: "firmAddress",
      align: "center",
    },
    {
      title: "Cordinator Type",
      dataIndex: ["cordinatorType", "cordinatorType"],
      key: "cordinatorType",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      align: "center",
    },
    {
      title: "Email Id",
      dataIndex: "emailId",
      key: "emailId",
      align: "center",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   align: "center",
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <Checkbox
    //         checked={selected.includes(record.id)}
    //         onChange={(e) => handleCheckboxChange(e, record.id)}
    //       />
    //     </Space>
    //   ),
    // },
  ];
  

  const handleCheckboxChange = (e, id) => {
    const isChecked = e.target.checked;
    setSelected((prevSelected) =>
      isChecked
        ? [...prevSelected, id]
        : prevSelected.filter((selectedId) => selectedId !== id)
    );
  };

  const validateContactNumber = (_, value) => {
    const regex = /^\d{10}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit contact number!");
  };

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
              name="source"
              label="Source"
              rules={[{ required: true, message: "Please select source!" }]}
            >
              <Select placeholder="Source" onChange={handleSourceChange}>
                {sources?.map((source) => (
                  <Option key={source.id} value={source.id}>
                    {source.source}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item name="firmName" label="Firm Name">
              <Input disabled placeholder="Firm Name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item name="firmAddress" label="Firm Address">
              <Input disabled placeholder="Firm Address" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="cordinatorType"
              label="Cordinator Type"
              rules={[
                { required: true, message: "Please select cordinator type!" },
              ]}
            >
              <Select placeholder="Cordinator Type">
                {cordinatorTypes?.map((cordinatorType) => (
                  <Option key={cordinatorType.id} value={cordinatorType.id}>
                    {cordinatorType.cordinatorType}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="name"
              label="Cordinator Name"
              rules={[
                { required: true, message: "Please enter cordinator name!" },
              ]}
            >
              <Input placeholder="Cordinator Name" />
            </Form.Item>
          </Col>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="number"
              label="Cordinator Number"
              rules={[
                { required: true, message: "Please enter cordinator number!" },
                { validator: validateContactNumber },
              ]}
            >
              <Input type="number" placeholder="Cordinator Number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="emailId"
              label="Email Id"
              rules={[
                { required: true, message: "Please enter email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input type="email" placeholder="Email" />
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
       {cordinatorsTable?.length > 0 ? (
        <Table
          columns={columns}
          dataSource={cordinatorsTable}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
      ) : null}
    </>
  );
};

export default CordinatorMaster;
