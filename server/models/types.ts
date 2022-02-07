import mongoose from 'mongoose'

interface ICoffee {
    name: string;
    price: number;
    weight: number;
    roast: number;
}

interface CoffeeModelInterface extends mongoose.Model<CoffeeDoc> {
    build(attr: ICoffee): CoffeeDoc
}

interface CoffeeDoc extends mongoose.Document {
    title: string;
    description: string;
}

const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    roast: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }

})

coffeeSchema.statics.build = (attr: ICoffee) => {
    return new Coffee(attr)
}

const Coffee = mongoose.model<CoffeeDoc, CoffeeModelInterface>('Coffee', coffeeSchema)

export { Coffee }