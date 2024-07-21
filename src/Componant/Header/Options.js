
function OptionsSelect() {
  return (
    <div className="option-parent">
    <div className="option-Country">
      <h1>Select an Country</h1>
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
    <div className="option-City">
      <h1>Select an City</h1>
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
    </div>
  );
}

export default OptionsSelect;
