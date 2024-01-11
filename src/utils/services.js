import router from "@/router";
import axios from "axios";

export function goto(path) {
  router.push(`/${path}`);
}

export function getTheme(theme) {
  const themes = {
    water: {
      color_theme_1: "#103a4d",
      color_theme_2: "#103a4d1f",
      color_theme_3: "#e9f8fe",
      background_url: "water-pattern.png",
    },
    surf: {
      color_theme_1: "#268a02",
      color_theme_2: "#FBF6EE",
      color_theme_3: "#C1F2B0",
      background_url: "surf-pattern.png",
    },
    snow: {
      color_theme_1: "#446473",
      color_theme_2: "#f3f5f6",
      color_theme_3: "#e9f8fe",
      background_url: "snow-pattern.png",
    },
    nature: {
      color_theme_1: "#4d5443",
      color_theme_2: "#103a4d1f",
      color_theme_3: "#fefee9",
      background_url: "nature-pattern.png",
    },
    desert: {
      color_theme_1: "#b98153",
      color_theme_2: "#103a4d1f",
      color_theme_3: "#fefee9",
      background_url: "desert-pattern.png",
    },
  };
  return themes[theme];
}


// export async function getGuide(id) {
//   const response= await axios.get("/guidesjson/all.json")
//   const allGuides = response.data;
//   console.log(allGuides.find((guide) => guide.id == id))
//   return allGuides.find((guide) => guide.id == id);
// }
