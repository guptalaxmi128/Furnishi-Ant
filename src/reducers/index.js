import { combineReducers } from "redux";
import auth from "./fmLogin/auth";
import source from "./master/source";
import cordinator from "./master/cordinator";
import factory from "./master/factory";
import product from "./master/product";
import cordinatorType from "./master/cordinatorType";
import status from "./master/status";
import statusAction from "./master/statusAction";
import snagAction from "./master/snagAction";
import snagIssue from "./master/snagIssue";
import snagCost from "./master/snagCost";
import snagSolution from "./master/snagSolution";
import carcass from "./master/carcass";
import finalSiteSurveyor from "./master/finalSiteSurveyor";
import planner from "./master/planner";
import location from "./master/location";
import salesPerson from "./master/salesPerson";
import shutter from "./master/shutter";
import designer from "./master/designer";
import factoryEngineer from "./master/factoryEngineer";
import roleAccess from "./roleAccess/roleAccess";
import assistantUser from "./panelManager/assistantUser";
import enquiry from "./enquiry/enquiry";
import order from "./order/order";
import dashboard from "./dashbard/dashboard";

export const reducers = combineReducers({
  auth,
  source,
  cordinator,
  factory,
  product,
  cordinatorType,
  status,
  statusAction,
  snagAction,
  snagIssue,
  snagCost,
  snagSolution,
  carcass,
  finalSiteSurveyor,
  planner,
  location,
  salesPerson,
  shutter,
  designer,
  factoryEngineer,
  assistantUser,
  roleAccess,
  enquiry,
  order,
  dashboard
});
