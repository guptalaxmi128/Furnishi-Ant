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
import { useDispatch } from "react-redux";
import { addOrder } from "../../../actions/order/order";

const { Option } = Select;

const NewOrder = (props) => {
  const { cordinator, product, status, location } = props;
  const dispatch = useDispatch();
  const [targetStartDate, setTargetStartDate] = useState(null);
  const [targetEndDate, setTargetEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [products, setProducts] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [locations, setLocation] = useState([]);
  const [cordinators, setCordinators] = useState([]);
  const [image, setImage] = useState(null)
  const [form] = Form.useForm();

  useEffect(() => {
    if (status && product && location && cordinator) {
      setProducts(product.data);
      setStatusData(status.data);
      setLocation(location.data);
      setCordinators(cordinator.data);
    }
  }, [status, product, location, cordinator]);



  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
    const fileName = event.target.files[0];
    setImage(fileName);
   }
  }

  // const formDataToObject = (formData) => {
  //   const object = {};
  //   formData.forEach((value, key) => {
  //     object[key] = value;
  //   });
  //   return object;
  // };
  const onFinish = async (values) => {
    try {
      // console.log("received values", values.attachment);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("mobileNumber", values.mobileNumber);
      formData.append("address", values.address);
      formData.append("locationId", values.locationId);
      formData.append("customerCordinatorId", values.customerCordinatorId);
      formData.append("sourceCordinatorId", values.sourceCordinatorId);
      formData.append("factoryCordinatorId", values.factoryCordinatorId);
      formData.append("productId", values.productId);
      formData.append("saleValue", values.saleValue);
      formData.append("materialValue", values.materialValue);
      formData.append("faceArea", values.faceArea);
      formData.append("targetStartDate", targetStartDate);
      formData.append("targetEndDate", targetEndDate);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("totalService", values.totalService);
      formData.append("serviceDone", values.serviceDone);
      formData.append("servicePending", values.servicePending);
      formData.append("serviceCalender", values.serviceCalendar);
      formData.append("estimatedCost", values.estimatedCost);
      formData.append("actualCost", values.actualCost);
      formData.append("expenseTillDate", values.expenseTillDate);
      formData.append("statusId", values.statusId);
      formData.append(
        "estimatedQuoteAfterDiscount",
        values.estimatedQuoteAfterDiscount
      );
      formData.append("attachment", image);
      // const formDataObject = formDataToObject(formData);

      // console.log("Form Data:", formDataObject);
      const response = await dispatch(addOrder(formData));

      if (response.success) {
        message.success(response.message);
        form.resetFields();
        setTargetStartDate(null);
        setTargetEndDate(null);
        setStartDate(null);
        setEndDate(null);
        setImage(null);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.error(" My oder Error:", error);
      message.error(error.response?.data?.message || "An error occured");
    }
  };

  // console.log(statusData)

  // const validateContactNumber = (_, value) => {
  //   const regex = /^\d{10}$/;
  //   if (!value || regex.test(value)) {
  //     return Promise.resolve();
  //   }
  //   return Promise.reject("Please enter a valid 10-digit contact number!");
  // };

  // console.log(cordinators);
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
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[{ required: true, message: "Please enter mobile number!" }]}
          >
            <Input placeholder="Mobile Number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter address!" }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
        </Col>
        {/* <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Pincode" name="pincode" rules={[{ required: true, message: "Please enter pin code!" }]}>
            <Input placeholder="Pincode" />
          </Form.Item>
        </Col> */}
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Location"
            name="locationId"
            rules={[{ required: true, message: "Please select location!" }]}
          >
            <Select placeholder="Location">
              {locations?.map((location, index) => (
                <Option key={index} value={location.id}>
                  {location.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      {/* <Row gutter={16}>
       
      </Row> */}

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Customer Cordinator"
            name="customerCordinatorId"
            rules={[
              { required: true, message: "Please select customer cordinator!" },
            ]}
          >
            <Select placeholder="Customer Cordinator">
              {cordinators
                ?.filter(
                  (cordinator) =>
                    cordinator.cordinatorType.cordinatorType === "Customer Cordinator"
                )
                .map((cordinator, index) => (
                  <Option key={index} value={cordinator.cordinatorTypeId}>
                    {cordinator.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>

        {/* <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Customer Cordinator Number"
            name="customerCordinatorNumber"
            rules={[
              {
                required: true,
                message: "Please enter customer cordinator number!",
              },
              { validator: validateContactNumber },
            ]}
          >
            <Input />
          </Form.Item>
        </Col> */}
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Source Cordinator"
            name="sourceCordinatorId"
            rules={[
              { required: true, message: "Please select source cordinator!" },
            ]}
          >
            <Select placeholder="Source Cordinator">
              {cordinators
                ?.filter(
                  (cordinator) =>
                    cordinator.cordinatorType.cordinatorType === "Source Cordinator"
                )
                .map((cordinator, index) => (
                  <Option key={index} value={cordinator.cordinatorTypeId}>
                    {cordinator.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      {/* <Row gutter={16}>
       
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Source Cordinator Number"
            name="sourceCordinatorNumber"
            rules={[
              {
                required: true,
                message: "Please enter source cordinator number!",
              },
              { validator: validateContactNumber },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row> */}
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Factory Cordinator"
            name="factoryCordinatorId"
            rules={[
              { required: true, message: "Please select factory cordinator!" },
            ]}
          >
            <Select placeholder="Factory Cordinator">
              {cordinators
                ?.filter(
                  (cordinator) =>
                    cordinator.cordinatorType.cordinatorType === "Factory Cordinator"
                )
                .map((cordinator, index) => (
                  <Option key={index} value={cordinator.cordinatorTypeId}>
                    {cordinator.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
        {/* 
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Factory Cordinator Number"
            name="factoryCordinatorNumber"
            rules={[
              {
                required: true,
                message: "Please enter factory cordinator number!",
              },
              { validator: validateContactNumber },
            ]}
          >
            <Input />
          </Form.Item>
        </Col> */}
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Product"
            name="productId"
            rules={[{ required: true, message: "Please select product!" }]}
          >
            <Select placeholder="Product">
              {products?.map((product, index) => (
                <Option key={index} value={product.id}>
                  {product.product}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        {/* <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Product Id" name="productId" rules={[{ required: true, message: "Please enter product Id!" }]}>
            <Input placeholder="Product Id" />
          </Form.Item>
        </Col> */}
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Sale Value"
            name="saleValue"
            rules={[{ required: true, message: "Please enter sale value!" }]}
          >
            <Input placeholder="Sale Value" type="number" />
          </Form.Item>
        </Col>
      </Row>
      {/* <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Product Code" name="productCode" rules={[{ required: true, message: "Please enter product code!" }]}>
            <Input placeholder="Product Code" />
          </Form.Item>
        </Col>
      
      </Row> */}

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Material Value"
            name="materialValue"
            rules={[
              { required: true, message: "Please enter material value!" },
            ]}
          >
            <Input placeholder="Material Value" type="number" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Face Area"
            name="faceArea"
            rules={[{ required: true, message: "Please enter face area!" }]}
          >
            <Input placeholder="Face Area" type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Target Start Date"
            name="targetStartDate"
            rules={[
              { required: true, message: "Please select target start date!" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setTargetStartDate(dateString);
              }}
              format="MM/DD/YYYY"
            />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Target End Date"
            name="targetEndDate"
            rules={[
              { required: true, message: "Please select target end date!" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setTargetEndDate(dateString);
              }}
              format="MM/DD/YYYY"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Start Date"
            name="startDate"
            rules={[{ required: true, message: "Please select start date!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setStartDate(dateString);
              }}
              format="MM/DD/YYYY"
            />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="End Date"
            name="endDate"
            rules={[{ required: true, message: "Please select end date!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setEndDate(dateString);
              }}
              format="MM/DD/YYYY"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Total Service"
            name="totalService"
            rules={[
              { required: true, message: "Please enter total services!" },
            ]}
          >
            <Input placeholder="Total Services" type="number" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Service Done" name="serviceDone">
            <Input placeholder="Service Done" type="number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Service Pending" name="servicePending">
            <Input placeholder="Service Pending" type="number" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Service Calendar"
            name="serviceCalendar"
            rules={[
              { required: true, message: "Please enter service calendar!" },
            ]}
          >
            <Input placeholder="Service Calendar" type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Estimated Cost"
            name="estimatedCost"
            rules={[
              { required: true, message: "Please enter estimated cost!" },
            ]}
          >
            <Input placeholder="Estimated Cost" type="number" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Actual Cost"
            name="actualCost"
            rules={[{ required: true, message: "Please enter actual cost!" }]}
          >
            <Input placeholder="Actual Cost" type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Attachment"
            name="attachment"
            rules={[{ required: true, message: "Please enter attachment!" }]}
          >
        <Input type="file" onChange={onImageChange} className="filetype" />
      
      
          </Form.Item>
        </Col>
        {/* <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Transaction History" name="transactionHistory" rules={[{ required: true, message: "Please enter transaction history!" }]}>
            <Input placeholder="Transaction History" />
          </Form.Item>
        </Col> */}
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Expense Till Date"
            name="expenseTillDate"
            rules={[
              { required: true, message: "Please enter expense till date!" },
            ]}
          >
            <Input placeholder="Expense Till Date" type="number" />
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
            label="Estimated Quote after Discount"
            name="estimatedQuoteAfterDiscount"
            rules={[
              {
                required: true,
                message: "Please enter estimated quote after discount!",
              },
            ]}
          >
            <Input placeholder="Estimated Quote after Discount" type="number" />
          </Form.Item>
        </Col>
      </Row>

      {/* <Row gutter={16}>
       
      </Row> */}

      <Form.Item>
        <Button className="default-btn" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewOrder;
