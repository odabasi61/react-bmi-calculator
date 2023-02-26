import { useState } from "react";

function App() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // show image based on bmi result
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 20) {
      imgSrc = require("../src/assets/underweight.png");
    } else if (bmi >= 20 && bmi < 25) {
      imgSrc = require("../src/assets/healthy.png");
    } else {
      imgSrc = require("../src/assets/overweight.png");
    }
  }

  let calBmi = (e) => {
    e.preventDefault();

    if (!weight || !height || isNaN(weight) || isNaN(height)) {
      alert("Please enter a valid number for weight and height!");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(2));

      if (bmi < 20) {
        setMessage("You are underweight.");
      } else if ((bmi >= 20) & (bmi < 25)) {
        setMessage("Your weight is normal.");
      } else {
        setMessage("You are overweight!");
      }
    }
  };

  let reset = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (KG)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (CM)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reset}>
              Reset
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="image-container">
          <img src={imgSrc} alt={message} />
        </div>
      </div>
    </div>
  );
}

export default App;
