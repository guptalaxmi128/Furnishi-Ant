import React from "react";
import { Form, Input, Button, Row, Col, Checkbox, message } from "antd";
import { useDispatch } from "react-redux";
import { addRoleAccess} from "../../../actions/roleAccess/roleAccess";

const CreateNewRole = () => {
  const dispatch=useDispatch();
  const [form] = Form.useForm();

 const onFinish = async (values) => {
    try {

   const defaultControls={
      receiveDate:values.receiveDate,
      targetDate:values.targetDate,
      customerName:values.customerName,
    customerNumber: values.customerNumber,
    siteAddress: values.siteAddress,
    sitePincode: values.sitePincode,
    siteGoogleLocation: values.siteGoogleLocation,
    source: values.source,
    sourceCordinator: values.sourceCordinator,
    sourceCordinatorNumber: values.sourceCordinatorNumber,
    customerCordinator: values.customerCordinator,
    customerCordinatorNumber: values.customerCordinatorNumber,
    factoryCordinator: values.factoryCordinator,
    factoryCordinatorNumber: values.factoryCordinatorNumber,
    product: values.product,
    videosAndImages: values.videosAndImages,
    location: values.location,
    noOfServices: values.noOfServices,
    area: values.area,
    orderValue: values.orderValue,
    paymentReceived: values.paymentReceived,
    currentStatus: values.currentStatus,
    carcass: values.carcass,
    shutter: values.shutter,
    salesPerson: values.salesPerson,
    designer: values.designer,
    indentNumber: values.indentNumber,
    finalSiteSurveyor: values.finalSiteSurveyor,
    workStartTime: values.workStartTime,
    workEndTime: values.workEndTime,
    factoryEngineer: values.factoryEngineer,
    accountClearance: values.accountClearance,
    designClearance: values.designClearance,
    indentRelease: values.indentRelease,
    shopDocuments: values.shopDocuments,
    stockCheck: values.stockCheck,
    poPrepare: values.poPrepare,
    poApproval: values.poApproval,
    poRelease: values.poRelease,
    rawMaterialAvailable: values.rawMaterialAvailable,
    otherMaterialAvailable: values.otherMaterialAvailable,
    jobWorkDone: values.jobWorkDone,
    panelProduction: values.panelProduction,
    paintMaterialProduction: values.paintMaterialProduction,
    otherMaterialProduction: values.otherMaterialProduction,
    assembly: values.assembly,
    cleaning: values.cleaning,
    packing: values.packing,
    dispatch: values.dispatch,
    }

   const filteredControls = Object.fromEntries(
    Object.entries(defaultControls).filter(([key, value]) => value === true)
  );

  const selectedValues = {
    role: values.role,
     defaultControls: filteredControls,
  
  };
  console.log("Selected values:", selectedValues);
  const res= await dispatch(addRoleAccess(selectedValues))
  if (res.success) {
      message.success(res.message);
      form.resetFields();
    } else {
   
      message.error(res.message);
    }
  } catch (error) {
    console.error("Error submitting data:", error);
    message.error(error.response?.data?.message || "An error occured!");
  }
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
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please enter role!" }]}
          >
            <Input placeholder="Role" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
             name="receiveDate"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Received Date</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
             name="targetDate"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Target Date</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="customerName"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Customer Name</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="customerNumber"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Customer Number</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="siteAddress"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Site Address</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="sitePincode"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Site Pincode</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="siteGoogleLocation"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Site Google Location</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="source"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Source</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="sourceCordinator"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Source Cordinator</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="sourceCordinatorNumber"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Source Cordinator Number</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="customerCordinator"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Customer Cordinator</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="customerCordinatorNumber"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Customer Cordinator Number</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="factoryCordinator"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Factory Cordinator</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="factoryCordinatorNumber"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Factory Cordinator Number</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="product"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Product</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="videosAndImages"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Videos And Images</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="location"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Location</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="noOfServices"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>No Of Services</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="area"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Area</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="orderValue"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Order Value</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="paymentReceived"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Payment Received</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="currentStatus"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Current Status</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="factoryEngineer"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Factory Engineer</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="carcass"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Carcass</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="shutter"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Shutter</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="salesPerson"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Sales Person</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="designer"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Designer</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="indentNumber"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Indent Number</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="finalSiteSurveyor"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Final Site Surveyor</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="workStartTime"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Work Start Time</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="workEndTime"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Work End Time</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="indentRelease"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Indent Release</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="accountClearance"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Account Clearance</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="designClearance"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Design Clearance</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="shopDocuments"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Shop Documents</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="stockCheck"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Stock Check</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="poPrepare"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>PO Prepare</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="poRelease"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>PO Release</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="poApproval"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>PO Approval</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="jobWorkDone"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Job Work Done</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="rawMaterialAvailable"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Raw Material Available</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="otherMaterialAvailable"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Other Material Available</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="paintMaterialProduction"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Paint Material Production</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="otherMaterialProduction"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Other Material Production</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="panelProduction"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Panel Production</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="assembly"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Assembly</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="cleaning"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Cleaning</Checkbox>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="packing"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Packing</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            name="dispatch"
            valuePropName="checked"
            wrapperCol={{ span: 16 }}
          >
            <Checkbox>Dispatch</Checkbox>
          </Form.Item>
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

export default CreateNewRole;
