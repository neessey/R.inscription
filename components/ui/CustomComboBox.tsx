import { useState } from "react";

interface CustomComboBoxProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function CustomComboBox({ label, options, value, onChange }: CustomComboBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="block mb-1 text-xl font-semibold text-black">{label}</label>
      <div
        className="border rounded px-4 py-2 bg-white cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Sélectionner..."}
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto border bg-white rounded shadow">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
