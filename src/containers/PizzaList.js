import React, { Component } from 'react';
import Pizza from '../components/Pizza'
import {Consumer} from '../components/context'

class PizzaList extends Component {

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
        <tbody>
          <Consumer>
            {({pizzas}) => (
              <React.Fragment>
                {pizzas.map((pizza, index) =>
                  <Pizza
                    key={pizza.id.toString()}
                    index={index}
                  />
                )}
              </React.Fragment>
            )}
          </Consumer>
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
