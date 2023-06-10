import React from "react";
import { useState } from "react";
import TaomStyle from "./Taomstyl";
import { useDispatch, useSelector } from "react-redux/es/exports";

export default function Taom() {
  const [imgLink, setImgLink] = useState("");
  const [taomname, setTaomName] = useState("");
  const [masalliq, setMasalliq] = useState("Qo'llanilgan masalliqlar: ");
  const [narxi, setNarxi] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [addrasm, setadFut] = useState('')

  const click = () => {
    if((imgLink && taomname && masalliq && narxi).trim() == "") return alert("Iltimosh barcha ma'lumotlarni kiriting");
    dispatch({
      type: "TAOM_QO'SH",
      payload: {
        imgLink: imgLink,
        taomNomi: taomname,
        title: masalliq,
        narxi: narxi,
      },
    });
    setImgLink("");
    setTaomName("");
    setMasalliq("Qo'llanilgan masalliqlar: ");
    setNarxi("");
    alert("Home pagesga taom muofaqiyatli qo'shildi")
    console.log(dispatch.payload);
  };

  return (
    <TaomStyle>
      {/* <h1>ss</h1> */}
      <input
        type="text"
        className="mt-5"
        placeholder="Rasmga yo'l"
        value={imgLink}
        onChange={(e) => setImgLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Taom nomi"
        value={taomname}
        onChange={(e) => setTaomName(e.target.value)}
      />
      <textarea
        placeholder="Ta'rif"
        value={masalliq}
        onChange={(e) => setMasalliq(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Narxi"
        value={narxi}
        onChange={(e) => setNarxi(e.target.value)}
      />
      {/* <input type="text" placeholder="Kategoriya" /> */}
      <div className="box w-100 d-flex mt-5 justify-content-center">
        <button
          className="bg-warning border-0 rounded pt-2 pb-2 ps-3 pe-3"
          onClick={click}
        >
          Qo'shish
        </button>
      </div>
    </TaomStyle>
  );
}
