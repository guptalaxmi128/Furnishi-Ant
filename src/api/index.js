import axios from "axios";

const api = axios.create({
//   baseURL: "http://localhost:5000/",
  baseURL:"https://furnishi-server-test.onrender.com/",
  // baseURL:"https://192.168.50.114:5000/"
 
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken=localStorage.getItem("refreshToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if (refreshToken) {
      config.headers['Refresh-Token'] = `Bearer ${refreshToken}`
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.defaults.withCredentials =true;

// export const login = (factoryManager) => api.put(`furnishi/login`, factoryManager);
export const signup = (userInfo) => api.post(`furnishi/signup`, userInfo);
export const login = (userInfo) => api.post(`furnishi/sendOtp`, userInfo);
export const VerifyOtp = (verifyOtp) => api.put(`furnishi/verifyOtp`, verifyOtp);

export const addSource = (sourceInfo) => api.post(`fm/source`, sourceInfo);
export const getSource = () => api.get(`fm/source`);

export const addCordinatorType = (cordinatorType) => api.post(`fm/cordinatorType`, cordinatorType);
export const getCordinatorType = () => api.get(`fm/cordinatorType`);

export const addCordinator = (cordinator) => api.post(`fm/cordinator`, cordinator);
export const getCordinator = () => api.get(`fm/cordinator`);
export const getCordinatorById = (cordinatorTypeId) => api.get(`fm/cordinator?cordinatorTypeId=${cordinatorTypeId}`);

export const addFactory = (factoryInfo) => api.post(`fm/factory`, factoryInfo);
export const getFactory = () => api.get(`fm/factory`);

export const addProduct = (productInfo) => api.post(`fm/product`, productInfo);
export const getProduct = () => api.get(`fm/product`);

export const addStatus = (statusInfo) => api.post(`fm/status`, statusInfo);
export const getStatus = () => api.get(`fm/status`);

export const addStatusAction = (statusActionInfo) => api.post(`fm/statusAction`, statusActionInfo);
export const getStatusAction = () => api.get(`fm/statusAction`);

export const addSnagAction = (snagActionInfo) => api.post(`fm/snagAction`, snagActionInfo);
export const getSnagAction = () => api.get(`fm/snagAction`);

export const addSnagIssue = (snagIssueInfo) => api.post(`fm/snagIssue`, snagIssueInfo);
export const getSnagIssue = () => api.get(`fm/snagIssue`);

export const addSnagCost = (snagCostInfo) => api.post(`fm/snagCost`, snagCostInfo);
export const getSnagCost = () => api.get(`fm/snagCost`);

export const addSnagSolution = (snagSolutionInfo) => api.post(`fm/snagSolution`, snagSolutionInfo);
export const getSnagSolution = () => api.get(`fm/snagSolution`);


export const addCarcass = (carcassInfo) => api.post(`fm/carcass`, carcassInfo);
export const getCarcass = () => api.get(`fm/carcass`);

export const addDesigner = (designerInfo) => api.post(`fm/designer`, designerInfo);
export const getDesigner = () => api.get(`fm/designer`);

export const addFinalSiteSurveyor = (finalSiteSurveyorInfo) => api.post(`fm/finalSiteSurveyor`, finalSiteSurveyorInfo);
export const getFinalSiteSurveyor = () => api.get(`fm/finalSiteSurveyor`);

export const addPlanner = (plannerInfo) => api.post(`fm/planner`, plannerInfo);
export const getPlanner = () => api.get(`fm/planner`);

export const addLocation = (locationInfo) => api.post(`fm/location`, locationInfo);
export const getLocation = () => api.get(`fm/location`);

export const addSalesPerson = (salesPersonInfo) => api.post(`fm/salesPerson`, salesPersonInfo);
export const getSalesPerson  = () => api.get(`fm/salesPerson`);

export const addShutter = (shutterInfo) => api.post(`fm/shutter`, shutterInfo);
export const getShutter  = () => api.get(`fm/shutter`);

export const addFactoryEngineer = (factoryEngineerInfo) => api.post(`fm/factoryEngineer`, factoryEngineerInfo);
export const getFactoryEngineer = () => api.get(`fm/factoryEngineer`);

export const addRoleAccess = (roleAccessInfo) => api.post(`fm/role`, roleAccessInfo);
export const getRoleAccess = () => api.get(`fm/role`);

export const addAssistantUser = (assistantUser) => api.post(`fm/assistantUser`, assistantUser);
export const getAssistantUser = () => api.get(`fm/assistantUser`);

export const addEnquiry = (enquiryInfo) => api.post(`fm/enquiry`, enquiryInfo);
export const getEnquiry= () => api.get(`fm/enquiry`);

export const addOrder = (formData) => api.post(`fm/order`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const getOrder= (orderStatus) => api.get(`fm/order?orderStatus=${orderStatus}`);

export const getOrderCount= (orderStatus) => api.get(`fm/orderCount?orderStatus=${orderStatus}`);
export const getEnquiryCount= (orderStatus) => api.get(`fm/enquiryCount?orderStatus=${orderStatus}`);

