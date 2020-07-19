import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    pizzaToEdit: '',
    topping: '',
    size: '',
    vegetarian: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.addPizzasToState(pizzas))
  }

  addPizzasToState(pizzas) {
    this.setState({
      pizzas: pizzas
    })
  }

  editPizza = (pizza) => {
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

  handleSubmit = (e) => {
    e.preventDefault()
    const updatedPizza = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }
    this.updatePizza(updatedPizza)
  }

  updatePizza = (updatedPizza) => {
    let allPizzas = [...this.state.pizzas]
    const currentPizza = this.state.pizzaToEdit
    let foundPizza = allPizzas.find(pizza => pizza.id === currentPizza.id)
    console.log(foundPizza)
    const i = allPizzas.indexOf(foundPizza)
    allPizzas[i] = updatedPizza
    this.setState({
      pizzas: allPizzas,
      pizzaToEdit: '',
      topping: '',
      size: '',
      vegetarian: ''
    })
  }


  render() {
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} handleFormChange={this.handleFormChange}
         topping={this.state.topping}
         size={this.state.size} 
         vegetarian={this.state.vegetarian}/>
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
