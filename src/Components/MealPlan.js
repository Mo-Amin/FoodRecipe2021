import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
// NOT IDEAL, only import each component used, NOT the entire library. Fix this later
//https://react-bootstrap.github.io/components/modal/ not sure why its not working
import { Button, Modal } from 'react-bootstrap';
import { Component } from "react";
//import axios from "axios";

import "./mealplan.css";
let MoApiKey = "30e7963687fd483793f6d573f5db5d16";
let number = 100;
let offset = 0;
export default class MealPlan extends Component {
  state = { data: [], setShow: false };

  handleClose = () => this.setState({setShow: false});
  handleShow = () => this.setState({setShow: true});

  async componentDidMount() {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MoApiKey}&number=${number}&offset=${offset}`;
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

  render() {
    return (
      // modal below
      //For modal I used the react bootstrap docs NOT the normal bootstrap //https://react-bootstrap.github.io/components/modal/
      <div>
        <Button variant="primary" onClick={this.handleShow}>
        Filter Meals
        </Button>
        <Modal
        show={this.state.setShow}
        onHide={this.handleClose}
        keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>Save</Button>
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
