import React from "react";
import { Breadcrumb, Tabs,Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NewOrderList from "./newOrderList/NewOrderList";
import OrderLists from "./orderLists/OrderLists";

const { TabPane } = Tabs;

const OrderList = () => {
  return (
    <div style={{ padding:'20px' }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>OrderList</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>OrderList</Breadcrumb.Item>
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
          <TabPane tab="New Order List" key="1">
           <NewOrderList />
          </TabPane>
          <TabPane tab="Order Lists" key="2">
          <OrderLists />
          </TabPane>
        </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default OrderList;
