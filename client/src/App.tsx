import React, { useState, useEffect } from 'react';
import { ApiService } from './service/api.service'
import { CoffeeTable } from './components/CoffeeTable'
import CreateCoffeeForm from './components/CreateCoffee'
import { Coffee } from './types'

const App: React.FC = () => {
  const [coffee, setCoffee] = useState<any>();
  const [coffees, setCoffees] = useState<any>([]);

  const getAllCoffee = async () => {
    const coffees = await ApiService.getCoffees()
    return setCoffees(coffees)
  }

  const createCoffee = async (coffee: Coffee) => {
    await ApiService.addCoffee(coffee);
  }

  const onChangeForm = (e: any) => {
    let coffeeClone = { ...coffee }
    if (e.target.name === 'name') {
      coffeeClone.name = e.target.value;
    } else if (e.target.name === 'weight') {
      coffeeClone.weight = e.target.valueAsNumber;
    } else if (e.target.name === 'price') {
      coffeeClone.price = e.target.valueAsNumber;
    } else if (e.target.name === 'roast') {
      coffeeClone.roast = e.target.valueAsNumber;
    }
    setCoffee(coffeeClone);
  }

  useEffect(() => {
    getAllCoffee();
  }, []);


  return (
    <div>
      <h1>My Coffee App</h1>
      <CreateCoffeeForm
        coffee={coffee}
        onChangeForm={onChangeForm}
        createCoffee={createCoffee}
      />
      <CoffeeTable coffees={coffees} />
      <button type="button" onClick= {(e) => getAllCoffee()}>Update</button>
    </div>
  );
}

export default App;

