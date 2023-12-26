import React from "react";
import { Breadcrumb, Tabs,Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NewEnquiry from "./newEnquiry/NewEnquiry";
import AllEnquiry from "./allEnquiry/AllEnquiry";

const { TabPane } = Tabs;

const Enquiry = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>Enquiry</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Enquiry</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card style={{padding:'24px'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Enquiry" key="1">
            <NewEnquiry />
          </TabPane>
          <TabPane tab="All Enquiries" key="2">
            <AllEnquiry />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Enquiry;
