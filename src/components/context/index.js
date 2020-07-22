import React, {Component} from 'react'

const PizzaContext = React.createContext()
export const Consumer = PizzaContext.Consumer;

export class Provider extends Component {
  state = {
    pizzas: [],
    selectedPizza: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(pizzas => {
      this.setState({pizzas})
    })
  }

  fetchHelper = () => {
    fetch("http://localhost:3000/pizzas")
   .then(r => r.json())
   .then(pizzas => {
     this.setState({pizzas})
   })
  }

  handleEditPizza = (idx) => {
    this.setState({selectedPizza: idx})
    console.log(idx)
  }

  handlePatchPizza = (obj) => {
    fetch(`http://localhost:3000/pizzas/${obj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(r => r.json())
    .then(this.fetchHelper)
  }

  render() {
    return (
      <PizzaContext.Provider value={{
        pizzas: this.state.pizzas,
        selectedPizza: this.state.selectedPizza,
        actions: {
          editPizza: this.handleEditPizza,
          patchPizza: this.handlePatchPizza
        }
      }}>
        {this.props.children}
      </PizzaContext.Provider>
    )
  }
}
