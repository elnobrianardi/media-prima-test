"use client";

import { Table } from "antd";

interface Supplier {
  key: string;
  name: string;
  id: string;
  address: string;
  contact: string;
  status: string;
}

interface SupplierTableProps {
  data: Supplier[];
}

export default function SupplierTable({ data }: SupplierTableProps) {
  const columns = [
    { title: "#", dataIndex: "key", key: "key", width: 50 },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: Supplier) => (
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
              IMG
            </div>
            <div className="text-xs text-green-500 mt-1">✔</div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{record.name}</span>
            <span className="text-gray-500 text-sm">{record.id}</span>
          </div>
        </div>
      ),
    },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  return <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />;
}
