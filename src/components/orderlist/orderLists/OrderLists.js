import React from 'react';
import { Table } from 'antd';

const OrderLists = () => {
  // Sample data for the table
  const data = [
    {
      key: '1',
      orderNumber: 'ORD001',
      source: 'Online',
      customerName: 'John Doe',
      customerNumber: 'CUST001',
      location: 'City A',
      product: 'Product A',
    },
    {
      key: '2',
      orderNumber: 'ORD002',
      source: 'In-Store',
      customerName: 'Jane Smith',
      customerNumber: 'CUST002',
      location: 'City B',
      product: 'Product B',
    },
 
  ];

 
  const columns = [
    {
      title: 'Order Number',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
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
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
  ];

  return (
    <Table dataSource={data} columns={columns} />
  );
};

export default OrderLists;
