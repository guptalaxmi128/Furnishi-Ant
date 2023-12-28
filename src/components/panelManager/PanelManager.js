import React,{useEffect} from "react";
import { Breadcrumb, Tabs, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch,useSelector } from "react-redux";
import NewAssistantUser from "../panelManager/newAssistantUser/NewAssistantUser";
import AllAssistantUsers from "./allAssistantUsers/AllAssistantUsers";
import { getRoleAccess } from "../../actions/roleAccess/roleAccess";
import { getAssistantUser } from "../../actions/panelManager/assistantUser";


const { TabPane } = Tabs;

const PanelManager = () => {
  const dispatch=useDispatch();
  const role = useSelector((state) => state.roleAccess.roleAccess);
  const assistantUser=useSelector((state)=>state.assistantUser.assistantUser);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(getRoleAccess()),
        dispatch(getAssistantUser())
       
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
      <Card style={{padding:'24px'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="New Assistant User" key="1">
            <NewAssistantUser role={role} />
           
          </TabPane>
          <TabPane tab="All Assistant Users" key="2">
            <AllAssistantUsers assistantUser={assistantUser} />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default PanelManager;
