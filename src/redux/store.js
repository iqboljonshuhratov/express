import { createStore } from "redux";

const initialState = {
  tasks: [
    {
      imgLink: "https://play-lh.googleusercontent.com/v1cs4pivt6kEmelkx0bj__8bBtKZ8Hz6zLLXUVgI96Zgo7VpvYwJOvmzGZmZYzZiHvo",
      taomNomi: "Lag'mon",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://i.mycdn.me/i?r=AyENid1PUfRjbfTS8I1wumQ-ZBOpu0d2S14QWMvDhhzfrg",
      taomNomi: "Norin",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://pp.vk.me/c625831/v625831674/2438/BgDZlYxOumE.jpg",
      taomNomi: "Dimlama",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://djakbar.ucoz.com/Foto/samsa2.jpg",
      taomNomi: "Somsa",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://odam.uz/upload/media/entries/2017-08/28/1172-1-583bca9a2209c668c563025768189564.jpg",
      taomNomi: "Shashlik",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://zira.uz/wp-content/uploads/2018/01/hanum2-11.jpg",
      taomNomi: "O'rama",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://www.trtavaz.com.tr/uploads/photos/2021/04/20/d96c77d21c6b41809f9de035aa920a00.jpg?w=640",
      taomNomi: "Palov",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
    {
      imgLink: "https://taqi.uz/uploads/posts/2018-03/1521455930_1490024043_foto1.jpg",
      taomNomi: "Sumalak",
      title:
        "Qo'llanilgan masalliqlar: Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      narxi: "10 000",
    },
  ],
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "TAOM_QO'SH":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
          },
        ],
      };

      default: return state;
  }

};

const store = createStore(reducer);

export default store;
