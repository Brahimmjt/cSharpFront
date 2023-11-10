import React, {useState} from "react"
import First from "./First"
import Second from "./Second"
import Third from "./Third"
import Fourth from "./Fourth"

const Releviers = () => {
  const [selectedPage, setSelectedPage] = useState("third")

  const handleClick = (e) => {
    setSelectedPage(e);
  }

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded flex flex-row gap-5 w-[50%] mx-auto text-center">
        <div className={`${selectedPage === "first" ? "bg-pink-300" : "bg-white"} flex-1 border-b-4 border-pink-500 p-4`} onClick={() => handleClick("first")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 1</p>
        </div>
        <div className={`${selectedPage === "second" ? "bg-blue-300" : "bg-white"} flex-1 border-b-4 border-blue-500 p-4`} onClick={() => handleClick("second")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 2</p>
        </div>
        <div className={`${selectedPage === "third" ? "bg-yellow-300" : "bg-white"} flex-1 border-b-4 border-yellow-500 p-4`} onClick={() => handleClick("third")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 3</p>
        </div>
        <div className={`${selectedPage === "fourth" ? "bg-green-300" : "bg-white"} flex-1 border-b-4 border-green-500 p-4`} onClick={() => handleClick("fourth")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 4</p>
        </div>
      </div>
    <First isSelected={selectedPage}/>
    <Second isSelected={selectedPage}/>
    <Third isSelected={selectedPage}/>
    <Fourth isSelected={selectedPage}/>
    </div>
  )
}

export default Releviers
