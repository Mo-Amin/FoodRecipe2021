import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import axios from "axios";
let MoapiKey = "30e7963687fd483793f6d573f5db5d16";
let number = 100;
let offset = 0;
export default class MealPlan extends Component {
  componentDidMount() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoapiKey}&number=${number}&offset=${offset}`
      )
      .then(function (response) {
        console.log(response.data);
      });
  }

  render() {
    return (
      <div>
        <h1>Meal Plan</h1>
      </div>
    );
  }
}
