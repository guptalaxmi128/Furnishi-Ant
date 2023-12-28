import React,{useEffect,useState} from "react";
import { Table } from "antd";
import { useDispatch,useSelector } from "react-redux";
import moment from "moment";
import { getOrder } from "../../../actions/order/order";

const OrderClosed = () => {
  const dispatch=useDispatch();
  const [orders,setOrders]=useState([]);
  const [loading,setLoading]=useState(false);
  const order = useSelector((state) => state.order.order);
  console.log(order)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        await Promise.all([dispatch(getOrder("close"))]);
        const filteredOrders = order.data.filter(item => item.orderStatus === "close");
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching enquiry data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [dispatch]);

 console.log(orders)

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
      dataIndex: "mobileNumber",
      key: "mobileNumber",
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
      render: (text, record) => {
        return record.location.pincode;
      }
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (location) => location.name,
    },
    {
      title: "Customer Cordinator Name",
      dataIndex: "customerCordinatorName",
      key: "customerCordinatorName",
      render: (text, record) => {
        return record.customerCordinator.name;
      }
    },
    {
      title: "Customer Cordinator Number",
      dataIndex: "customerCordinatorNumber",
      key: "customerCordinatorNumber",
      render: (text, record) => {
        return record.customerCordinator.number;
      }
    },
    {
      title: "Source Cordinator",
      dataIndex: "sourceCordinator",
      key: "sourceCordinator",
      render: (text, record) => {
        return record.sourceCordinator.name;
      }
    },
    {
      title: "Source Cordinator Number",
      dataIndex: "sourceCordinatorNumber",
      key: "sourceCordinatorNumber",
      render: (text, record) => {
        return record.sourceCordinator.number;
      }
    },
    {
      title: "Factory Cordinator",
      dataIndex: "factoryCordinator",
      key: "factoryCordinator",
      render: (text, record) => {
        return record.factoryCordinator.name;
      }
    },
    {
      title: "Factory Cordinator Number",
      dataIndex: "factoryCordinatorNumber",
      key: "factoryCordinatorNumber",
      render: (text, record) => {
        return record.factoryCordinator.number;
      }
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (product) => product.product,
    },
    {
      title: "Product Id",
      dataIndex: "productId",
      key: "productId",
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
      render: (targetStartDate) => {
        return targetStartDate ? moment(targetStartDate).format("DD-MM-YYYY") : "";
      },
    },
    {
      title: "Target End Date",
      dataIndex: "targetEndDate",
      key: "targetEndDate",
      render: (targetEndDate) => {
        return targetEndDate ? moment(targetEndDate).format("DD-MM-YYYY") : "";
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (startDate) => {
        return startDate ? moment(startDate).format("DD-MM-YYYY") : "";
      },
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (endDate) => {
        return endDate ? moment(endDate).format("DD-MM-YYYY") : "";
      },
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
      dataIndex: "serviceCalender",
      key: "serviceCalender",
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
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      render: (text, record) => {
        const filePath = record.attachment || "";
        const parts = filePath.split("/");
        const fileName = parts.length > 0 ? parts.pop() : "No Attachment";
        return fileName;
      }
    },
    // {
    //   title: "Transaction History",
    //   dataIndex: "transactionHistory",
    //   key: "transactionHistory",
    // },
    {
      title: "Expense Till Date",
      dataIndex: "expenseTillDate",
      key: "expenseTillDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => status.status,
    },
    {
      title: "Estimated Quote after Discount",
      dataIndex: "estimatedQuoteAfterDiscount",
      key: "estimatedQuoteAfterDiscount",
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      {" "}
      <Table dataSource={orders} columns={columns} loading={loading} />
    </div>
  );
};

export default OrderClosed;
