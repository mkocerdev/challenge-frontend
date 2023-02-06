import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
  // Create a "order" model,
  order: {
    orderID: primaryKey(String),
    orderDate: () => String,
    orderValue: () => Number,
    taxValue: () => Number,
    currencyCode: () => String,
    soldTo: () => String,
    billTo: () => String,
    shipTo: () => String,
    userID: () => String,
  },
})

db.order.toHandlers('rest')
