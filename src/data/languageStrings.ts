export type PossibleLanguages = "en" | "nl";

type Language = {
    language: string;
    days: string[];
    selectName: string;
    optionsAndFilters: string;
}

const english: Language = {
    language: "English",
    days: ["Sunyad", "Monyad", "Tuesyad", "Wednessyad", "Thursyad", "Friyad", "Saturyad"],
    selectName: "Select a name",
    optionsAndFilters: "Options and filters"
} 

const dutch: Language = {
    language: "Nederlands",
    days: ["Zongad", "Maangad", "Dinsgad", "Woensgad", "Dondergad", "Vrijgad", "Zatergad"],
    selectName: "Selecteer een naam",
    optionsAndFilters: "Opties en filters"
}

export const languages: {[key: string]: Language} = {
    "en": english,
    "nl": dutch
}