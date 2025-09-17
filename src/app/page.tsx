"use client";

import { useState } from "react";
import Cards from "@/components/Cards";
import Controls from "@/components/Controls";
import SupplierTable from "@//components/SupplierTable";
import { cardsData, tableData } from "@/data/data";

export default function SupplierListPage() {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData = tableData.filter((item) => {
    return (
      (statusFilter === "all" || item.status === statusFilter) &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Supplier List</h1>
      <Cards cards={cardsData} />
      <Controls
        searchText={searchText}
        setSearchText={setSearchText}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <SupplierTable data={filteredData} />
    </div>
  );
}
