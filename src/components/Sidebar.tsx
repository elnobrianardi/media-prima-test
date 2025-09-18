"use client";

import { useState } from "react";
import {
  AppstoreFilled,
  UsergroupAddOutlined,
  ExportOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [activeKey, setActiveKey] = useState("dashboard");

  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: <AppstoreFilled /> },
    {
      key: "supplier",
      label: "Supplier Management",
      icon: <UsergroupAddOutlined />,
      submenu: [
        "Dashboard",
        "Supplier List",
        "Block Supplier",
        "Configuration",
      ],
    },
    { key: "funnel", label: "Funnel Management", icon: <ExportOutlined /> },
  ];

  const footerItems = [
    { key: "help", label: "Help & Support", icon: <QuestionCircleOutlined /> },
    { key: "profile", label: "John Doe", icon: <UserOutlined /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 flex flex-col h-screen bg-gray-900 text-white transition-all duration-200 ${
        collapsed ? "w-20" : "w-56"
      }`}
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-2">
          <LogoutOutlined className="text-xl" /><p className="font-semibold">ALISA</p>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-2 text-white focus:outline-none"
        >
          {collapsed ? ">" : "<"}
        </button>
      </div>
      <hr className="border-gray-700 m-0" />

      {/* Menu */}
      <div className="flex-1 overflow-y-auto pt-2">
        {menuItems.map((item) => (
          <div key={item.key}>
            <div
              onClick={() => {
                if (item.submenu) setOpenSubmenu(!openSubmenu);
                setActiveKey(item.key);
              }}
              className={`flex items-center px-4 py-2 cursor-pointer ${
                activeKey === item.key ? "bg-gray-800" : ""
              }`}
            >
              <div className="mr-3">{item.icon}</div>
              {!collapsed && <span>{item.label}</span>}
            </div>

            {/* Submenu timeline */}
            {item.submenu && openSubmenu && !collapsed && (
              <div className="pl-8">
                {item.submenu.map((sub, i) => (
                  <div key={i} className="flex items-center relative py-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full z-10 mr-3" />
                    <Link href="/supplier-list">
                      <span>{sub}</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-2 mt-auto">
        <hr className="border-gray-700 my-2" />
        {footerItems.map((item) => (
          <div
            key={item.key}
            className="flex items-center px-4 py-2 cursor-pointer"
          >
            <div className="mr-3">{item.icon}</div>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
