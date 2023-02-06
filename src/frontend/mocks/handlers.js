import axios from 'axios'
import { rest } from 'msw'
import { db } from './db'

export const handlers = [
  rest.get('/api/orders', (req, res, ctx) => {
    const allOrders = db.order.getAll()
    return res(ctx.status(200), ctx.json(allOrders))
  }),
  rest.post('/api/orders/create', async (req, res, ctx) => {
    const { data } = req.body
    const persons = await axios.get('http://localhost:8080/api/v1/person')
    const person = persons.data.find((x) => x.id === data.userID)
    const fullNamePerson = person.firstName + ' ' + person.lastName

    const order = await db.order.create({
      orderID: Date.now(),
      ...data,
      soldTo: fullNamePerson,
      billTo: fullNamePerson,
      shipTo: fullNamePerson,
      userID: data.userID,
    })
    return res(ctx.status(200), ctx.json(order))
  }),
]
