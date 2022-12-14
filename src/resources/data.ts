import { Translation, Work } from "./types";
import { ulladu_narpadu_mjames_es  } from "src/translations/ulladu-narpadu.mjames.es";
import { ulladu_narpadu_mjames_en  } from "src/translations/ulladu-narpadu.mjames.en";

const works:Work[] = [
  { id : "ulladu-narpadu", name: "Ulladu Narpadu", selected: false },
];

const translations:Translation[] = [
  ulladu_narpadu_mjames_es(),
  ulladu_narpadu_mjames_en()
];

export { translations, works };
