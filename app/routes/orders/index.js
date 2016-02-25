import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createOrder(order) {
      const name = order.get('name');
      alert(name + ' order saved!');
    }
  },
  model() { this.get('store').newOrder(); },
  store: Ember.inject.service()
});
