import React from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import CreateNewRole from "./createNewRole/CreateNewRole";


const { TabPane } = Tabs;

const DefaultRoleAccess = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>Default Role Access</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Default Role Access</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Create New Role" key="1">
         <CreateNewRole />
          </TabPane>
          <TabPane tab="Manage Role" key="2">
          
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default DefaultRoleAccess;
