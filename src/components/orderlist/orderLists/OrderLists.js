import React from 'react';
import { Table } from 'antd';

const OrderLists = () => {
  const data = [
    {
      key: '1',
      receivedDate: '2023-12-01',
      targetDate: '2023-12-15',
      customerName: 'John Doe',
      customerNumber: '1234567890',
      siteAddress: '123 Main St',
      sitePincode: '12345',
      siteGoogleLocation: 'Google Location 1',
      source: 'Source 1',
      sourceCordinator: 'Source Coordinator 1',
      sourceCordinatorNumber: '9876543210',
      customerCordinator: 'Customer Coordinator 1',
      customerCordinatorNumber: '8765432109',
      factoryCordinator: 'Factory Coordinator 1',
      factoryCordinatorNumber: '7654321098',
      product: 'Product 1',
      location: 'Location 1',
      noOfServices: 3,
      area: '1500 sqft',
      orderValue: '$5000',
      paymentReceived: 'Yes',
      status: 'In Progress',
      carcass: 'Yes',
      shutter: 'No',
      designer: 'Designer 1',
      finalSiteSurveyor: 'Surveyor 1',
      salesPerson: 'Sales Person 1',
      factoryEngineer: 'Engineer 1',
      workStartTime: '09:00 AM',
      workEndTime: '05:00 PM',
      indentNumber: 'IND123',
      indentRelease: 'Yes',
      designClearanceDate: '2023-12-05',
      accountClearance: 'Yes',
      shopDocuments: 'Yes',
      stockCheck: 'Yes',
      POPrepare: 'Yes',
      POApproval: 'Yes',
      PORelease: 'Yes',
      jobWorkDone: 'Yes',
      rawMaterialAvailable: 'Yes',
      otherMaterialAvailable: 'Yes',
      paintMaterialProduction: 'Yes',
      otherMaterialProduction: 'Yes',
      panelProduction: 'Yes',
      assembly: 'Yes',
      cleaning: 'Yes',
      packing: 'Yes',
      dispatch: 'Pending',
    },
  ];
  

 
  const columns = [
    {
      title: 'Received Date',
      dataIndex: 'receivedDate',
      key: 'receivedDate',
      fixed: 'left',
    },
    {
      title: 'Target Date',
      dataIndex: 'targetDate',
      key: 'targetDate',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Customer Number',
      dataIndex: 'customerNumber',
      key: 'customerNumber',
    },
    {
      title: 'Site Address',
      dataIndex: 'siteAddress',
      key: 'siteAddress',
    },
    {
      title: 'Site Pincode',
      dataIndex: 'sitePincode',
      key: 'sitePincode',
    },
    {
      title: 'Site Google Location',
      dataIndex: 'siteGoogleocation',
      key: 'siteGoogleLocation',
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'Source Cordinator',
      dataIndex: 'sourceCordinator',
      key: 'sourceCordinator',
    },
    {
      title: 'Source Cordinator Number',
      dataIndex: 'sourceCordinatorNumber',
      key: 'sourceCordinatorNumber',
    },
    {
      title: 'Customer Cordinator',
      dataIndex: 'customerCordinator',
      key: 'customerCordinator',
    },
    {
      title: 'Customer Cordinator Number',
      dataIndex: 'customerCordinatorNumber',
      key: 'customerCordinatorNumber',
    },
    {
      title: 'Factory Cordinator',
      dataIndex: 'factoryCordinator',
      key: 'factoryCordinator',
    },
    {
      title: 'Factory Cordinator Number',
      dataIndex: 'factoryCordinatorNumber',
      key: 'factoryCordinatorNumber',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'No Of Services',
      dataIndex: 'noOfServices',
      key: 'noOfServices',
    },
    {
      title: 'Area (Sqft)',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Order Value',
      dataIndex: 'orderValue',
      key: 'orderValue',
    },
    {
      title: 'Payment Received',
      dataIndex: 'paymentReceived',
      key: 'paymentReceived',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Carcass',
      dataIndex: 'carcass',
      key: 'carcass',
    },
    {
      title: 'Shutter',
      dataIndex: 'shutter',
      key: 'shutter',
    },
    {
      title: 'Designer',
      dataIndex: 'designer',
      key: 'designer',
    },
    {
      title: 'Final Site Surveyor',
      dataIndex: 'finalSiteSurveyor',
      key: 'finalSiteSurveyor',
    },
    {
      title: 'Sales Person',
      dataIndex: 'salesPerson',
      key: 'salesPerson',
    },
    {
      title: 'Factory Engineer',
      dataIndex: 'factoryEngineer',
      key: 'factoryEngineer',
    },
    {
      title: 'Work Start Time',
      dataIndex: 'workStartTime',
      key: 'workStartTime',
    },
    {
      title: 'Work End Time',
      dataIndex: 'workEndTime',
      key: 'workEndTime',
    },
    {
      title: 'Indent Number',
      dataIndex: 'indentNumber',
      key: 'indentNumber',
    },
    {
      title: 'Indent Release',
      dataIndex: 'indentRelease',
      key: 'indentRelease',
    },
    {
      title: 'Design Clearance Date',
      dataIndex: 'designClearanceDate',
      key: 'designClearanceDate',
    },
    {
      title: 'Account Clearance',
      dataIndex: 'accountClearance',
      key: 'accountClearance',
    },
    {
      title: 'Shop Documents',
      dataIndex: 'shopDocuments',
      key: 'shopDocuments',
    },
    {
      title: 'Stock Check',
      dataIndex: 'stockCheck',
      key: 'stockCheck',
    },
    {
      title: 'PO Prepare',
      dataIndex: 'POPrepare',
      key: 'POPrepare',
    },
    {
      title: 'PO Approval',
      dataIndex: 'POApproval',
      key: 'POApproval',
    },
    {
      title: 'PO Release',
      dataIndex: 'PORelease',
      key: 'PORelease',
    },
    {
      title: 'Job Work Done',
      dataIndex: 'jobWorkDone',
      key: 'jobWorkDone',
    },
    {
      title: 'Raw Material Available',
      dataIndex: 'rawMaterialAvailable',
      key: 'rawMaterialAvailable',
    },
    {
      title: 'Other Material Available',
      dataIndex: 'otherMaterialAvailable',
      key: 'otherMaterialAvailable',
    },
    {
      title: 'Paint Material Production',
      dataIndex: 'paintMaterialProduction',
      key: 'paintMaterialProduction',
    },
    {
      title: 'Other Material Production',
      dataIndex: 'otherMaterialProduction',
      key: 'otherMaterialProduction',
    },
    {
      title: 'Panel Production',
      dataIndex: 'panelProduction',
      key: 'panelProduction',
    },
    {
      title: 'Assembly',
      dataIndex: 'assembly',
      key: 'assembly',
    },
    {
      title: 'Cleaning',
      dataIndex: 'cleaning',
      key: 'cleaning',
    },
    {
      title: 'Packing',
      dataIndex: 'packing',
      key: 'packing',
    },
    {
      title: 'Dispatch',
      dataIndex: 'dispatch',
      key: 'dispatch',
    },
  ];

  return (
    <div style={{ overflowX: 'auto' }}>
    <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default OrderLists;
