import React,{useEffect,useState} from "react";
import { Card, Col, Row } from "antd";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch,useSelector } from "react-redux";
import { getEnquiryCount, getOrderCount } from "../../actions/dashboard/dashboard";

const cardStyle = {
  marginBottom: "10px",
  padding:'24px'
};

const Dashboard = () => {
const dispatch=useDispatch();
const [loading, setLoading] = useState(true);

const orderCount = useSelector((state) => state.dashboard.orderCount);
const enquiryCount = useSelector((state) => state.dashboard.enquiryCount);


console.log(orderCount);
console.log(enquiryCount)
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      await Promise.all([
        dispatch(getOrderCount("open")),
        dispatch(getEnquiryCount("active"))
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [dispatch]);

return(<>
    <div style={{padding:'20px'}}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <p style={{ fontSize: "22px" }}>Dashboard</p>
      <Breadcrumb style={{ margin: "22px 0" }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/factory">
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
    {loading ? (
        <p>{loading}</p>
      ) : (
    <div style={{ padding: "20px" }}>
    <h3>Hii Welcome back</h3>
      <Row gutter={16} justify="start">
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Total Orders"
            bordered={false}
            style={{ background: "#fff2cd", ...cardStyle }}
          >
            {orderCount?.data}
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Total Enquiries"
            bordered={false}
            style={{ background: "#feede7", ...cardStyle }}
          >
            {enquiryCount?.enquiryCount}
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Total Orderlists"
            bordered={false}
            style={{ background: "#f9d9f9", ...cardStyle }}
          >
            9
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Furnishi Orders"
            bordered={false}
            style={{ background: "#fff2cd", ...cardStyle }}
          >
            4
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Running Complaints"
            bordered={false}
            style={{ background: "#fff2cd", ...cardStyle }}
          >
            8
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Next 15 Days Service Schedule"
            bordered={false}
            style={{ background: "#dbf9f0", ...cardStyle }}
          >
            6
          </Card>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
          <Card
            title="Services Assigned To Furnishi"
            bordered={false}
            style={{ background: "#f9d9f9", ...cardStyle }}
          >
            4
          </Card>
        </Col>
       
      </Row>
    </div>)}
  </div>
</>)

    };

export default Dashboard;
