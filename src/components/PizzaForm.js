import React from "react";
import Pizza from "./Pizza";

const PizzaForm = (props) => {
  // console.log(props);

  const onChangeHandler = (event) => {
    props.updateForm(event.target.name, event.target.value);
  };

  const senadaForm = () => {
    props.formSubmission();
  };

  return (
    <div className="form-row">
      <div className="col-5">
        <input
          onChange={onChangeHandler}
          type="text"
          name="topping"
          className="form-control"
          placeholder="Pizza Topping"
          value={
            //Pizza Topping Should Go Here
            props.pizza.topping
          }
        />
      </div>
      <div className="col">
        <select
          name="size"
          value={props.pizza.size}
          className="form-control"
          onChange={onChangeHandler}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
            onChange={onChangeHandler}
            className="form-check-input"
            type="radio"
            name="Vegetarian"
            value="Vegetarian"
            checked={props.pizza.vegetarian}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
            onChange={onChangeHandler}
            className="form-check-input"
            type="radio"
            name="notVegetarian"
            value="Not Vegetarian"
            checked={!props.pizza.vegetarian}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={senadaForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PizzaForm;
