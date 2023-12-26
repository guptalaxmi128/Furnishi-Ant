import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getSource } from "../../actions/master/source";
import { getCordinatorType } from "../../actions/master/cordinatorType";
import { getCordinator } from "../../actions/master/cordinator";
import { getFactory } from "../../actions/master/factory";
import { getProduct } from "../../actions/master/product";
import { getStatusAction } from "../../actions/master/statusAction";
import { getStatus } from "../../actions/master/status";
import { getSnagIssue } from "../../actions/master/snagIssue";
import { getSnagAction } from "../../actions/master/snagAction";
import { getSnagSolution } from "../../actions/master/snagSolution";
import { getSnagCost } from "../../actions/master/snagCost";
import { getLocation } from "../../actions/master/location";
import { getCarcass } from "../../actions/master/carcass";
import { getShutter } from "../../actions/master/shutter";
import { getSalesPerson } from "../../actions/master/salesPerson";
import { getDesigner } from "../../actions/master/designer";
import { getPlanner } from "../../actions/master/planner";
import { getFinalSiteSurveyor } from "../../actions/master/finalSiteSurveyor";
import { getFactoryEngineer } from "../../actions/master/factoryEngineer";

const { TabPane } = Tabs;

const Master = () => {
  const dispatch = useDispatch();
  const source = useSelector((state) => state.source.source);
  const cordinatorType = useSelector(
    (state) => state.cordinatorType.cordinatorType
  );
  const cordinator = useSelector((state) => state.cordinator.cordinator);
  const factory = useSelector((state) => state.factory.factory);
  const product = useSelector((state) => state.product.product);
  const statusAction = useSelector((state) => state.statusAction.statusAction);
  const status = useSelector((state) => state.status.status);
  const snagIssue = useSelector((state) => state.snagIssue.snagIssue);
  const snagAction = useSelector((state) => state.snagAction.snagAction);
  const snagSolution = useSelector((state) => state.snagSolution.snagSolution);
  const snagCost = useSelector((state) => state.snagCost.snagCost);
  const location = useSelector((state) => state.location.location);
  const carcass = useSelector((state) => state.carcass.carcass);
  const shutter = useSelector((state) => state.shutter.shutter);
  const salesPerson = useSelector((state) => state.salesPerson.salesPerson);
  const designer = useSelector((state) => state.designer.designer);
  const planner = useSelector((state) => state.planner.planner);
  const finalSiteSurveyor = useSelector((state) => state.finalSiteSurveyor.finalSiteSurveyor);
  const factoryEngineer = useSelector((state) => state.factoryEngineer.factoryEngineer);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(getSource()),
        dispatch(getCordinatorType()),
        dispatch(getCordinator()),
        dispatch(getFactory()),
        dispatch(getProduct()),
        dispatch(getStatusAction()),
        dispatch(getStatus()),
        dispatch(getSnagIssue()),
        dispatch(getSnagAction()),
        dispatch(getSnagSolution()),
        dispatch(getSnagCost()),
        dispatch(getLocation()),
        dispatch(getCarcass()),
        dispatch(getShutter()),
        dispatch(getSalesPerson()),
        dispatch(getDesigner()),
        dispatch(getPlanner()),
        dispatch(getFinalSiteSurveyor()),
        dispatch(getFactoryEngineer())
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
        <Card style={{padding:'24px'}}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Source" key="1">
              <Source source={source} />
            </TabPane>
            <TabPane tab="Cordinator Type" key="2">
              <CordinatorType cordinatorType={cordinatorType} />
            </TabPane>
            <TabPane tab="Cordinator" key="3">
              <CordinatorMaster
                source={source}
                cordinatorType={cordinatorType}
                cordinator={cordinator}
              />
            </TabPane>
            <TabPane tab="Product" key="4">
              <Product product={product} factory={factory} />
            </TabPane>
            <TabPane tab="Factory Info" key="5">
              <FactoryInfo factory={factory} />
            </TabPane>
            <TabPane tab="Status/Action" key="6">
              <StatusAction statusAction={statusAction} />
            </TabPane>
            <TabPane tab="Status" key="7">
              <Status status={status} />
            </TabPane>
            <TabPane tab="Snag Issue" key="8">
              <SnagIssue snagIssue={snagIssue} />
            </TabPane>
            <TabPane tab="Snag Solution" key="9">
              <SnagSolution snagSolution={snagSolution} />
            </TabPane>
            <TabPane tab="Snag Action" key="10">
              <SnagAction snagAction={snagAction} />
            </TabPane>
            <TabPane tab="Snag Cost" key="11">
              <SnagCost snagCost={snagCost} />
            </TabPane>
            <TabPane tab="Location" key="12">
              <Location location={location} />
            </TabPane>
            <TabPane tab="Carcass" key="13">
              <Carcass carcass={carcass} />
            </TabPane>
            <TabPane tab="Shutter" key="14">
              <Shutter shutter={shutter} />
            </TabPane>
            <TabPane tab="Sales Person" key="15">
              <SalesPerson salesPerson={salesPerson} />
            </TabPane>
            <TabPane tab="Designer" key="16">
              <Designer designer={designer} />
            </TabPane>
            <TabPane tab="Planner" key="17">
              <Planner planner={planner} />
            </TabPane>
            <TabPane tab="Site Surveyor" key="18">
              <SiteSurveyor finalSiteSurveyor={finalSiteSurveyor} />
            </TabPane>
            <TabPane tab="Factory Engineer" key="19">
              <FactoryEngineer factoryEngineer={factoryEngineer} />
            </TabPane>
            {/* <TabPane tab="Panel" key="20">
              <Panel />
            </TabPane> */}
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Master;
