import React from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NewOrder from "./newOrder/NewOrder";
import OrderOpen from "./orderOpen/OrderOpen";
import OrderClosed from "./orderClosed/OrderClosed";

const { TabPane } = Tabs;

const MyOrders = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>Order List</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Order List</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Order" key="1">
            <NewOrder />
          </TabPane>
          <TabPane tab="Order Open" key="2">
            <OrderOpen />
          </TabPane>
          <TabPane tab="Order Closed" key="3">
            <OrderClosed />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default MyOrders;
