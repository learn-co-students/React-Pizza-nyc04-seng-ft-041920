import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state= {
    pizzas: [],
    pizzaToEdit: "",
    topping: "",
    size: "",
    vegetarian: null
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
    .then(r => r.json())
    .then(pizzas => this.setState({pizzas}))
  }

  editPizza = (id) => {
    const pizza = this.state.pizzas.find(pizza => pizza.id === id)
    console.log(pizza)
    this.setState({
      pizzaToEdit: pizza,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updatePizza = () => {
    const id = this.state.pizzaToEdit.id 
    const body = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(updatedPizza => {
      const updatedPizzaList = this.state.pizzas.map(pizza => {
        if (pizza.id === id){
          return updatedPizza
        }
        else{
          return pizza
        }
      })
      this.setState({
        pizzas: updatedPizzaList
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian}
          handleFormChange={this.handleFormChange}
          handleSubmit={this.updatePizza}/>
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
