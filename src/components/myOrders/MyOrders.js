import React,{useEffect} from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import NewOrder from "./newOrder/NewOrder";
import OrderOpen from "./orderOpen/OrderOpen";
import OrderClosed from "./orderClosed/OrderClosed";
import { useDispatch,useSelector } from "react-redux";
import { getProduct } from "../../actions/master/product";
import { getStatus } from "../../actions/master/status";
import { getLocation } from "../../actions/master/location";
import { getCordinator, getCordinatorById} from "../../actions/master/cordinator";

const { TabPane } = Tabs;

const MyOrders = () => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const status = useSelector((state) => state.status.status);
  const cordinator=useSelector((state)=>state.cordinator.cordinator);
  const location =useSelector((state)=>state.location.location);
  const cordinatorType=useSelector((state)=>state.cordinator.cordinatorTypeId);
  console.log(cordinatorType)

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(getProduct()),
        dispatch(getStatus()),
        dispatch(getCordinator()),
        dispatch(getCordinatorById(1)),
        dispatch(getLocation()),

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
      <Card style={{padding:'24px'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Order" key="1">
            <NewOrder  status={status} product={product} cordinator={cordinator} location={location} />
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
