import React, { Component } from "react"
// import { render } from "react-dom"

class PizzaForm extends Component {
  // state = {
  //   topping: '',
  //   size: '',
  //   vegetarian: ''
  // }


  render() {
    // const  {topping, size, vegetarian} = this.props.pizzaToEdit
    const handleFormChange = this.props.handleFormChange
    const handleSubmit = this.props.handleSubmit

    return(
      <div>
        <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
            value={this.props.topping} name="topping" onChange={(e)=>handleFormChange(e)}/>
        </div>
        <div className="col">
          <select value={this.props.size} name="size" onChange={(e)=>handleFormChange(e)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" onChange={(e)=>handleFormChange(e)} type="radio" value="true" checked={this.props.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" onChange={(e)=>handleFormChange(e)} type="radio" value="false" checked={!this.props.vegetarian ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
      </div>
      </div>
    );
  }

}

export default PizzaForm
