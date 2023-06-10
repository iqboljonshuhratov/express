import React from "react";
import Kategoriyastyle from "./kategoryastyle";

export default function Kategoriya() {
  const click = () => alert("kechirasiz bu bo'lim hozirch ishlamaydi. Agar taom qo'shmoqchi bolsangiz taom bo'limiga o'ting iltimos ")
  return (
    <Kategoriyastyle>
      <input
        type="text"
        className="rounded mt-5"
        placeholder="Kategoriya nomi"
      />
      <div className="box w-100 d-flex mt-5 justify-content-center">
        <button className="bg-warning border-0 rounded pt-2 pb-2 ps-3 pe-3" onClick={click}>
          Qo'shish
        </button>
      </div>
    </Kategoriyastyle>
  );
}
