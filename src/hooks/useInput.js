import { useState } from "react";

function useInput(initialState, validationRules) {
  const [value, setValue] = useState(() => {
    if (typeof initialState === "function") return initialState();
    return initialState;
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    // validation
    const inputName = e.target.name || "Input";
    if (validationRules.required && e.target.value == "") {
      setError(`${inputName.toUpperCase()} CANNOT BE EMPTY`);
      return;
    }
    if (e.target.value.length < validationRules.minLength) {
      setError(
        `${inputName.toUpperCase()} CANNOT BE LESS THAN ${
          validationRules.minLength
        } CHARACTER(S)`
      );
      return;
    }
    // if (!validationRules.pattern.test(e.target.value)) {
    //   setError("pattern tidak cocok");
    // }
    setError("");
  };

  const reset = () => {
    setError("");
    setValue(() => {
      if (typeof initialState === "function") return initialState();
      return initialState;
    });
  };

  return { value, onChange, isValid: !error, error, reset };
}

export default useInput;
