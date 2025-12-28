import React, { useState, useRef, useEffect, useMemo } from "react";
import "./Timeline.css";

const AutocompleteSelect = ({
  options = [],
  value = null,
  onChange = () => {},
  placeholder = "Seçiniz...",
  getOptionLabel = (option) => option?.label || option?.name || String(option),
  getOptionValue = (option) => option?.value || option?.id || option,
  filterOptions = (options, inputValue) => {
    if (!inputValue) return options;
    const lowerInput = inputValue.toLowerCase();
    return options.filter((option) => {
      const label = getOptionLabel(option).toLowerCase();
      return label.includes(lowerInput);
    });
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Seçili değerin label'ını bul (her render'da yeniden hesaplamayı önlemek için)
  // getOptionValue ve getOptionLabel'ı dependency'den çıkarıyoruz çünkü her render'da yeni fonksiyon olabilir
  const selectedOption = useMemo(() => {
    return options.find((opt) => getOptionValue(opt) === value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, value]);
  
  const displayValue = useMemo(() => {
    return selectedOption
      ? getOptionLabel(selectedOption)
      : inputValue || placeholder;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption, inputValue, placeholder]);

  // Input değiştiğinde filtrele
  useEffect(() => {
    if (isOpen) {
      const filtered = filterOptions(options, inputValue);
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
    // filterOptions'ı dependency'den çıkarıyoruz çünkü her render'da yeni fonksiyon olabilir
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, isOpen, options]);

  // Dışarı tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setInputValue("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
  };

  const handleSelect = (option) => {
    const optionValue = getOptionValue(option);
    onChange(optionValue, option);
    setInputValue("");
    setIsOpen(false);
  };

  const handleFocus = () => {
    setIsOpen(true);
    if (selectedOption) {
      setInputValue(getOptionLabel(selectedOption));
    }
  };

  const handleBlur = () => {
    // Input blur olduğunda hemen kapatma, click outside ile kapatılacak
    setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
        if (selectedOption) {
          setInputValue("");
        }
      }
    }, 200);
  };

  return (
    <div className="autocomplete-select-container" ref={containerRef}>
      <div
        className={`autocomplete-select-input ${isOpen ? "open" : ""}`}
        onClick={() => {
          setIsOpen(!isOpen);
          inputRef.current?.focus();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? inputValue : displayValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="autocomplete-select-input-field"
        />
        <span className="autocomplete-select-arrow">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {isOpen && (
        <div className="autocomplete-select-dropdown">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => {
              const optionValue = getOptionValue(option);
              const optionLabel = getOptionLabel(option);
              const isSelected = optionValue === value;

              return (
                <div
                  key={index}
                  className={`autocomplete-select-option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                  onMouseDown={(e) => e.preventDefault()} // Blur'u engelle
                >
                  {optionLabel}
                </div>
              );
            })
          ) : (
            <div className="autocomplete-select-no-results">
              Sonuç bulunamadı
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutocompleteSelect;

