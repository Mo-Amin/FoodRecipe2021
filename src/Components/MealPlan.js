import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
//import axios from "axios";

import "./mealplan.css";
let MoapiKey = "30e7963687fd483793f6d573f5db5d16";
let number = 100;
let offset = 0;
export default class MealPlan extends Component {
  state = { data: [] };

  async componentDidMount() {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoapiKey}&number=${number}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.results });
    console.log(data.results);

    /*
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoapiKey}&number=${number}&offset=${offset}`
      )
      .then(function (response) {
        //console.log(response.data);
        this.setState({ data: response.data });
      });
    */
  }
  /*
  image() {
    if (this.state.data !== null) {
      console.log(this.state.data);
    }
  }
  */

  handleClick(event) {
    console.log(event);
  }
  render() {
    return (
      <div className="foodimages">
        {this.state.data.map((item, i) => (
          <button id={item.id} onClick={this.handleClick}>
            <img alt={item.title} src={item.image} />
            <p>{item.title.substring(0, 10)}</p>
          </button>
        ))}
      </div>
    );
  }
}
