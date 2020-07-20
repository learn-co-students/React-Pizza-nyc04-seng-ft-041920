import React from "react"

const Pizza = ({topping, size, vegetarian, id, editPizza}) => {
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => editPizza(id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
