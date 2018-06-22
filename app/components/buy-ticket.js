import Component from '@ember/component';

export default Component.extend({
  name: '',

  actions: {
    buy(name) {
      alert(`${name} bought a ticket`);
    }
  }
});