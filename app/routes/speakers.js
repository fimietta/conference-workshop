import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // Usually there is an AJAX call here
    return [
      {
        id: 1,
        name: 'Daniela Remogna',
        description: 'Daniela Remogna speaker description',
      },
      {
        id: 2,
        name: 'John Smith',
        description: 'John Smith speaker description',
      },
      {
        id: 3,
        name: 'Megan Ford',
        description: 'Megan ford speaker description',
      },
    ];
  },
});
