import React, { useState, useEffect } from 'react';
import { ApiService } from './service/api.service'
import CoffeeTable from './components/CoffeeTable'
import CreateCoffeeForm from './components/CoffeeForm'
import { Coffee } from './types'

const App: React.FC = () => {
  const [coffees, setCoffees] = useState<any>([]);

  const getAllCoffee = async () => {
    const coffees = await ApiService.getCoffees()
    setCoffees(coffees)
  }

  const createCoffeeAndUpdateCoffeeList = async (coffee: Coffee) => {
    await ApiService.addCoffee(coffee);
    await getAllCoffee()
  }

  useEffect(() => {
    getAllCoffee();
  }, []);

  return (
    <div>
      <h1>My Coffee App</h1>
      <CreateCoffeeForm onSubmit={createCoffeeAndUpdateCoffeeList}/>
      <CoffeeTable coffees={coffees} />
    </div>
  );
}

export default App;

