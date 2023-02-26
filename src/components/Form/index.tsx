import React, { useState, Dispatch, SetStateAction } from "react";

export const Form: React.FC<{
  setSize: Dispatch<SetStateAction<number>>;
}> = ({ setSize }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSize(parseInt(value, 0));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userSize" className="displayBlock marginBottomM">
          Set the number of users you want to display:
        </label>
        <input
          placeholder=""
          type="number"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          name="userSize"
          id="userSize"
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </>
  );
};
