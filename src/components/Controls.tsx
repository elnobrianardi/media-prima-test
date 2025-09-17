"use client";

import { ExportOutlined, AppstoreOutlined, LineChartOutlined } from "@ant-design/icons";
import { Input } from "antd";

const { Search } = Input;

interface ControlsProps {
  searchText: string;
  setSearchText: (val: string) => void;
  statusFilter: string;
  setStatusFilter: (val: string) => void;
}

export default function Controls({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter,
}: ControlsProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
      <div className="flex gap-4 ">
        <Search
          placeholder="Search Supplier"
          className="w-64"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="px-3 py-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="flex gap-2 items-center">
        <button className="flex items-center gap-1 px-3 py-2 border rounded">
          <ExportOutlined /> Export
        </button>
        <AppstoreOutlined className="text-xl cursor-pointer" />
        <LineChartOutlined className="text-xl cursor-pointer" />
      </div>
    </div>
  );
}
