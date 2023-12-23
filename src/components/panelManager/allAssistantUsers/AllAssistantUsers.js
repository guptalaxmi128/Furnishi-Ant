import React from "react";
import { Table, Button } from "antd";

const AllAssistantUsers = () => {
  const data = [
    {
      key: "1",
      orderNumber: "ORD001",
      name: "John Doe",
      mobileNumber: "123-456-7890",
      email: "john@example.com",
      panel: "Panel A",
    },
    {
      key: "2",
      orderNumber: "ORD002",
      name: "Jane Smith",
      mobileNumber: "987-654-3210",
      email: "jane@example.com",
      panel: "Panel B",
    },
  ];

  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Panel",
      dataIndex: "panel",
      key: "panel",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button type="default" onClick={() => handleView(record)}>
          View
        </Button>
      ),
    },
  ];

  const handleView = (record) => {
    console.log("Viewing:", record);
  };

  return <Table dataSource={data} columns={columns} />;
};

export default AllAssistantUsers;
