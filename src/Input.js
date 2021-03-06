import svgImage from "./icon-arrow.svg";

const Input = ({ setIpAddress, details, value, _setValue }) => {

  const inputHandler = (e) => {
    e.preventDefault();
    _setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIpAddress(value);
    _setValue('')
  };

  return (
    <form onSubmit={submitHandler} className="input-wrapper">
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        placeholder="Search for any IP address or domain"
      />

      <button className="btn">
        <img className="svg" src={svgImage} alt="" />
      </button>
    </form>
  );
};

export default Input;
