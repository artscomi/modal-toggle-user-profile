import React, { Dispatch, SetStateAction, useRef } from "react";

export const Form: React.FC<{
  setSize: Dispatch<SetStateAction<number>>;
}> = ({ setSize }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef?.current?.value) {
      setSize(parseInt(inputRef?.current.value));
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="userSize" className="form_label">
        Set the number of users you want to display:
      </label>
      <input
        ref={inputRef}
        placeholder=""
        type="number"
        name="userSize"
        id="userSize"
      />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};
