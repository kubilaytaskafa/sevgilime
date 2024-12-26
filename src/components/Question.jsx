import { useState } from "react";
const Question = () => {
  const [love, setLove] = useState("Beni seviyor musun?");
  return (
    <div className="flex items-center justify-center mt-4 flex-col gap-4">
      <h1 className="text-2xl text-center text-pink-600 hover:text-pink-800 cursor-pointer hover:scale-105 transition duration-300 ml-2 p-4">
        -Aşağı inmeden önce sana ufak bir soru sormak istiyorum.-
      </h1>

      <div>
        <h1 className="text-xl text-center">{love}</h1>
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={() => {
              setLove("Biliyordum güzel sevgilim...");
            }}
            className="border p-2 hover:bg-pink-500 transition duration-500 rounded-md"
          >
            Evet Seviyorum
          </button>
          <button
            onClick={() => {
              setLove("Hayır,Olamaz.İnanmıyorum! ");
            }}
            className="border p-2 hover:bg-pink-500 transition duration-500 rounded-md"
          >
            Hayır,Sevmiyorum
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
