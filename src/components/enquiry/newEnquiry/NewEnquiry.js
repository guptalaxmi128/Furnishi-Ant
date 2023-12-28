import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Row,
  Col,
  message,
} from "antd";
import { addEnquiry } from "../../../actions/enquiry/enquiry";
import { useDispatch } from "react-redux";

const { Option } = Select;

const NewEnquiry = (props) => {
  const {
    product,
    statusAction,
    status,
    carcass,
    shutter,
    // enquiryCosting,
  } = props;
  const dispatch =useDispatch();
  const [form] = Form.useForm();
  const [enquiryType, setEnquiryType] = useState("");
  const [products, setProducts] = useState([]);
  const [shutters, setShutters] = useState([]);
  const [carcasses, setCarcasses] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [statusActions, setStatusActions] = useState([]);
  const [targetDate, setTargetDate] = useState(null);
  const [workStartTime, setWorkStartTime] = useState(null);
  const [workEndTime, setWorkEndTime] = useState(null);
  const [dispatchData, setDispatchData] = useState(null);
  const [amc, setAmc] = useState(null);

  useEffect(() => {
    if (status && product && shutter && statusAction && carcass) {
      setProducts(product.data);
      setStatusData(status.data);
      setShutters(shutter.data);
      setCarcasses(carcass.data);
      setStatusActions(statusAction.data);
    }
  }, [status, product, shutter, statusAction, carcass]);

  const getEnquiryType = () => {
    if (enquiryType === "installation") {
      return (
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Area (Sqft)"
              name="installationArea"
              rules={[{ required: true, message: "Please enter area!" }]}
            >
              <Input
                disabled={enquiryType === "survey"}
                type="number"
                placeholder="Area (Sqft)"
              />
            </Form.Item>
          </Col>
        </Row>
      );
    }

    if (enquiryType === "survey" || enquiryType === "complaint") {
      return (
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              label="Product"
              name="productId"
              rules={[{ required: true, message: "Please select product!" }]}
            >
              <Select placeholder="Product">
                {products?.map((product) => (
                  <Option key={product.product} value={product.id}>
                    {product.product}
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

  const onFinish = async (values) => {
    try {
      // console.log("received values", values);
      const data = {
        targetDate: targetDate,
        sitePincode: values.sitePincode,
        statusId: values.statusId,
        carcassId: values.carcassId,
        shutterId: values.shutterId,
        dispatch: dispatchData,
        workStartTime: workStartTime,
        workEndTime: workEndTime,
        estimate: values.estimate,
        statusActionId: values.statusActionId,
        deepClean: values.deepClean === "Yes",
        liveStream: values.liveStream === "Yes",
        installationRecording: values.installationRecording === "Yes",
        amc: amc === "Yes",
        amcData: values.amcData,
        enquiryType: values.enquiryType,
        installationArea: values.installationArea,
        productId: values.productId,
      };
      console.log(data);
      const res = await dispatch(addEnquiry(data));
      if(res.success){
        message.success(res.message)
        form.resetFields();
        setTargetDate(null);
        setDispatchData(null);
        setWorkEndTime(null);
        setWorkEndTime(null);
      }else{
        message.error(res.message)
      }
    } catch (error) {
      console.error("Error adding enquiry:", error);
      message.error(error.response?.data?.message || "An error occured");
    }
  };
  // console.log(products);

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
            label="Target Date"
            name="targetDate"
            rules={[{ required: true, message: "Please select target date!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setTargetDate(dateString);
              }}
              format="YYYY-MM-DD"
            />
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
            name="statusId"
            rules={[{ required: true, message: "Please select status!" }]}
          >
            <Select placeholder="Status">
              {statusData?.map((status) => (
                <Option key={status.status} value={status.id}>
                  {status.status}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Carcass"
            name="carcassId"
            rules={[{ required: true, message: "Please select carcass!" }]}
          >
            <Select placeholder="Carcass">
              {carcasses?.map((carcass) => (
                <Option key={carcass.carcass} value={carcass.id}>
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
            name="shutterId"
            rules={[{ required: true, message: "Please select shutter!" }]}
          >
            <Select placeholder="Shutter">
              {shutters?.map((shutter) => (
                <Option key={shutter.shutter} value={shutter.id}>
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
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setDispatchData(dateString);
              }}
              format="YYYY-MM-DD"
            />
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
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setWorkStartTime(dateString);
              }}
              format="YYYY-MM-DD"
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
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setWorkEndTime(dateString);
              }}
              format="YYYY-MM-DD"
            />
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
            <Input type="number" placeholder="Estimate" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Action"
            name="statusActionId"
            rules={[{ required: true, message: "Please select action!" }]}
          >
            <Select placeholder="Action">
              {statusActions?.map((status) => (
                <Option key={status.statusAction} value={status.id}>
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
            name="liveStream"
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
              <Option value="installation">Installation Enquiry</Option>
              <Option value="survey">Survey Enquiry</Option>
              <Option value="complaint">Complaint Enquiry</Option>
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
