import React, { useEffect } from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import NewEnquiry from "./newEnquiry/NewEnquiry";
import AllEnquiry from "./allEnquiry/AllEnquiry";
import { getProduct } from "../../actions/master/product";
import { getStatusAction } from "../../actions/master/statusAction";
import { getStatus } from "../../actions/master/status";
import { getCarcass } from "../../actions/master/carcass";
import { getShutter } from "../../actions/master/shutter";

const { TabPane } = Tabs;

const Enquiry = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const statusAction = useSelector((state) => state.statusAction.statusAction);
  const status = useSelector((state) => state.status.status);
  const carcass = useSelector((state) => state.carcass.carcass);
  const shutter = useSelector((state) => state.shutter.shutter);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(getProduct()),
        dispatch(getStatusAction()),
        dispatch(getStatus()),
        dispatch(getCarcass()),
        dispatch(getShutter()),
      ]);
    };

    fetchData();
  }, [dispatch]);
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
      <Card style={{ padding: "24px" }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Enquiry" key="1">
            <NewEnquiry
              status={status}
              carcass={carcass}
              shutter={shutter}
              statusAction={statusAction}
              product={product}
            />
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
