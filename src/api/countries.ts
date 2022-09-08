import axios from "axios";

import { ObjCountry } from "../types";

//
const base_url = "https://restcountries.com/v3.1/";

//
export const API_CountryAll_L = () =>
  axios.get<ObjCountry[]>(`${base_url}/all`, {});

export const API_CountryRegion_L = (region: string) =>
  axios.get<ObjCountry[]>(`${base_url}/region/${region}`, {});

export const API_Country_R = (name: string) =>
  axios.get<ObjCountry[]>(`${base_url}/name/${name}`, {});
