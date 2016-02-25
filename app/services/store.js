import Ember from 'ember';

import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
  Product.create({title: 'Tenet', price: 10, description: 'Tent description'}),
  Product.create({title: 'Sleeping bag', price: 50, description: 'Sleeping bag description'}),
  Product.create({title: 'Flashlight', price: 23, description: 'Flashlight description'}),
  Product.create({title: 'First-Aid Kit', price: 123, description: 'First-Aid Kit description'})
];

const orders = [
  Order.create({ id: '1234', name: 'QQQQQQ WWWWWW',
    items: [
      LineItem.create({product: products[0], quantity: 1 }),
      LineItem.create({product: products[1], quantity: 1 }),
      LineItem.create({product: products[2], quantity: 0 }),
      LineItem.create({product: products[3], quantity: 0 })
    ]
  }),
  Order.create({ id: '5678', name: 'EEEEEE RRRRRR',
    items: [
      LineItem.create({product: products[0], quantity: 1 }),
      LineItem.create({product: products[1], quantity: 1 }),
      LineItem.create({product: products[2], quantity: 0 }),
      LineItem.create({product: products[3], quantity: 0 })
    ]
  }),
  Order.create({ id: '9012', name: 'tttttt yyyyy',
    items: [
      LineItem.create({product: products[0], quantity: 1 }),
      LineItem.create({product: products[1], quantity: 1 }),
      LineItem.create({product: products[2], quantity: 0 }),
      LineItem.create({product: products[3], quantity: 0 })
    ]
  }),
  Order.create({ id: '3456', name: 'uuuuuu iiiiiiii',
    items: [
      LineItem.create({product: products[0], quantity: 1 }),
      LineItem.create({product: products[1], quantity: 1 }),
      LineItem.create({product: products[2], quantity: 0 }),
      LineItem.create({product: products[3], quantity: 0 })
    ]
  })
];

export default Ember.Service.extend({
  getOrderById(id) { return orders.findBy('id', id); },
  getOrders() { return orders; },
  getProducts() { return products; },
  newOrder() {
    return Order.create({
      items: products.map((product) => {
        return LineItem.create({
          product: product
        });
      })
    });
  }
});
