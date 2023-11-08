import React, {useState} from "react"
import S1 from "./S1"
import Second from "./Second"
import Third from "./Third"
import Fourth from "./Fourth"
import S4 from "./S4"
import S2 from "./S2"
import S3 from "./S3"


const StudentNotes = () => {
  const [selectedPage, setSelectedPage] = useState("third")

  const handleClick = (e) => {
    setSelectedPage(e);
  }

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded flex flex-row gap-5 w-[50%] mx-auto text-center">
        <div className={`${selectedPage === "S1" ? "bg-orange-300" : "bg-white"} flex-1 border-b-4 border-orange-500 p-4`} onClick={() => handleClick("S1")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 1</p>
        </div>
        <div className={`${selectedPage === "S2" ? "bg-orange-300" : "bg-white"} flex-1 border-b-4 border-orange-500 p-4`} onClick={() => handleClick("S2")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 2</p>
        </div>
        <div className={`${selectedPage === "S3" ? "bg-orange-300" : "bg-white"} flex-1 border-b-4 border-orange-500 p-4`} onClick={() => handleClick("S3")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 3</p>
        </div>
        <div className={`${selectedPage === "S4" ? "bg-orange-300" : "bg-white"} flex-1 border-b-4 border-orange-500 p-4`} onClick={() => handleClick("S4")}>
          <p className="text-gray-600 uppercase text-lg leading-normal font-semibold">Semestre 4</p>
        </div>
      </div>
    <S1 isSelected={selectedPage}/>
    <S2 isSelected={selectedPage}/>
    <S3 isSelected={selectedPage}/>
    <S4 isSelected={selectedPage}/>
    </div>
  )
}

export default StudentNotes
