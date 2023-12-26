import React, { useState } from "react";
import { Card, Form, Input, Button, message, Col, Row, Carousel } from "antd";
import { signup } from "../../actions/fmLogin/auth";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.webp";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const cardStyle = {
    padding: 0,
    borderRadius: "0 0 8px 8px",
  };


  const onFinish = async (values) => {
    try {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailId: values.emailId,
        mobileNumber: values.mobileNumber,
        password: values.password,
        role: "factoryManager",
      };
      console.log("Received values:", data);
      setLoading(true);
      const res = await dispatch(signup(data));

      message.success(res.message);
      navigate("/factory");
    } catch (error) {
      console.error("Error updating login:", error);
      //   message.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#284F49",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="login-container" style={cardStyle}>
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
          <Col lg={12} sm={24} xs={24} style={{ padding: "20px" }}>
            <Row
              style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                // padding: "20px",
              }}
            >
              <Col lg={12} sm={24} xs={24}>
                <div>
                  <p style={{ fontSize: "18px", marginBottom: "0px" }}>
                    Welcome to
                  </p>
                  <h2
                    style={{
                      marginBottom: "20px",
                      fontSize: "28px",
                      marginTop: "0px",
                    }}
                  >
                    Furnishi Services
                  </h2>
                </div>
                <Form
                  onFinish={onFinish}
                  initialValues={{ remember: true }}
                  name="myForm"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Form.Item
                        // label="First Name"
                        className="custom-input"
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your first name!",
                          },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        className="custom-input"
                        // label="Last Name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your last name!",
                          },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    className="custom-input"
                    // label="Email"
                    name="emailId"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "Please enter a valid email address!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    className="custom-input"
                    // label="Mobile Number"
                    name="mobileNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile number!",
                      },
                      {
                        pattern: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit mobile number!",
                      },
                    ]}
                  >
                    <Input placeholder="Mobile Number" />
                  </Form.Item>
                  <Form.Item
                    className="custom-input"
                    // label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        backgroundColor: "#284F49",
                        color: "#fff",
                        height: "37px",
                      }}
                      htmlType="submit"
                      loading={loading}
                    >
                      Sign up
                    </Button>
                  </Form.Item>
                 
                </Form>
                <p>Already have an account? <Link to="/login"> <span style={{color:'#284F49'}}>Login</span></Link></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SignUp;
