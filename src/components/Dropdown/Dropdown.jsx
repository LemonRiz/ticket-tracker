import React from "react";

const Dropdown = (props) => {
  const { label, selectedRole, handleSelector } = props;
  return (
    <div>
      <label for="roles" className="roles">
        Choose a job role:
      </label>

      <select
        name="roles"
        id="roles"
        onChange={handleSelector}
        value={selectedRole}
      >
        <option value="">Choose!</option>
        <option value="Junior Software Developer">
          Junior Software Developer
        </option>
        <option value="Software Developer">Software Developer</option>
        <option value="Senior Software Developer">
          Senior Software Developer
        </option>
        <option value="Project Manager">Project Manager</option>
        <option value="Tester">Tester</option>
        <option value="Hard Man">Hard Man</option>
      </select>
    </div>
  );
};

export default Dropdown;
