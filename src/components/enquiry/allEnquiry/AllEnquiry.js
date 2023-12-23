import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    OrderId: '123',
    Name: 'John Doe',
    Number: '555-1234',
    Address: '123 Main St',
    Pincode: '12345',
  },
];

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'OrderId',
    key: 'OrderId',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  {
    title: 'Number',
    dataIndex: 'Number',
    key: 'Number',
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
  },
  {
    title: 'Pincode',
    dataIndex: 'Pincode',
    key: 'Pincode',
  },
];

const AllEnquiry= () => {
  return (

    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false} 
    />
  );
};

export default AllEnquiry;
