import React from 'react'
import '../Style.css'

const Table = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
      <table >
        <thead className="bg-linear-to-r from-indigo-500 to-purple-500 text-white">
         <tr>
          <th className=' px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider'>id</th>
          <th className=' px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider'>name</th>
          <th className=' px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider'>email</th>
          <th className=' px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider'>role</th>
          <th className=' px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider'> Status</th>
          <th className=' px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider'> Action</th>

         </tr>
         </thead>
         <tbody  className="divide-y divide-gray-200"></tbody>
         <tr className="hover:bg-indigo-50 transition duration-200">
            <td className="px-6 py-4 text-sm text-gray-700">1</td>
            <td className="px-6 py-4 text-sm text-gray-700">Nensi</td>
            <td className="px-6 py-4 text-sm text-gray-700">nensinadoda@gmail.com</td>
            <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
            <td className="px-6 py-4 text-sm text-gray-700">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">Active</span></td>
            <td className="px-6 py-4 text-sm text-gray-700">
                <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit</button>
                <button class="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition ml-2">
                     Delete</button>
            </td>
         </tr>
         <tr className="hover:bg-indigo-50 transition duration-200">
            <td className="px-6 py-4 text-sm text-gray-700">1</td>
            <td className="px-6 py-4 text-sm text-gray-700">Nensi</td>
            <td className="px-6 py-4 text-sm text-gray-700">nensinadoda@gmail.com</td>
            <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
            <td className="px-6 py-4 text-sm text-gray-700">
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">Active</span></td>
            <td className="px-6 py-4 text-sm text-gray-700">
                 <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit</button>
                <button class="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition ml-2">
                     Delete</button>
            </td>
         </tr>
         <tr className="hover:bg-indigo-50 transition duration-200">
            <td className="px-6 py-4 text-sm text-gray-700">2</td>
            <td className="px-6 py-4 text-sm text-gray-700">vensi</td>
            <td className="px-6 py-4 text-sm text-gray-700">vensinadoda@gmail.com</td>
            <td className="px-6 py-4 text-sm text-gray-700">user</td>
            <td className="px-6 py-4 text-sm text-gray-700"><span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">inactive</span></td>
            <td className="px-6 py-4 text-sm text-gray-700">
                 <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit</button>
                <button class="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition ml-2">
                     Delete</button></td> 
         </tr>
         <tr className="hover:bg-indigo-50 transition duration-200">
            <td className="px-6 py-4 text-sm text-gray-700">3</td>
            <td className="px-6 py-4 text-sm text-gray-700">densi</td>
            <td className="px-6 py-4 text-sm text-gray-700">densinadoda@gmail.com</td>
            <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
            <td className="px-6 py-4 text-sm text-gray-700"><span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">inactive</span></td>
             <td className="px-6 py-4 text-sm text-gray-700">
                 <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit</button>
                <button class="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition ml-2">
                     Delete</button>
             </td>
         </tr>
         <tr className="hover:bg-indigo-50 transition duration-200">
            <td className="px-6 py-4 text-sm text-gray-700">4</td>
            <td className="px-6 py-4 text-sm text-gray-700">kensi</td>
            <td className="px-6 py-4 text-sm text-gray-700">kensinadoda@gmail.com</td>
            <td className="px-6 py-4 text-sm text-gray-700">user</td>
            <td className="px-6 py-4 text-sm text-gray-700"><span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">Active</span></td>
         <td className="px-6 py-4 text-sm text-gray-700">
             <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit</button>
                <button class="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition ml-2">
                     Delete</button>
         </td>
         </tr>
         <tr className="hover:bg-indigo-50 transition duration-200">
            <td className="px-6 py-4 text-sm text-gray-700">5</td>
            <td className="px-6 py-4 text-sm text-gray-700">mensi</td>
            <td className="px-6 py-4 text-sm text-gray-700">mensinadoda@gmail.com</td>
            <td className="px-6 py-4 text-sm text-gray-700">Admin</td>
            <td className="px-6 py-4 text-sm text-gray-700"><span class="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">inactive</span></td>
        <td className="px-6 py-4 text-sm text-gray-700">
             <button class="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    Edit</button>
                <button class="px-3 py-1 text-sm rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition ml-2">
                     Delete</button>
        </td>
         </tr>
      </table>
      <label className='px-6 py-4 text-sm text-gray-700'>Rows Per Page </label>
      <select class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  )
}

export default Table
