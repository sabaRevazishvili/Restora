// src/components/ui/Input.jsx
import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  required = false,
  options = [],
  className = "",
}) => {
  const inputBaseStyles =
    "w-full bg-surface-card border py-3 px-4 text-text-primary rounded-sm transition-colors placeholder:text-text-secondary/50 focus:outline-none focus:border-gold";
  const borderStyles = error ? "border-red-500" : "border-border-subtle";

  const inputProps = {
    name,
    placeholder,
    className: `${inputBaseStyles} ${borderStyles} ${className}`,
    ...(register ? register(name, { required }) : {}),
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-text-secondary font-sans text-sm mb-2 uppercase tracking-tighter">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          rows="6"
          {...inputProps}
          className={`${inputProps.className} resize-none`}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            {...inputProps}
            className={`${inputProps.className} appearance-none`}
          >
            <option value="">{placeholder || "Select an option"}</option>
            {options.map((opt) => (
              <option
                key={typeof opt === "string" ? opt : opt.value}
                value={typeof opt === "string" ? opt : opt.value}
              >
                {typeof opt === "string" ? opt : opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      ) : (
        <input type={type} {...inputProps} />
      )}

      {error && (
        <span className="text-red-500 text-xs mt-1 block font-sans">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
