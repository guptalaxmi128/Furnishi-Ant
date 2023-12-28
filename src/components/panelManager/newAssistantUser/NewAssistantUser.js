import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Row,
  Col,
  message,
  Spin,
} from "antd";
import { useDispatch } from "react-redux";
import { addAssistantUser } from "../../../actions/panelManager/assistantUser";

const { Option } = Select;

const NewAssistantUser = (props) => {
  const dispatch = useDispatch();
  const { role, orderlists = [] } = props;
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (role && role.data) setRoles(role.data);
  }, [role]);

  const onFinish = async (values) => {
    try {
      const defaultControls = {
        receiveDate: values.receiveDate,
        targetDate: values.targetDate,
        customerName: values.customerName,
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
      };

      const filteredControls = Object.fromEntries(
        Object.entries(defaultControls).filter(([key, value]) => value === true)
      );
      const selectedValues = {
        defaultRoleManagerId: values.role,
        name: values.name,
        emailId: values.email,
        mobileNumber: values.mobileNumber,
        panelControls: filteredControls,
      };
      console.log("Selected values:", selectedValues);
      const res = await dispatch(addAssistantUser(selectedValues));
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
  const validateContactNumber = (_, value) => {
    const regex = /^\d{10}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit contact number!");
  };

  const onRoleChange = async (value) => {
    setLoading(true);
    const selectedRole = roles.find((r) => r.id === value);
    const defaultPanelControl = selectedRole?.defaultPanelControl || {};
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const currentRoleValue = form.getFieldValue("role");
    if (currentRoleValue === value) {
      form.setFieldsValue(defaultPanelControl);
      setLoading(false);
    }
  };

  const renderCheckboxes = () => {
    const selectedRoleId = form.getFieldValue("role");
    // console.log("Selected Role ID:", selectedRoleId);

    const selectedRole = roles.find((r) => r.id === selectedRoleId);
    // console.log("Selected Role:", selectedRole);

    const defaultPanelControl = selectedRole?.defaultPanelControl || {};

    return Object.entries(defaultPanelControl)
      .filter(([key]) => !["id", "createdAt", "updatedAt"].includes(key))
      .map(([key, value]) => (
        <Col lg={12} sm={24} xs={24} md={12} key={key}>
          <Form.Item name={key} valuePropName="checked" initialValue={value}>
            <Checkbox checked={value === "true"}> &nbsp; {key}</Checkbox>
          </Form.Item>
        </Col>
      ));
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
            rules={[{ required: true, message: "Please select role!" }]}
          >
            <Select placeholder="Role" onChange={onRoleChange}>
              {roles?.map((role, index) => (
                <Option key={index} value={role.id}>
                  {role.role}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              { required: true, message: "Please enter mobile number!" },
              { validator: validateContactNumber },
            ]}
          >
            <Input placeholder="Mobile Number" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "Please enter a valid email address",
              },
              {
                required: true,
                message: "Email is required",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </Col>
      </Row>

      {/* <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Order Number"
            name="orderNumber"
            rules={[{ required: true, message: "Please enter order number!" }]}
          >
            <Select placeholder="Order Number">
              {orderlists.map((orderlist, index) => (
                <Option key={index} value={orderlist.orderNumber}>
                  {orderlist.orderNumber}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row> */}
      <Row gutter={16}>
        <Col span={24}>
          {/* <div className="loading-wrapper"> */}
          <div
            style={{
              display:'flex',
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
            }}
          >
            <Spin tip="Loading..." spinning={loading}>
              <Row gutter={16}>{renderCheckboxes()}</Row>
            </Spin>
          </div>
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

export default NewAssistantUser;
