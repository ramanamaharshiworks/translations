import { Translation, Work } from "./types";
import { ulladu_narpadu_mjames_es  } from "src/translations/ulladu-narpadu.mjames.es";
import { ulladu_narpadu_mjames_en  } from "src/translations/ulladu-narpadu.mjames.en";
import { ulladu_narpadu_tamil } from "src/translations/ulladu-narpadu.tamil";
import { nan_yar_mjames_en } from "src/translations/nan-ar.mjames.en";
import { nan_yar_mjames_es } from "src/translations/nan-ar.mjames.es";

const works:Work[] = [
  { id : "ulladu-narpadu", name: "Ulladu Narpadu", selected: false },
  { id : "nan-yar", name: "Nāṉ Ār?", selected: false }
];

const translations:Translation[] = [
  ulladu_narpadu_mjames_es(),
  ulladu_narpadu_mjames_en(),
  ulladu_narpadu_tamil(),
  nan_yar_mjames_en(),
  nan_yar_mjames_es()
];

export { translations, works };
