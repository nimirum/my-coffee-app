import express, { Request, Response } from 'express'
import { Coffee } from '../models/types'

const router = express.Router()

router.get('/api/coffee', async (req: Request, res: Response) => {
  Coffee.find({}).then(coffees => {
    res.json(coffees.map(coffee => coffee.toJSON()))
  })
})

router.post('/api/coffee', async (req: Request, res: Response, next) => {
  const { name, weight, price, roast } = req.body;

  const coffee = Coffee.build({ name, weight, price, roast })
  coffee.save().then(savedCoffee => {
    res.json(savedCoffee.toJSON())
  })
    .catch(error => next(error))
})

export { router as coffeeRouter }