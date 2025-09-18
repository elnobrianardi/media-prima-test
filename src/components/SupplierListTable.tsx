"use client";

import React from "react";
import { Button, Segmented, Table, Tag } from "antd";
import { items, supplierTableData } from "@/data/data";
import Search from "antd/es/input/Search";
import { ImportOutlined, PlusOutlined } from "@ant-design/icons";

const SupplierListTable = () => {
  const onChange = (key: string) => {
    console.log("Selected:", key);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Material ID", dataIndex: "materialId", key: "materialId" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Price Upload Date", dataIndex: "priceUploadDate", key: "priceUploadDate" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="my-4">
      {/* Segmented Control */}
      <Segmented
        options={items.map((item) => ({
          label: item.name,
          value: item.key,
        }))}
        onChange={(value) => onChange(value as string)}
        style={{
          backgroundColor: "lightgray",
          borderRadius: "10px 10px 0px 0px",
          border: "1px solid lightgray",
        }}
      />

      {/* Table + Controls */}
      <div className="bg-white p-4 rounded-b rounded-tr-md shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="w-64">
            <Search placeholder="Search Material" allowClear />
          </div>

          <div className="flex gap-2">
            <Button icon={<ImportOutlined />} type="default">
              Import
            </Button>
            <Button icon={<PlusOutlined />} type="default">
              New Material Detail
            </Button>
          </div>
        </div>

        <Table dataSource={supplierTableData} columns={columns} pagination={{ pageSize: 5 }} />
      </div>
    </div>
  );
};

export default SupplierListTable;
