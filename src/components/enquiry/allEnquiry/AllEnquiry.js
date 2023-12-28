import React,{useState,useEffect} from "react";
import { Table } from "antd";
import { getEnquiry } from "../../../actions/enquiry/enquiry";
import { useDispatch,useSelector } from "react-redux";
import moment from "moment";




const AllEnquiry = () => {
  const dispatch=useDispatch();
  const [enquiryData,setEnquiryData]=useState([]);
  const [loading,setLoading]=useState(false);
  const enquiry = useSelector((state) => state.enquiry.enquiry);
  console.log(enquiry)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        await Promise.all([dispatch(getEnquiry())]);
        setEnquiryData(enquiry.enquiry);
      } catch (error) {
        console.error("Error fetching enquiry data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [dispatch]);




  const columns = [
    {
      title: "Target Date",
      dataIndex: "targetDate",
      key: "targetDate",
      render: (targetDate) => {
        return targetDate ? moment(targetDate).format("YYYY-MM-DD") : "";
      },
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
      render: (status) => status.status,
    },
    {
      title: "Carcass",
      dataIndex: "carcass",
      key: "carcass",
      render: (carcass) => carcass.carcass,
    },
    {
      title: "Shutter",
      dataIndex: "shutter",
      key: "shutter",
      render: (shutterData) => shutterData.shutter,
    },
    {
      title: "Dispatch",
      dataIndex: "dispatch",
      key: "dispatch",
      render: (dispatch) => {
        return dispatch ? moment(dispatch).format("YYYY-MM-DD") : ""; 
      },
    },
    {
      title: "Work Start Time",
      dataIndex: "workStartTime",
      key: "workStartTime",
      render: (workStartTime) => {
        return workStartTime ? moment(workStartTime).format("YYYY-MM-DD") : "";
      },
    },
    {
      title: "Work End Time",
      dataIndex: "workEndTime",
      key: "workEndTime",
      render: (workEndTime) => {
        return workEndTime ? moment(workEndTime).format("YYYY-MM-DD") : "";
      },
    },
    {
      title: "Estimate",
      dataIndex: "estimate",
      key: "estimate",
    },
    {
      title: "Action",
      dataIndex: "statusAction",
      key: "statusAction",
      render: (statusAction) => statusAction.statusAction,
    },
    {
      title: "Deep Clean",
      dataIndex: "deepClean",
      key: "deepClean",
      render: (deepClean) => (deepClean ? "Yes" : "No"),
    },
    {
      title: "Live Streaming",
      dataIndex: "liveStream",
      key: "liveStream",
      render: (liveStream) => (liveStream ? "Yes" : "No"),
    },
    {
      title: "Installation Recording",
      dataIndex: "installationRecording",
      key: "installationRecording",
      render: (installationRecording) =>
        installationRecording ? "Yes" : "No",
    },
    {
      title: "AMC",
      dataIndex: "amc",
      key: "amc",
      render: (amc) => (amc ? "Yes" : "No"),
    },
    {
      title: "Enquiry Type",
      dataIndex: "enquiryType",
      key: "enquiryType",
    },
  ];

 


 
  return (
    <div style={{ overflowX: "auto" }}>
      <Table dataSource={enquiryData} columns={columns} loading={loading} />
    </div>
  );
};

export default AllEnquiry;
