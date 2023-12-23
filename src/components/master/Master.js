import React,{useEffect} from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Source from "./source/Source";
import CordinatorType from "./cordinatorType/CordinatorType";
import CordinatorMaster from "./cordinatorMaster/CordinatorMaster";
import Product from "./product/Product";
import FactoryInfo from "./factoryInfo/FactoryInfo";
import StatusAction from "./statusAction/StatusAction";
import Status from "./status/Status";
import SnagIssue from "./snagIssue/SnagIssue";
import SnagSolution from "./snagSolution/SnagSolution";
import SnagAction from "./snagAction/SnagAction";
import SnagCost from "./snagCost/SnagCost";
import Location from "./location/Location";
import Carcass from "./carcass/Carcass";
import Shutter from "./shutter/Shutter"; 
import SalesPerson from "./salesPerson/SalesPerson";
import Designer from "./designer/Designer";
import Planner from "./planner/Planner";
import SiteSurveyor from "./siteSurveyor/SiteSurveyor";
import FactoryEngineer from "./factoryEngineer/FactoryEngineer";
import Panel from "./panel/Panel";
import { useDispatch, useSelector } from "react-redux";
import { getSource } from "../../actions/master/source";
import { getCordinatorType } from "../../actions/master/cordinatorType";
import { getCordinator } from "../../actions/master/cordinator";
import { getFactory } from "../../actions/master/factory";
import { getProduct } from "../../actions/master/product";

const { TabPane } = Tabs;

const Master = () => {
  const dispatch=useDispatch();
  const source = useSelector((state) => state.source.source);
  const cordinatorType = useSelector(
    (state) => state.cordinatorType.cordinatorType
  );
  const cordinator = useSelector(
    (state) => state.cordinator.cordinator
  );
  const factory = useSelector(
    (state) => state.factory.factory
  );
  const product = useSelector(
    (state) => state.product.product
  );

  useEffect(() => {
    dispatch(getSource());
    dispatch(getCordinatorType());
    dispatch(getCordinator());
    dispatch(getFactory());
    dispatch(getProduct());
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
        <p style={{ fontSize: "22px" }}>Master</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Master</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/factory">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Card>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Source" key="1">
              <Source source={source} />
            </TabPane>
            <TabPane tab="Cordinator Type" key="2">
              <CordinatorType  cordinatorType={cordinatorType} />
            </TabPane>
            <TabPane tab="Cordinator" key="3">
              <CordinatorMaster
                source={source}
                cordinatorType={cordinatorType}
                cordinator={cordinator}
              />
            </TabPane>
            <TabPane tab="Product" key="4">
              <Product product={product} />
            </TabPane>
            <TabPane tab="Factory Info" key="5">
              <FactoryInfo  factory={factory} />
            </TabPane>
            <TabPane tab="Status/Action" key="6">
              <StatusAction />
            </TabPane>
            <TabPane tab="Status" key="7">
              <Status />
            </TabPane>
            <TabPane tab="Snag Issue" key="8">
              <SnagIssue />
            </TabPane>
            <TabPane tab="Snag Solution" key="9">
              <SnagSolution />
            </TabPane>
            <TabPane tab="Snag Action" key="10">
              <SnagAction />
            </TabPane>
            <TabPane tab="Snag Cost" key="11">
              <SnagCost />
            </TabPane>
            <TabPane tab="Location" key="12">
              <Location />
            </TabPane>
            <TabPane tab="Carcass" key="13">
              <Carcass />
            </TabPane>
            <TabPane tab="Shutter" key="14">
              <Shutter />
            </TabPane>
            <TabPane tab="Sales Person" key="15">
              <SalesPerson />
            </TabPane>
            <TabPane tab="Designer" key="16">
              <Designer />
            </TabPane>
            <TabPane tab="Planner" key="17">
              <Planner />
            </TabPane>
            <TabPane tab="Site Surveyor" key="18">
              <SiteSurveyor />
            </TabPane>
            <TabPane tab="Factory Engineer" key="19">
              <FactoryEngineer />
            </TabPane>
            <TabPane tab="Panel" key="20">
              <Panel />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Master;
