import React from "react";

const Pizza = (props) => {
  const { topping, size, vegetarian } = props.pizza;

  const updateForm = () => {
    // console.log(props.pizza);
    props.fillForm(props.pizza);
  };

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian.toString()}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={updateForm}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
