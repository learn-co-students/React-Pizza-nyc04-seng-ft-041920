import React, { Component } from "react";
import Pizza from "../components/Pizza";
class PizzaList extends Component {
  state = {
    pizzas: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then((resp) => resp.json())
      .then((pizzas) => {
        this.setState({
          pizzas: pizzas,
        });
      });
  }

  fillForm = (pizza) => {
    // console.log(pizza);
    this.props.fillForm(pizza);
  };

  renderPizzas() {
    return this.state.pizzas.map((pizza) => {
      return <Pizza fillForm={this.fillForm} pizza={pizza} />;
    });
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{this.renderPizzas()}</tbody>
      </table>
    );
  }
}

export default PizzaList;
