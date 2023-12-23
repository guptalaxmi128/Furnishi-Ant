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

const NewSnaglist = (props) => {
  const {
    cordinators = [],
    products = [],
    statuses = [],
    actions = [],
    costs = [],
    issues = [],
    solutions = [],
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
            rules={[
              { required: true, message: "Please enter mobile number!" },
              { validator: validateContactNumber },
            ]}
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
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Pincode"
            name="pincode"
            rules={[{ required: true, message: "Please enter pincode!" }]}
          >
            <Input placeholder="Pin Code" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Location Code"
            name="locationCode"
            rules={[{ required: true, message: "Please enter location code" }]}
          >
            <Input placeholder="Location Code" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Customer Cordinator"
            name="customerCordinator"
            rules={[
              { required: true, message: "Please select customer cordinator!" },
            ]}
          >
            <Select placeholder="Customer Cordinator">
              {cordinators
                .filter(
                  (cordinator) => cordinator.cordinatorType === "Customer"
                )
                .map((cordinator, index) => (
                  <Option key={index} value={cordinator.id}>
                    {cordinator.cordinatorName}
                  </Option>
                ))}
            </Select>
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
            <Input placeholder="Number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Source Cordinator"
            name="sourceCordinator"
            rules={[
              { required: true, message: "Please select source cordinator!" },
            ]}
          >
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
            <Input placeholder="Number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Factory Cordinator"
            name="factoryCordinator"
            rules={[
              { required: true, message: "Please select factory cordinator!" },
            ]}
          >
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
            <Input placeholder="Number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true, message: "Please select product!" }]}
          >
            <Select placeholder="Product">
              {products.map((product, index) => (
                <Option key={index} value={product.name}>
                  {product.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Product Id"
            name="productId"
            rules={[{ required: true, message: "Please enter product Id!" }]}
          >
            <Input placeholder="Product Id" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Product Code"
            name="productCode"
            rules={[{ required: true, message: "Please enter product code!" }]}
          >
            <Input placeholder="Product Code" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Sale Value"
            name="saleValue"
            rules={[{ required: true, message: "Please enter sale value!" }]}
          >
            <Input placeholder="Sale Value" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Material Value"
            name="materialValue"
            rules={[
              { required: true, message: "Please enter material value!" },
            ]}
          >
            <Input placeholder="Material Value" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Face Area"
            name="faceArea"
            rules={[{ required: true, message: "Please enter face area!" }]}
          >
            <Input placeholder="Face Area" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Target Start Date"
            rules={[
              { required: true, message: "Please select target start date!" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="YYYY-MM-DD"
              onChange={(date, dateString) => {
                form.setFieldsValue({ targetStartDate: dateString });
              }}
            />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Target End Date"
            rules={[{ required: true, message: "Please enter date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Start Date"
            rules={[{ required: true, message: "Please enter date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="End Date"
            rules={[{ required: true, message: "Please enter date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Issue"
            name="issue"
            rules={[{ required: true, message: "Please select issue!" }]}
          >
            <Select placeholder="Issue">
              {issues.map((issue, index) => (
                <Option key={index} value={issue.issue}>
                  {issue.issue}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Reason"
            name="reason"
            rules={[{ required: true, message: "Please enter reason" }]}
          >
            <Input placeholder="Reason" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Solution"
            name="solution"
            rules={[{ required: true, message: "Please select solution!" }]}
          >
            <Select placeholder="Solution">
              {solutions.map((solution, index) => (
                <Option key={index} value={solution.solution}>
                  {solution.solution}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Action"
            name="action"
            rules={[{ required: true, message: "Please select action!" }]}
          >
            <Select placeholder="Action">
              {actions.map((action, index) => (
                <Option key={index} value={action.action}>
                  {action.action}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Cost"
            name="cost"
            rules={[{ required: true, message: "Please select cost!" }]}
          >
            <Select placeholder="Cost">
              {costs.map((cost, index) => (
                <Option key={index} value={cost.cost}>
                  {cost.cost}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Attachment"
            name="attachment"
            rules={[{ required: true, message: "Please enter attachment!" }]}
          >
            <Input placeholder="Attachment" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Pic"
            name="pic"
            rules={[{ required: true, message: "Please enter pic!" }]}
          >
            <Input placeholder="Pic" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Video"
            name="video"
            rules={[{ required: true, message: "Please enter video!" }]}
          >
            <Input placeholder="Video" />
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
            <Input placeholder="Total Service" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Service Done"
            name="serviceDone"
            //   rules={[{ required: true, message: "Please enter service done!" }]}
          >
            <Input placeholder="Service Done" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Service Pending"
            name="servicePending"
            //    rules={[{ required: true, message: "Please enter service pending!" }]}
          >
            <Input placeholder="Service Pending" />
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
            <Input placeholder="Service Calendar" />
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
            <Input placeholder="Estimated Cost" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Actual Cost"
            name="actualCost"
            rules={[{ required: true, message: "Please enter actual cost!" }]}
          >
            <Input placeholder="Actual Cost" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Expense Till Date"
            name="expenseTillDate"
            rules={[
              { required: true, message: "Please enter expense till date!" },
            ]}
          >
            <Input placeholder="Expense Till Date" />
          </Form.Item>
        </Col>
        <Col lg={12} sm={24} xs={24} md={12}>
          <Form.Item
            label="Transaction History"
            name="transactionHistory"
            rules={[
              { required: true, message: "Please enter transaction history!" },
            ]}
          >
            <Input placeholder="Transaction History" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
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
            <Input placeholder="Estimated Quote after Discount" />
          </Form.Item>
        </Col>
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
      </Row>

      <Form.Item>
        <Button className="default-btn" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewSnaglist;
