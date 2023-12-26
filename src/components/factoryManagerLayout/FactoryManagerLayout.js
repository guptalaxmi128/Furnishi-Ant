import React, { useState } from "react";
import { Layout, Row, Col, Space, Menu, Button, message } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  BookOutlined,
  PercentageOutlined,
  TeamOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import logo from "../../assets/img/furnishi_logo.png";
import Dashboard from "../dashboard/Dashboard";
import Master from "../master/Master";
import Enquiry from "../enquiry/Enquiry";
import OrderList from "../orderlist/OrderList";
import MyOrders from "../myOrders/MyOrders";
import PanelManager from "../panelManager/PanelManager";
import Snaglist from "../snaglist/Snaglist";
import Settings from "../settings/Settings";
import DefaultRoleAccess from "../defaultRoleAccess/DefaultRoleAccess";

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const FactoryManagerLayout = () => {
  const location = useLocation();

  const carouselStyle = {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  // console.log(location.pathname);

  // const handleLogout = () => {
  //   dispatch({ type: LOGOUT_USER });
  //   // console.log("User");
  //   message.success("User logout successfully!");
  //   navigate("/sign_in");
  // };

  const menuItems = [
    {
      key: "1",
      label: "Dashboard",
      icon: <DashboardOutlined />,
      link: "/factory",
    },
    {
      key: "2",
      label: "Master",
      icon: <BookOutlined />,
      link: "/factory/master",
    },

    {
      key: "3",
      label: "Enquiry",
      icon: <PercentageOutlined />,
      link: "/factory/enquiry",
    },
    {
      key: "4",
      label: "Orderlist",
      icon: <TeamOutlined />,
      link: "/factory/order-list",
    },
    {
      key: "5",
      label: "My Orders",
      icon: <TeamOutlined />,
      link: "/factory/my-orders",
    },
    {
      key: "6",
      label: "Panel Manager",
      icon: <BookOutlined />,
      link: "/factory/panel-manager",
    },
    {
      key: "7",
      label: "Snaglist",
      icon: <BookOutlined />,
      link: "/factory/snaglist",
    },
    {
      key: "8",
      label: "Settings",
      icon: <SettingOutlined />,
      link: "/factory/settings",
    },

    {
      key: "7",
      label: "Logout",
      icon: <LogoutOutlined />,
      // onClick: handleLogout,
    },
  ];

  const menuSliderItems = [
    {
      key: "1",
      label: "Dashboard",
      icon: <DashboardOutlined />,
      link: "/factory",
    },
    {
      key: "2",
      label: "Master",
      icon: <BookOutlined />,
      link: "/factory/master",
    },

    {
      key: "3",
      label: "Enquiry",
      icon: <PercentageOutlined />,
      link: "/factory/enquiry",
    },
    {
      key: "4",
      label: "Orderlist",
      icon: <TeamOutlined />,
      link: "/factory/order-list",
    },
    {
      key: "5",
      label: "My Orders",
      icon: <TeamOutlined />,
      link: "/factory/my-orders",
    },
    {
      key: "6",
      label: "Panel Manager",
      icon: <BookOutlined />,
      link: "/factory/panel-manager",
    },
    {
      key: "7",
      label: "Snaglist",
      icon: <BookOutlined />,
      link: "/factory/snaglist",
    },
    {
      key: "8",
      label: "Default Role Access",
      icon: <BookOutlined />,
      link: "/factory/default-role-access",
    },
    {
      key: "9",
      label: "Settings",
      icon: <SettingOutlined />,
      link: "/factory/settings",
    },

    {
      key: "10",
      label: "Logout",
      icon: <LogoutOutlined />,
      // onClick: handleLogout,
    },
  ];

  const customMenuStyle = {
    background: "#fff",
    height: "100vh",
  };

  const customMenuItemStyle = {
    marginTop: "10px",
    fontSize: "16px",
  };

  return (
    <div className="layout-container">
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <Row justify="space-between">
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "64px",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="logo-image"
                  style={{ height: "60px", borderRadius: "50%" }}
                />
                <h1
                  style={{
                    color: "#fff",
                    marginLeft: "10px",
                    fontSize: "18px",
                  }}
                >
                  Furnishi Services
                </h1>
              </div>
            </Col>
            <Col>
              <div className="desktop-menu">
                <Space>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={["1"]}
                  >
                    {menuItems.map((item) =>
                      item.subMenu ? (
                        <SubMenu
                          key={item.key}
                          icon={item.icon}
                          title={item.label}
                        >
                          {item.subMenu.map((subItem) => (
                            <Menu.Item
                              key={subItem.key}
                              icon={subItem.icon}
                              // style={{ paddingLeft: "30px" }}
                            >
                              <Link to={subItem.link}>{subItem.label}</Link>
                            </Menu.Item>
                          ))}
                        </SubMenu>
                      ) : (
                        <Menu.Item
                          key={item.key}
                          icon={item.icon}
                          onClick={item.key === "5" ? item.onClick : null}
                        >
                          <Link to={item.link}>{item.label}</Link>
                        </Menu.Item>
                      )
                    )}
                  </Menu>
                </Space>
              </div>
            </Col>
            <div className="mobile-menu-icon">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              />
            </div>
          </Row>
        </Header>

        <Layout>
          {/* {location.pathname !== "/user/my-courses" &&
            location.pathname !== "/user/all-courses" &&
            !location.pathname.startsWith("/user/enrolled/") &&
            !location.pathname.startsWith("/user/lecture") &&
            location.pathname !== "/user/profile" &&
            location.pathname !== "/user/faq" && ( */}
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            width={260}
            style={carouselStyle}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={customMenuStyle}
            >
              {menuSliderItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  style={customMenuItemStyle}
                  onClick={item.key === "10" ? item.onClick : null} //for side bar logout
                >
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}

              <div className="demo-logo-vertical" />
            </Menu>
          </Sider>
          {/* )} */}
          {showMobileMenu && (
            <div className="mobile-menu show">
              <Menu theme="dark" mode="inline" inlineIndent={16}>
                {menuItems.map((item) =>
                  item.subMenu ? (
                    <SubMenu key={item.key} title={item.label} icon={item.icon}>
                      {item.subMenu.map((subItem) => (
                        <Menu.Item key={subItem.key} icon={subItem.icon}>
                          <Link to={subItem.link}>{subItem.label}</Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item
                      key={item.key}
                      icon={item.icon}
                      onClick={item.key === "5" ? item.onClick : null}
                    >
                      <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                  )
                )}
              </Menu>
            </div>
          )}
          <Layout>
            <Content>
              {location.pathname === "/factory" && <Dashboard />}
              {location.pathname === "/factory/master" && <Master />}
              {location.pathname === "/factory/enquiry" && <Enquiry />}
              {location.pathname === "/factory/order-list" && <OrderList />}
              {location.pathname === "/factory/my-orders" && <MyOrders />}
              {location.pathname === "/factory/panel-manager" && (
                <PanelManager />
              )}
              {location.pathname === "/factory/snaglist" && <Snaglist />}
              {location.pathname === "/factory/settings" && <Settings />}
              {location.pathname === "/factory/default-role-access" && <DefaultRoleAccess />}
            </Content>
            <Footer style={{ textAlign: "center", fontFamily: "Rajdhani" }}>
              Furnishi Services by @ Tech Astute
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default FactoryManagerLayout;
