import { getCountryUrl } from "@/config";
import { Country } from "@/types";
import React from "react";

import { CountryList } from "@/module/CountryModule/components/CountryList";
import axios from "axios";
import { normalizeCountry } from "@/module/CountryModule/utils";

export const CountryModule = async () => {
  const { data } = await axios.get<Country[]>(getCountryUrl);
  const countryList = data.map(normalizeCountry);

  return <CountryList countryList={countryList} />;
};
