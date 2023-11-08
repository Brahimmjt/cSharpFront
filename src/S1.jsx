import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Switch from "./Switch";


const S1 = ({isSelected}) => {
  return (
    <div className={`${isSelected === "S1" ? "block": "hidden"} w-[90%] flex mx-auto flex-row gap-2`}>
        
    <div className='flex-1'>
    <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>Semester 1</h3>
    <div className="bg-white shadow-md rounded my-6">
    <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-orange-500 border-b-4 border-gray-200 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center text-white">Module</th>
            <th className="py-3 px-6 text-center text-white">Ordinair</th>
            <th className="py-3 px-6 text-center text-white">Ratrapage</th>
            <th className="py-3 px-6 text-center text-white">Valider</th>
            <th className="py-3 px-6 text-center text-white">no valider</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">JEE</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">machine learning</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">crypto graphy</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">English</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">Oracle</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center">IoT</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</div>
  )
}

export default S1