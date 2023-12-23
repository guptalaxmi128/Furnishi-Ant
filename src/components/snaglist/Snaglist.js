import React from "react";
import { Breadcrumb, Tabs,Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NewSnaglist from "./newSnaglist/NewSnaglist";
import SnaglistOpen from "./snaglistOpen/SnaglistOpen";
import SnaglistClosed from "./snaglistClosed/SnaglistClosed";


const { TabPane } = Tabs;

const Snaglist = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>Snaglist</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Snaglist</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div >
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Snaglist" key="1">
            <NewSnaglist />
          </TabPane>
          <TabPane tab="Snaglist Open" key="2">
          <SnaglistOpen />
          </TabPane>
          <TabPane tab="Snaglist Closed" key="3">
          <SnaglistClosed />
          </TabPane>
        </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Snaglist;
