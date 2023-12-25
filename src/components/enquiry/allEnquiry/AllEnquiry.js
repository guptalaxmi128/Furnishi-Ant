import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    targetDate: "2023-12-25",
    sitePincode: "123456",
    status: "In Progress",
    carcass: "Yes",
    shutter: "No",
    dispatch: "Pending",
    workStartTime: "09:00 AM",
    workEndTime: "05:00 PM",
    estimate: "$1000",
    action: "Edit",
    deepClean: "Yes",
    liveStreaming: "No",
    installationRecording: "Yes",
    amc: "Yes",
    enquiryType: "Service",
  },
];

const columns = [
  {
    title: "Target Date",
    dataIndex: "targetDate",
    key: "targetDate",
    fixed: 'left',
  },
  {
    title: "Site Pincode",
    dataIndex: "sitePincode",
    key: "sitePinCode",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Carcass",
    dataIndex: "carcass",
    key: "carcass",
  },
  {
    title: "Shutter",
    dataIndex: "shutter",
    key: "shutter",
  },
  {
    title: "Dispatch",
    dataIndex: "dispatch",
    key: "dispatch",
  },
  {
    title: "Work Start Time",
    dataIndex: "workStartTime",
    key: "workStartTime",
  },
  {
    title: "Work End Time",
    dataIndex: "workEndTime",
    key: "workEndTime",
  },
  {
    title: "Estimate",
    dataIndex: "estimate",
    key: "estimate",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Deep Clean",
    dataIndex: "deepClean",
    key: "deepClean",
  },
  {
    title: "Live Streaming",
    dataIndex: "liveStreaming",
    key: "liveStreaming",
  },
  {
    title: "Installation Recording",
    dataIndex: "installationRecording",
    key: "installationRecording",
  },
  {
    title: "AMC",
    dataIndex: "amc",
    key: "amc",
  },
  {
    title: "Enquiry Type",
    dataIndex: "enquiryType",
    key: "enquiryType",
  },
];

const AllEnquiry = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default AllEnquiry;
