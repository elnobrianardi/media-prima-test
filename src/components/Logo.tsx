import { CopyrightCircleOutlined, InfoCircleOutlined, LoginOutlined } from '@ant-design/icons'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex gap-8 p-4 items-center'>
        <LoginOutlined className='text-3xl' />
        <div>
            <p className='font-bold'>PT Setroom Indonesia</p>
            <p className='font-light text-gray-500'>Fatmawati Raya St, 33</p>
            <p className='font-light text-gray-500'>Jakarta Selatan</p>
        </div>
        <div className='flex flex-col gap-2'>
            <button className='bg-white text-black px-4 py-1 rounded border cursor-pointer border-gray-400 hover:border-green-600 hover:bg-green-300'><InfoCircleOutlined /><span className='ml-1 text-sm'>Active</span></button>
            <button className='bg-white text-black px-4 py-1 rounded border cursor-pointer border-gray-400 hover:border-green-600 hover:bg-green-300'><CopyrightCircleOutlined /><span className='ml-1 text-sm'>Setroom</span></button>
        </div>
        
    </div>
  )
}

export default Logo