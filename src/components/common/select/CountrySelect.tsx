"use client";
import React, { useEffect, useState, forwardRef } from "react";
import Select, { SingleValue } from "react-select";

interface Country {
  value: string;
  label: string;
}
const CountrySelect =  forwardRef(({ value, onChange }: { value: string; onChange: (value: string) => void }, ref:any) => {
  const [countries, setCountries] = useState<Country[]>([]);
 

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);

  const handleChange = (selectedOption: SingleValue<Country>) => {
    onChange(selectedOption ? selectedOption.label : "");
  };
  return (
    <Select
      options={countries}
      value={countries?.find((country) => country.label === value) || null}
      onChange={handleChange}
      ref={ref}
      instanceId="country-select"
      aria-labelledby="country-select-label"
      aria-live="polite"
    />
  );
});

export default CountrySelect;
