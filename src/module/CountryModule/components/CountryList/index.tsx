"use client";
import { List } from "@/components/List";
import { CountryCard } from "@/module/CountryModule/components/CountryCard";
import { Country } from "@/types";
import React, { useState } from "react";

interface Props {
  countryList: Country[];
}

export const CountryList = ({ countryList }: Props) => {
  const [currentItems, setCurrentItems] = useState(countryList);

  const onRemove = (removedItem: Country) => {
    setCurrentItems(
      currentItems.filter((item) => item.iso_code3 !== removedItem.iso_code3)
    );
  };

  return (
    <List
      items={countryList}
      getItemId={(item) => item.iso_code3}
      onRemove={onRemove}
      renderItem={(country) => (
        <CountryCard key={country.iso_code3} country={country} />
      )}
    />
  );
};
