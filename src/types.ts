import { default_obj_country_from_list } from "./default/country";

export type ObjCountry = typeof default_obj_country_from_list;

export type handleSearchType = (value: string) => void
export type handleFilterType = (region: string) => void
