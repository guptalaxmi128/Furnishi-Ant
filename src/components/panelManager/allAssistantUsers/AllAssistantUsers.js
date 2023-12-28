import React,{useState,useEffect} from "react";
import { Table, Button } from "antd";

const AllAssistantUsers = (props) => {
  const { assistantUser} =props;
  const [assistantUserTable,setAssistantUserTable]=useState([]);


  useEffect(()=>{
    if(assistantUser)
setAssistantUserTable(assistantUser.data)
  },[assistantUser])

  console.log(assistantUser)


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
      dataIndex: "emailId",
      key: "emailId",
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

  return <Table dataSource={assistantUserTable} columns={columns} />;
};

export default AllAssistantUsers;
