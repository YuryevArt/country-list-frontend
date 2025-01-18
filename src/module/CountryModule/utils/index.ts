import { Country } from "@/types";

export const normalizeCountry = (country: Country) => ({
  ...country,
  flag_url: country.flag_url && `https:${country.flag_url}`,
});
