import React from 'react'
import { Coffee } from '../types'

export const CoffeeTable = ({coffees}: any) => {

    if (coffees.length === 0) return null

    const CoffeeRow = (coffee: Coffee) => {

        return(
              <tr key={coffee._id}>
                  <td>{coffee.name}</td>
                  <td>{coffee.weight}</td>
                  <td>{coffee.price}</td>
                  <td>{coffee.roast}</td>
              </tr>
          )
    }

    const coffeeTable = coffees.map((coffee: Coffee) => CoffeeRow(coffee))

    return(
        <div>
            <h2>Favourite Coffees</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Weight (g)</th>
                    <th>Price (€)</th>
                    <th>Roast</th>
                </tr>
                </thead>
                <tbody>
                    {coffeeTable}
                </tbody>
            </table>
        </div>
    )
}