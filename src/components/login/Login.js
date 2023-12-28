import React, { useState } from "react";
import { Card, Form, Input, Button, message, Col, Row, Carousel } from "antd";
import {
  login,
  //  updateLogin
} from "../../actions/fmLogin/auth";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.webp";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const data = {
        emailId: values.emailId,
        // password: values.password,
        role: "factoryManager",
      };
      console.log("Received values:", data);
      setLoading(true);
      // const res = await dispatch(updateLogin(data));
      const res = await dispatch(login(data));

      message.success(res.message);
      navigate("/verify-otp", { state: { emailId: values.emailId } });
      // navigate("/factory")
    } catch (error) {
      console.error("Error updating login:", error);
      //   message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
     className="login-container"
    >
      <Card
      className="login-subcontainer"
      >
        <Row>
          <Col lg={12} sm={24} xs={24}>
            <Carousel autoplay autoplaySpeed={2000}>
              <div>
                <img
                  src={image1}
                  alt="Carousel 1"
                  style={{ width: "100%", height: "80vh", borderRadius: "5px" }}
                />
              </div>
              <div>
                <img
                  src={image2}
                  alt="Carousel 2"
                  style={{ width: "100%", height: "80vh", borderRadius: "5px" }}
                />
              </div>
            </Carousel>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <Row
              justify="center"
              align="middle"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // padding: "20px",
              }}
            >
              <Col lg={12} sm={24} xs={24}>
                <div>
                  <p style={{fontSize:'18px',marginBottom:'0px'}}>Welcome to</p>
                  <h2 style={{ marginBottom: "20px",fontSize:'28px',marginTop:'0px', }}>Furnishi Services</h2>
                </div>
                <Form
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                  name="myForm"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Form.Item
                    label="Email"
                    name="emailId"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "Please enter a valid email address!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" style={{ width: "100%" }} />
                  </Form.Item>
                  {/* <Form.Item
                    label="Email"
                    name="password"
                    // rules={[
                    //   { required: true, message: "Please input your email!" },
                    //   {
                    //     type: "email",
                    //     message: "Please enter a valid email address!",
                    //   },
                    // ]}
                  >
                    <Input placeholder="Email" style={{ width: "100%" }}  type="password" />
                  </Form.Item> */}
                  <Form.Item>
                    <Button
                      style={{ width:'100%',borderRadius:'5px',  backgroundColor: "#284F49",color:'#fff',height:'37px'}}
                      htmlType="submit"
                      loading={loading}
                    >
                      Get OTP
                    </Button>
                  </Form.Item>
                </Form>
                <p>Create an account? <Link to="/"> <span style={{color:'#284F49'}}>Sign up</span></Link></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
