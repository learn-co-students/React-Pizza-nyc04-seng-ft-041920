import React from "react"
import {Consumer} from './context'

const PizzaForm = () => {
  const pizzaTopping = React.createRef()
  const pizzaSize = React.createRef()
  const pizzaIsVegetarian = React.createRef()

  return(
      <Consumer>
        {({selectedPizza, actions}) =>{
          const handleSubmit = (e) => {
            e.preventDefault()
            const obj = {
              id: selectedPizza.id,
              topping: pizzaTopping.current.value,
              size: pizzaSize.current.value,
              vegetarian: pizzaIsVegetarian.current.value
            }
            actions.patchPizza(obj)
          }
          return (
              <form onSubmit={handleSubmit} className="form-row">
              <div className="col-5">
                  <input type="text"
                    className="form-control" placeholder={selectedPizza.topping}
                    onChange={e => console.log(e.target.value)}
                    defaultValue={selectedPizza.topping}
                    ref={pizzaTopping}/>
              </div>
              <div className="col">
                <select
                  // issue here where it doesn't really grab the size to change on the dropdown
                  // need to figure out the best way to approach this
                  ref={pizzaSize}
                  className="form-control">
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Vegetarian"
                    defaultValue={true}
                    ref={pizzaIsVegetarian}
                    checked={selectedPizza.vegetarian ? true : null}
                  />
                  <label className="form-check-label">
                    Vegetarian
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Vegetarian"
                    defaultValue={false}
                    ref={pizzaIsVegetarian}
                    checked={!selectedPizza.vegetarian ? true : null}
                  />
                  <label className="form-check-label">
                    Not Vegetarian
                  </label>
                </div>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </form>
          )
        }}
      </Consumer>

  )
}

export default PizzaForm
