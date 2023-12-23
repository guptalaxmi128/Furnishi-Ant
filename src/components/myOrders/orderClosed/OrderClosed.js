import React from 'react';
import { Table } from 'antd';

const OrderClosed = () => {

  const data = [
    {
      key: '1',
      orderId: 'ORD001',
      name: 'John Doe',
      number: '123-456-7890',
      address: '123 Main St',
      pincode: '12345',
    },
    {
      key: '2',
      orderId: 'ORD002',
      name: 'Jane Smith',
      number: '987-654-3210',
      address: '456 Oak Ave',
      pincode: '54321',
    },
 
  ];


  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: 'pincode',
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default OrderClosed;
