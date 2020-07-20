import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    topping: "",
    size: "",
    vegetarian: false,
    id: 1,
  };

  updateForm = (property, value) => {
    this.setState({
      [property]: value,
    });
  };
  fillForm = (pizza) => {
    // console.log("piZZZZAAA", pizza);
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      id: pizza.id,
    });
  };

  formSubmission = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((resp) => resp.json())
      .then((pizza) => {
        console.log(pizza);
      });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          pizza={this.state}
          updateForm={this.updateForm}
          formSubmission={this.formSubmission}
        />
        <PizzaList fillForm={this.fillForm} />
      </Fragment>
    );
  }
}

export default App;
