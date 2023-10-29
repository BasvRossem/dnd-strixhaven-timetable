import { PossibleLanguages } from "./languageStrings";

const schools = ["Witherbloom", "Prismari", "Lorehold", "Quandrix", "Silverquill"]
export const characters = ["Branemin", "Sinnek", "Elanys", "Farreth", "Pri'n ter"]
export const oldCharacters = ["Pri'n ter"]

const courseNames = [
  { en: "Arcano-botany for Beginners", nl: "Geheimzinnige Plantkunde voor Beginners" },
  { en: "Magic Physiologies", nl: "Betoverende Fysiologieën", },
  { en: "History of Magic and Art", nl: "Verleden van Tover- en kunst", },
  { en: "Introduction to Archaeomancy", nl: "Invoering tot Ouderwetskunde", },
  { en: "Beginning Computational Magic", nl: "Aanvangende Rekenkundige Magie", },
  { en: "Beginning Inkomancy", nl: "Aanvangende Inktkunde", },
  { en: "Basic Magical Auras", nl: "Basische Toverkrachtige Uitstralingen" }
]

export class Course {
  private selectedLanguage: PossibleLanguages = "en";

  constructor(private _name: { en: string, nl: string }, public school: string, public day: number, public time: number, public characters: string[]) {
  }

  get name() {
    return this._name[this.selectedLanguage];
  }

  setSelectedLanguage(language: PossibleLanguages): this {
    this.selectedLanguage = language;
    return this;
  }

  static byName(name: string): Course | undefined {
    return courses.filter(course => course.name == name)[0];
  };
}

export const courses = [
  new Course(courseNames[0], schools[0], 0, 9, ["Branemin", "Sinnek", "Elanys"]),
  new Course(courseNames[1], "", 1, 9, characters),
  new Course(courseNames[2], schools[1], 2, 13, ["Sinnek", "Farreth"]),
  new Course(courseNames[3], schools[2], 3, 9, ["Sinnek", "Branemin", "Pri'n ter", "Elanys"]),
  new Course(courseNames[4], schools[3], 3, 13, ["Sinnek", "Pri'n ter"]),
  new Course(courseNames[5], schools[4], 4, 9, ["Sinnek", "Farreth", "Pri'n ter"]),
  new Course(courseNames[6], "", 4, 13, ["Prin'n ter", "Farreth", "Elanys", "Sinnek"]),
]