import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Switch,
  Button,
  Row,
  Col,
} from "antd";

const { Option } = Select;

const NewEnquiry = (props) => {
  const {
    cordinators,
    products = [],
    statusActions = [],
    statuses = [],
    carcasses = [],
    shutters = [],
    enquiryCosting,
  } = props;
  const [form] = Form.useForm();
  const [enquiryType, setEnquiryType] = useState("");
  const [amc, setAmc] = useState("");

  const getEnquiryType = () => {
    if (enquiryType === "installationEnquiry") {
      return (
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item label="Area (Sqft)" name="area"    rules={[{ required: true, message: "Please enter area!" }]}>
              <Input
                disabled={enquiryType === "surveyEnquiry"}
                type="number"
                // value={enquiry.area}
                // onChange={handleChange}
                placeholder="Area (Sqft)"
              />
            </Form.Item>
          </Col>
        </Row>
      );
    }

    if (enquiryType === "surveyEnquiry" || enquiryType === "complaintEnquiry") {
      return (
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Product"
              name="product"
              rules={[{ required: true, message: "Please select product!" }]}
            >
              <Select
              placeholder="Product"
              // value={enquiry.product}
              // onChange={handleProductChange}
              >
                {products.map((product) => (
                  <Option key={product.name} value={product.name}>
                    {product.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      );
    }

    return null;
  };

  const handleChange = (value) => {
    console.log(value);
    form.setFieldsValue({ enquiryType: value });
    setEnquiryType(value);
  };

  const handleAMC = (value) => {
    console.log(value);
    form.setFieldsValue({ amc: value });
    setAmc(value);
  };

  const onFinish = (values) => {
    console.log("received values");
  };
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
          <Form.Item label="Target Date" name="targetDate" rules={[{ required: true, message: "Please select target date!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="sitePincode"
            label="Site Pincode"
            rules={[{ required: true, message: "Please enter site pincode!" }]}
          >
            <Input placeholder="Site Pin Code" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select status!" }]}
          >
            <Select placeholder="Status">
              {statuses.map((status) => (
                <Option key={status.status} value={status.status}>
                  {status.status}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Carcass"
            name="carcass"
            rules={[{ required: true, message: "Please select carcass!" }]}
          >
            <Select placeholder="Carcass">
              {carcasses.map((carcass) => (
                <Option key={carcass.carcass} value={carcass.carcass}>
                  {carcass.carcass}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Shutter"
            name="shutter"
            rules={[{ required: true, message: "Please select shutter!" }]}
          >
            <Select placeholder="Shutter">
              {shutters.map((shutter) => (
                <Option key={shutter.shutter} value={shutter.shutter}>
                  {shutter.shutter}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Dispatch"
            name="dispatch"
            rules={[{ required: true, message: "Please select dispatch!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Work Start Time"
            name="workStartTime"
            rules={[
              { required: true, message: "Please select work start time!" },
            ]}
          >
            <TimePicker
              style={{ width: "100%" }}
              //   value={enquiry.workStartTime}
              //   onChange={(newValue) => {
              //     setEnquiry({
              //       ...enquiry,
              //       workStartTime: newValue,
              //     });
              //   }}
            />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Work End Time"
            name="workEndTime"
            rules={[
              { required: true, message: "Please select work end time!" },
            ]}
          >
            <TimePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Estimate"
            name="estimate"
            rules={[{ required: true, message: "Please enter estimate!" }]}
          >
            <Input placeholder="Estimate" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Action"
            name="action"
            rules={[{ required: true, message: "Please select action!" }]}
          >
            <Select placeholder="Action">
              {statusActions.map((status) => (
                <Option key={status.statusAction} value={status.statusAction}>
                  {status.statusAction}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Deep Clean"
            name="deepClean"
            rules={[{ required: true, message: "Please select deep clean!" }]}
          >
            <Select placeholder="Deep Clean">
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Live Streaming"
            name="liveStreaming"
            rules={[
              { required: true, message: "Please select live streaming!" },
            ]}
          >
            <Select placeholder="Live Streaming">
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Installation Recording"
            name="installationRecording"
            rules={[
              {
                required: true,
                message: "Please select installation recording!",
              },
            ]}
          >
            <Select placeholder="Installation Recording">
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="AMC"
            name="amc"
            rules={[{ required: true, message: "Please select amc!" }]}
          >
            <Select placeholder="AMC" onChange={handleAMC} value={amc}>
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Enquiry Type"
            name="enquiryType"
            rules={[{ required: true, message: "Please select enquiry type!" }]}
          >
            <Select
              placeholder="Enquiry Type"
              value={enquiryType}
              onChange={handleChange}
            >
              <Option value="installationEnquiry">Installation Enquiry</Option>
              <Option value="surveyEnquiry">Survey Enquiry</Option>
              <Option value="complaintEnquiry">Complaint Enquiry</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          {getEnquiryType()}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          {amc === "Yes" && (
            <Col lg={12} sm={24} xs={24} md={12}>
              <Form.Item
                label="AMC Data"
                name="amcData"
                rules={[{ required: true, message: "Please enter amc data!" }]}
              >
                <Input type="text" placeholder="AMC Data" />
              </Form.Item>
            </Col>
          )}
        </Col>
      </Row>

      <Form.Item>
      <Button className="default-btn" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewEnquiry;
