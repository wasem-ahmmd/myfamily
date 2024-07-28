"use client";
import * as z from "zod";
import React, { useState, useEffect } from "react";
import { Controller, SubmitHandler, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CountrySchema } from "@/schemas";
import Select, { SingleValue } from "react-select";
import AuthCard from "../common/auth/AuthCard";
import { Button } from "../ui/button";

interface Country {
  name: {
    common: string;
  };
}

interface CountryOption {
  value: string;
  label: string;
}
interface FormInputs {
  country: string;
}

const CreateCountry = () => {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<SingleValue<CountryOption>>(null);

  useEffect(() => {
    // Fetch all countries from the REST Countries API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data: Country[] = await response.json();
        const options: CountryOption[] = data.map((country) => ({
          value: country.name.common,
          label: country.name.common,
        }));
        setCountries(options);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [countries, selectedCountry]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(CountrySchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  const handleCountryChange = (selectedOption: SingleValue<CountryOption>) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <AuthCard
      padingtop="pt-1 xsm:w-[750px] mb-3 "
      headerLabel="Create New Country"
      innerwidth="lg:max-w-lg"
    >
      <form
        className=" text-sm text-black font-500 font-sans dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
        <Controller
            name="country"
            control={control}
            render={({ field }) => (
                <>
                <Select
                  {...field}
                  value={countries.find(option => option.value === field.value)} // Find and set the selected value
                  onChange={(option) => {
                    field.onChange(option ? option.value : ''); // Update react-hook-form
                    handleCountryChange(option); // Update local state
                  }}
                  options={countries}
                  placeholder="Select a country"
                  instanceId="country-select"
                  aria-labelledby="country-select-label"
                  aria-live="polite"
                />
                {/* Display error message */}
                
              </>
              
            )}
            
          />
          {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country? "country is" : ""}</p>
                )}
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="bg-B-blue w-full sm:w-auto text-white font-sans"
            >
              Create Country
            </Button>
          </div>
        </div>
      </form>
    </AuthCard>
  );
};

export default CreateCountry;
