export type PossibleLanguages = "en" | "nl";

type Language = {
  language: string;
  days: string[];
  selectName: string;
  optionsAndFilters: string;
  includeOldCharacters: string;
}

const english: Language = {
  language: "English",
  days: ["Sunyad", "Monyad", "Tuesyad", "Wednessyad", "Thursyad", "Friyad", "Saturyad"],
  selectName: "Select a name",
  optionsAndFilters: "Options and filters",
  includeOldCharacters: "Include old characters"
}

const dutch: Language = {
  language: "Nederlands",
  days: ["Zongad", "Maangad", "Dinsgad", "Woensgad", "Dondergad", "Vrijgad", "Zatergad"],
  selectName: "Selecteer een naam",
  optionsAndFilters: "Opties en filters",
  includeOldCharacters: "Inclusief oude personages"
}

export const languages: { [key: string]: Language } = {
  "en": english,
  "nl": dutch
}