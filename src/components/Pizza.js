import React from "react"
import {Consumer} from "./context"

const Pizza = ({index}) => {

  return(
    <Consumer>
      {({pizzas, actions}) =>
        <tr>
          <td>{pizzas[index].topping}</td>
          <td>{pizzas[index].size}</td>
          <td>{pizzas[index].vegetarian ? "Yes" : "No"}</td>
          <td><button type="button" className="btn btn-primary" onClick={() => actions.editPizza(pizzas[index])}>Edit Pizza</button></td>
        </tr>
      }
    </Consumer>

  )
}

export default Pizza
