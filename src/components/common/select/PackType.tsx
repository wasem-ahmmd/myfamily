import React, { useState, forwardRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";


const PackType = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (value : string) => {
    setSelectedOption(value);
    
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger>{selectedOption? selectedOption : " Select..."}</SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-white cursor-pointer">
          <SelectItem value="local" className="cursor-pointer">
           Local
          </SelectItem>
          <SelectItem value="international" className="cursor-pointer">
            InterNational
          </SelectItem>
          <SelectItem value="coustom" className="cursor-pointer">
            Coustom
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PackType;
