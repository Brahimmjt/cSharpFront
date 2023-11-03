import React from 'react'

const Fourth = ({isSelected}) => {
  return (
    <div className={`${isSelected === "fourth" ? "block": "hidden"} w-[90%] mx-auto flex mx-auto flex-row gap-2`}>
      <div className='flex-1'>
        <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>Semestre 4</h3>
    <div className="bg-white shadow-md rounded my-6">
    <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center">Module</th>
            <th className="py-3 px-6 text-center">Note Normal</th>
            <th className="py-3 px-6 text-center">Valide</th>
            <th className="py-3 px-6 text-center">Note Rattrapage</th>
            <th className="py-3 px-6 text-center">Valide</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <th className="py-3 px-6 text-center whitespace-nowrap">Projet</th>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <div className='flex-1'>
    <h3 className='text-center text-gray-600 uppercase text-xl leading-normal m-10 font-bold'>Liste des Etudiants</h3>
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 border-b-4 border-gray-200 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-center">Nom</th>
            <th className="py-3 px-6 text-center">Prenom</th>
            <th className="py-3 px-6 text-center">Email</th>
            <th className="py-3 px-6 text-center">Num Appoge</th>
            <th className="py-3 px-6 text-center">CNE</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center">Hello</td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center">joh</td>
            <td className="py-3 px-6 text-center">127890</td>
            <td className="py-3 px-6 text-center">Admin</td>
            <td className="py-3 px-6 text-center">Action</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center">12</td>
            <td className="py-3 px-6 text-center">Admin</td>
            <td className="py-3 px-6 text-center">Action</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center">123</td>
            <td className="py-3 px-6 text-center">Admin</td>
            <td className="py-3 px-6 text-center">Action</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center">123-456-7890</td>
            <td className="py-3 px-6 text-center">Admin</td>
            <td className="py-3 px-6 text-center">Action</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center">123</td>
            <td className="py-3 px-6 text-center">Admin</td>
            <td className="py-3 px-6 text-center">Action</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center"></td>
            <td className="py-3 px-6 text-center">123</td>
            <td className="py-3 px-6 text-center">Admin</td>
            <td className="py-3 px-6 text-center">Action</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</div>
  )
}

export default Fourth