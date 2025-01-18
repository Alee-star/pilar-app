import React from "react";

export interface DatePickerProps {
  placeholder?: string;
  onChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ placeholder, onChange }) => {
  return (
    <div className="flex">
      <div className="relative w-full">
        <input
          className="block w-full border bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 rounded-lg p-2.5 text-sm h-[42.3px]"
          type="date"
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
