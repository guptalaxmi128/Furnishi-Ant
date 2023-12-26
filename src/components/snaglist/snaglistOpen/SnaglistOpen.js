import React from "react";
import { Table } from "antd";

const SnaglistOpen = () => {
  const data = [
    {
      key: "1",
      orderId: "ORD123",
      name: "John Doe",
      number: "1234567890",
      address: "123 Main St",
      pincode: "12345",
      locationCode: "LOC456",
      customerCordinator: "Customer Coordinator 1",
      customerCordinatorNumber: "9876543210",
      sourceCordinator: "Source Coordinator 1",
      sourceCordinatorNumber: "8765432109",
      factoryCordinator: "Factory Coordinator 1",
      factoryCordinatorNumber: "7654321098",
      product: "Product 1",
      productId: "PROD001",
      productCode: "P001",
      saleValue: "₹5000",
      materialValue: "₹2000",
      faceArea: "100 sqft",
      targetStartDate: "2023-12-01",
      targetEndDate: "2023-12-15",
      startDate: "2023-12-02",
      endDate: "2023-12-20",
      totalService: 5,
      serviceDone: 3,
      servicePending: 2,
      serviceCalendar: "Link to Calendar",
      estimatedCost: "₹4000",
      actualCost: "₹3500",
      attachment: "Link to Attachment",
      transactionHistory: "Link to History",
      expenseTillDate: "₹1000",
      status: "In Progress",
      estimatedQuoteAfterDiscount: "₹3800",
    },
  ];

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      fixed: "left",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Pincode",
      dataIndex: "pincode",
      key: "pincode",
    },
    {
      title: "Location Code",
      dataIndex: "locationCode",
      key: "locationCode",
    },
    {
      title: "Customer Cordinator",
      dataIndex: "customerCordinator",
      key: "customerCordinator",
    },
    {
      title: "Customer Cordinator Number",
      dataIndex: "customerCordinatorNumber",
      key: "customerCordinatorNumber",
    },
    {
      title: "Source Cordinator",
      dataIndex: "sourceCordinator",
      key: "sourceCordinator",
    },
    {
      title: "Source Cordinator Number",
      dataIndex: "sourceCordinatorNumber",
      key: "sourceCordinatorNumber",
    },
    {
      title: "Factory Cordinator",
      dataIndex: "factoryCordinator",
      key: "factoryCordinator",
    },
    {
      title: "Factory Cordinator Number",
      dataIndex: "factoryCordinatorNumber",
      key: "factoryCordinatorNumber",
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Product Id",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Product Code",
      dataIndex: "productCode",
      key: "productCode",
    },
    {
      title: "Sale Value",
      dataIndex: "saleValue",
      key: "saleValue",
    },
    {
      title: "Material Value",
      dataIndex: "materialValue",
      key: "materialValue",
    },
    {
      title: "Face Area",
      dataIndex: "faceArea",
      key: "faceArea",
    },
    {
      title: "Target Start Date",
      dataIndex: "targetStartDate",
      key: "targetStartDate",
    },
    {
      title: "Target End Date",
      dataIndex: "targetEndDate",
      key: "targetEndDate",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Issue",
      dataIndex: "issue",
      key: "issue",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Solution",
      dataIndex: "solution",
      key: "solution",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
    },
    {
      title: "Pic",
      dataIndex: "pic",
      key: "pic",
    },
    {
      title: "Video",
      dataIndex: "video",
      key: "video",
    },

    {
      title: "Total Service",
      dataIndex: "totalService",
      key: "totalService",
    },
    {
      title: "Service Done",
      dataIndex: "serviceDone",
      key: "serviceDone",
    },
    {
      title: "Service Pending",
      dataIndex: "servicePending",
      key: "servicePending",
    },
    {
      title: "Service Calendar",
      dataIndex: "serviceCalendar",
      key: "serviceCalendar",
    },
    {
      title: "Estimated Cost",
      dataIndex: "estimatedCost",
      key: "estimatedCost",
    },
    {
      title: "Actual Cost",
      dataIndex: "actualCost",
      key: "actualCost",
    },

    {
      title: "Transaction History",
      dataIndex: "transactionHistory",
      key: "transactionHistory",
    },
    {
      title: "Expense Till Date",
      dataIndex: "expenseTillDate",
      key: "expenseTillDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Estimated Quote after Discount",
      dataIndex: "estimatedQuoteAfterDiscount",
      key: "estimatedQuoteAfterDiscount",
    },
  ];

  return(
  <div style={{ overflowX: "auto" }}>
    <Table dataSource={data} columns={columns} />
  </div>)
};

export default SnaglistOpen;
