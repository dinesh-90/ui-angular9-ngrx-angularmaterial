export interface Country {
  id: number;
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  altSpellings: Array<string>;
  callingCodes: Array<string>;
  region: string;
  subregion: string;
  population: number;
  latlng: Array<string>;
  demonym: string;
  area: number;
  gini: number;
  timezones: Array<string>;
  borders: Array<string>;
  nativeName: string;
  numericCode: string;
  currencies: Array<Currency>;
  languages: Array<Language>;
  cioc: string;
  flag: string;
  regionalBlocs: Array<RegionalBlocs>;
  translations: any;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBlocs {
  acronym: string;
  name: string;
  otherAcronyms: Array<string>;
  otherNames: Array<string>;
}
