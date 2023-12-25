import React from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NewAssistantUser from "../panelManager/newAssistantUser/NewAssistantUser";
import AllAssistantUsers from "./allAssistantUsers/AllAssistantUsers";

const { TabPane } = Tabs;

const PanelManager = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>Panel Manager</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Panel Manager</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Assistant User" key="1">
            <NewAssistantUser />
          </TabPane>
          <TabPane tab="All Assistant Users" key="2">
            <AllAssistantUsers />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default PanelManager;
