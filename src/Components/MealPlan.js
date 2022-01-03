import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
//https://react-bootstrap.github.io/components/modal/
import { Button, Modal } from "react-bootstrap";
import { Component } from "react";
//https://react-select.com/home
import Select from "react-select";
//import axios from "axios";

import "./mealplan.css";
let MoApiKey = "30e7963687fd483793f6d573f5db5d16";
let number = 100;
let offset = 0;

//not sure how to expand this array below, or should do a design change?
const options = [
  { value: "eggs", label: "Eggs" },
  { value: "tomato", label: "Tomato" },
  { value: "cheese", label: "Cheese" },
  { value: "rice", label: "Rice" },
];

export default class MealPlan extends Component {
  state = {
    data: [],
    setShow: false,
    ingredientsExcluded: [],
  };

  handleClose = () => this.setState({ setShow: false });
  handleShow = () => this.setState({ setShow: true });
  handleChange = (ingredientsExcluded) =>
    this.setState({ ingredientsExcluded });
  reset = () => {
    this.setState({ ingredientsExcluded: [] });
    this.handleClose();
  };
  filter = () => {
    // const response = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoApiKey}&number=${number}&offset=${offset}&excludeIngredients=${this.returnExcludeIngredientsFormat()}`);
    // const data =  response.json();
    // this.setState({ data: data.results });
    this.handleClose();
  };
  returnExcludeIngredientsFormat() {
    let ingredientsExcluded = "";
    for (let i = 0; i < this.state.ingredientsExcluded.length; ++i) {
      ingredientsExcluded += this.state.ingredientsExcluded[i].value + ",";
    }
    return ingredientsExcluded;
  }

  fetchAPI = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoApiKey}&number=${number}&offset=${offset}&excludeIngredients=${this.returnExcludeIngredientsFormat()}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.results });
    console.log(data.results);
  };
  componentDidMount() {
    this.fetchAPI();
    /*
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoApiKey}&number=${number}&offset=${offset}&excludeIngredients=${this.returnExcludeIngredientsFormat()}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.results });
    console.log(data.results);
    */

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
      // modal below
      //For modal I used the react bootstrap docs NOT the normal bootstrap //https://react-bootstrap.github.io/components/modal/
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Filter Meals
        </Button>
        <Button variant="secondary" onClick={this.test}>
          TEST
        </Button>
        <Modal
          show={this.state.setShow}
          onHide={this.handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filter Meal Plans</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Select
              options={options}
              placeholder="Ingredients Excluded"
              isMulti
              isSearchable
              onChange={this.handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.reset}>
              Reset
            </Button>
            <Button variant="primary" onClick={this.filter}>
              Filter
            </Button>
          </Modal.Footer>
        </Modal>

        {/* //index.js:1 Warning: Each child in a list should have a unique "key" prop. */}
        <div className="foodimages">
          {this.state.data.map((item, i) => (
            <button>
              <img alt={item.title} src={item.image} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}
