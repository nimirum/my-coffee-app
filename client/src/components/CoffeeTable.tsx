import React, {FC} from "react";
import { Table } from "react-bootstrap";
import { Coffee } from "../types";

interface TableProps {
    coffees: [];
  };

const CoffeeTable: FC<TableProps> = ({ coffees }: any) => {
  if (coffees.length === 0) return null;

  const CoffeeRow = (coffee: Coffee) => {
    return (
      <tr key={coffee._id}>
        <td>{coffee.name}</td>
        <td>{coffee.weight}</td>
        <td>{coffee.price}</td>
        <td>{coffee.roast}</td>
      </tr>
    );
  };

  const coffeeTable = coffees.map((coffee: Coffee) => CoffeeRow(coffee));

  return (
    <div>
      <h2>Favourite Coffees</h2>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight (g)</th>
            <th>Price (€)</th>
            <th>Roast</th>
          </tr>
        </thead>
        <tbody>{coffeeTable}</tbody>
      </Table>
    </div>
  );
};

export default CoffeeTable;
