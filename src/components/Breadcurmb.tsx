import { HomeOutlined, LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem'
import React from 'react'

const Breadcurmb = () => {
  return (
    <div className="flex justify-between items-center">
        <div>
          <Breadcrumb>
            <BreadcrumbItem className="text-blue-700">
              <HomeOutlined />
            </BreadcrumbItem>
            <BreadcrumbItem className="text-blue-700">
              Supplier Management
            </BreadcrumbItem>
            <BreadcrumbItem className="text-blue-700">
              Supplier List
            </BreadcrumbItem>
            <BreadcrumbItem className="text-gray-500">
              Supplier Detail
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="flex items-center ">
          <button className="bg-red-600 border border-gray-400 text-white px-4 py-1 rounded">
            Block / Unblock
          </button>
          <div className="flex text-gray-500">
            <LeftCircleFilled className="text-2xl ml-4" />
            <RightCircleFilled className="text-2xl ml-2" />
          </div>

          <p className="text-gray-500 ml-4">1 of 32</p>
        </div>
      </div>
  )
}

export default Breadcurmb