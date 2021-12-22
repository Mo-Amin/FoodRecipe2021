import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";

export default class CaloricMaintenance extends Component {
  handleSubmit(event) {
    console.log(event);

    console.log(event.target);

    let calories = 0;
    //User is male
    if (event.target[1].checked) {
      calories =
        10 * (Number(event.target[5].value) * 0.453592) +
        6.25 *
          ((12 * Number(event.target[3].value) +
            Number(event.target[4].value)) *
            2.54) -
        5 * Number(event.target[0].value) +
        5;
    }
    //User is female
    else {
        calories =
        10 * (Number(event.target[5].value) * 0.453592) +
        6.25 *
          ((12 * Number(event.target[3].value) +
            Number(event.target[4].value)) *
            2.54) -
        5 * Number(event.target[0].value) -
        161;
    }

    if (event.target[6].value === "sedentary") calories *= 1.55;
    else if (event.target[6].value === "moderatelyActive") calories *= 1.85;
    else if (event.target[6].value === "vigorouslyActive") calories *= 2.2;
    else if (event.target[6].value === "extremelyActive") calories *= 2.4;

    console.log(calories);

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>CaloricMaintenance</h1>
        <div className="centerForm">
          <h1>Calorie Calculator</h1>
          <form onSubmit={this.handleSubmit}>
            {/* Source: https://getbootstrap.com/docs/5.0/forms/overview/ --> All of them from bootstrap All copy & paste*/}
            {/*
                  Not a fan of the <h6 tag> for each section (Age, Gender, Height, etc) but not sure how else to approach it atm. 
                  */}
            {/* This is Age 
                  Not sure how to change the size of the input group. It takes the whole line which is much different from the prototype design
              */}
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                <strong>Age</strong>
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Years"
              />
            </div>
            {/* This is Gender */}
            <h6>
              <strong>Gender</strong>
            </h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            {/* This is height
             */}
            <h6>
              <strong>Height</strong>
            </h6>
            <div className="input-group">
              <input
                type="text"
                aria-label="feet"
                className="form-control"
                placeholder="feet"
              />
              <input
                type="text"
                aria-label="inches"
                className="form-control"
                placeholder="inches"
              />
            </div>
            {/* This is weight */}
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">
                <strong>Weight</strong>
              </label>
              <input
                type="number"
                className="form-control"
                id="weight"
                placeholder="lbs"
              />
            </div>
            {/* This is Physical Activity Level
                  Not sure how to get rid of 'Choose Option' once user clicks the drop-down
                  It was the same in Bootstrap docs
              */}
            <h6>
              <strong>Physical Activity Level</strong>
            </h6>
            <select
              className="form-select"
              aria-label="Physical Activity Level drop-down"
            >
              <option name="ChooseOption" value="ChooseOption">
                Choose Option
              </option>
              <option name="sedentary" value="sedentary">
                Sedentary
              </option>
              <option name="moderatelyActive" value="moderatelyActive">
                Moderately Active
              </option>
              <option name="vigorouslyActive" value="vigorouslyActive">
                Vigorously Active
              </option>
              <option name="extremelyActive" value="extremelyActive">
                Extremely Active
              </option>
            </select>
            {/* This is Goal 
                  Not sure why the text is far away from the radio button. It's not like that in the docs
              */}
            <h6>
              <strong>Goal</strong>
            </h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="goal"
                value="surplus"
                id="surplus"
              />
              <label className="form-check-label" htmlFor="surplus">
                Surplus
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="goal"
                id="deficit"
                value="deficit"
              />
              <label className="form-check-label" htmlFor="deficit">
                Deficit
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="goal"
                value="maintainWeight"
                id="maintainWeight"
              />
              <label className="form-check-label" htmlFor="maintainWeight">
                Maintain weight
              </label>
            </div>
            {/* This is submit */}
            <button type="submit" className="mt-3 btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
