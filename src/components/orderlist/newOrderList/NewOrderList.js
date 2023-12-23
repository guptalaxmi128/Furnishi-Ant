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

const NewOrderList = (props) => {
  const {
    cordinators = [],
    products = [],
    statuses = [],
    carcasses = [],
    shutters = [],
    planners = [],
    designers = [],
    salesPersons = [],
    siteSurveyors = [],
    sources = [],
    factoryEngineers = [],
  } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("received values");
  };

  const validateContactNumber = (_, value) => {
    const regex = /^\d{10}$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid 10-digit contact number!");
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
          <Form.Item label="Received Date" name="receivedDate" rules={[{ required: true, message: "Please select received date!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Target Date" name="targetDate" rules={[{ required: true, message: "Please select target date!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Customer Name" name="customerName" rules={[{ required: true, message: "Please enter customer name!" }]}>
            <Input placeholder="Customer Name" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Customer Number" name="customerNumber"  rules={[
                { required: true, message: "Please enter customer number!" },
                { validator: validateContactNumber },
              ]} >
            <Input placeholder="Customer Number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Site Address" name="siteAddress" rules={[{ required: true, message: "Please enter site address!" }]} >
            <Input placeholder="Site Address" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Site Pincode" name="sitePincode" rules={[{ required: true, message: "Please enter site pincode!" }]}>
            <Input placeholder="Site Pincode" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Site Google Location" name="siteGoogleLocation" rules={[{ required: true, message: "Please enter site google location!" }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Source" name="source" rules={[{ required: true, message: "Please select source!" }]}>
            <Select placeholder="Source">
              {sources.map((source) => (
                <Option key={source.source} value={source.source}>
                  {source.source}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Source Cordinator" name="sourceCordinator" rules={[{ required: true, message: "Please select source cordinator!" }]}>
            <Select placeholder="Source Cordinator">
              {cordinators
                .filter((cordinator) => cordinator.cordinatorType === "Source")
                .map((cordinator, index) => (
                  <Option key={index} value={cordinator.cordinatorName}>
                    {cordinator.cordinatorName}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>
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
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Customer Cordinator" name="customerCordinator" rules={[{ required: true, message: "Please enter customer cordinator!" }]}>
            <Input placeholder="Customer Cordinator" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
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
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Factory Cordinator" name="factoryCordinator" rules={[{ required: true, message: "Please select factory cordinator!" }]}>
            <Select placeholder="Factory Cordinator">
              {cordinators
                .filter((cordinator) => cordinator.cordinatorType === "Factory")
                .map((cordinator, index) => (
                  <Option key={index} value={cordinator.cordinatorName}>
                    {cordinator.cordinatorName}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        </Col>

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
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Product" name="product" rules={[{ required: true, message: "Please select product!" }]}>
            <Select placeholder="Product">
              {products.map((product, index) => (
                <Option key={index} value={product.name}>
                  {product.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Location" name="location" rules={[{ required: true, message: "Please enter location!" }]}>
            <Input placeholder="Location" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="No Of Services" name="noOfServices" rules={[{ required: true, message: "Please enter number of services!" }]}>
            <Input placeholder="No Of Services"/>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Area (Sqft)" name="area" rules={[{ required: true, message: "Please enter area!" }]}>
            <Input placeholder="Area" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Order Value" name="orderValue" rules={[{ required: true, message: "Please enter order value!" }]}>
            <Input placeholder="Order Value" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Payment Received" name="paymentReceived" rules={[{ required: true, message: "Please enter payment received!" }]}>
            <Input placeholder="Payment Received" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Status" name="status" rules={[{ required: true, message: "Please select status!" }]}>
            <Select placeholder="Status">
              {statuses.map((status, index) => (
                <Option key={index} value={status.status}>
                  {status.status}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Carcass" name="carcass" rules={[{ required: true, message: "Please select carcass!" }]}>
            <Select placeholder="Carcass">
              {carcasses.map((carcass, index) => (
                <Option key={index} value={carcass.carcass}>
                  {carcass.carcass}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Shutter" name="shutter" rules={[{ required: true, message: "Please select shutter!" }]}>
            <Select placeholder="Shutter">
              {shutters.map((shutter, index) => (
                <Option key={index} value={shutter.shutter}>
                  {shutter.shutter}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Designer" name="designer" rules={[{ required: true, message: "Please select designer!" }]}>
            <Select placeholder="Designer">
              {designers.map((designer, index) => (
                <Option key={index} value={designer.designer}>
                  {designer.designer}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Final Site Surveyor" name="finalSiteSurveyor" rules={[{ required: true, message: "Please select final site surveyor!" }]}>
            <Select placeholder="Final Site Surveyor">
              {siteSurveyors.map((siteSurveyor, index) => (
                <Option key={index} value={siteSurveyor.finalSiteSurveyor}>
                  {siteSurveyor.finalSiteSurveyor}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Sales Person" name="salesPerson" rules={[{ required: true, message: "Please select sales person!" }]}>
            <Select placeholder="Sales Person">
              {salesPersons.map((salesPerson, index) => (
                <Option key={index} value={salesPerson.salesPerson}>
                  {salesPerson.salesPerson}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Factory Engineer" name="factoryEngineer" rules={[{ required: true, message: "Please select factory engineer!" }]}>
            <Select placeholder="Factory Engineer">
              {factoryEngineers.map((factoryEngineer, index) => (
                <Option key={index} value={factoryEngineer.factoryEngineer}>
                  {factoryEngineer.factoryEngineer}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Work Start Time" name="workStartTime" rules={[{ required: true, message: "Please select work start time!" }]}>
            <TimePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Work End Time" name="workEndTime" rules={[{ required: true, message: "Please select work end time!" }]}>
            <TimePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Indent Number" name="indentNumber" rules={[{ required: true, message: "Please enter indent number!" }]}>
            <Input placeholder="Indent Number" />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Indent Release" name="indentRelease" rules={[{ required: true, message: "Please select indent release!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Design Clearance Date" name="designClearance" rules={[{ required: true, message: "Please select design clearance!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Account Clearance" name="accountClearance" rules={[{ required: true, message: "Please select account clearance!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Shop Documents" name="shopDocuments" rules={[{ required: true, message: "Please select shop documents!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Stock Check" name="stockCheck" rules={[{ required: true, message: "Please select stock check!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="PO Prepare" name="poPrepare" rules={[{ required: true, message: "Please select poprepare!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="PO Approval" name="poApproval" rules={[{ required: true, message: "Please select poapproval!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="PO Release" name="poRelease" rules={[{ required: true, message: "Please select porelease!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Job Work Done" name="jobWorkDone" rules={[{ required: true, message: "Please select job work done!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Raw Material Available" name="rawMaterialAvailable" rules={[{ required: true, message: "Please select raw material available!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Other Material Available"
            name="otherMaterialAvailable"
            rules={[{ required: true, message: "Please select other material available!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Paint Material Production"
            name="paintMaterialProduction"
            rules={[{ required: true, message: "Please enter paint material production!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Other Material Production"
            name="otherMaterialProduction"
            rules={[{ required: true, message: "Please enter other material production!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Panel Production" name="panelProduction"  rules={[{ required: true, message: "Please select pnael production!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Assembly" name="assembly"  rules={[{ required: true, message: "Please select assembly!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Cleaning" name="cleaning" rules={[{ required: true, message: "Please select cleaning!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Packing" name="packing" rules={[{ required: true, message: "Please select packing!" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item label="Dispatch" name="dispatch" rules={[{ required: true, message: "Please select dispatch!" }]}>
            <DatePicker style={{ width: "100%" }} />
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

export default NewOrderList;
