import React from 'react'

interface ICreateCoffee {
    coffee: any;
    onChangeForm: Function;
    createCoffee: Function;
}

function CreateCoffeeForm({coffee, onChangeForm, createCoffee} : ICreateCoffee) {


    return(
            <div>
                <div>
                <h2>Create New Coffee</h2>
                <form>
                    <div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="weight">Weight (g)</label>
                            <input type="number" onChange={(e) => onChangeForm(e)} name="weight" id="weight"/>
                        </div>
                        <div>
                            <label htmlFor="price">Price (€)</label>
                            <input type="number" onChange={(e) => onChangeForm(e)} name="price" id="price"/>
                        </div>
                        <div>
                            <label htmlFor="roast">Roast (1-5)</label>
                            <input type="number" onChange={(e) => onChangeForm(e)} name="roast" id="roast"/>
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createCoffee(coffee)}>Create</button>
                </form>
                </div>
            </div>
    )
}

export default CreateCoffeeForm