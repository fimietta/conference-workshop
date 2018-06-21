import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return [
      {
        id: 1,
        time: '09:00',
        speaker: 'Daniela Remogna',
        title: 'Ember JS Framework',
        description: 'Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework',
      },
      {
        id: 2,
        speaker: 'John Smith',
        time: '09:35',
        title: 'AngularJS Framework',
        description: 'AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
      },
      {
        id: 3,
        speaker: 'Megan Ford',
        time: '10:10',
        title: 'React + Redux',
        description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications',
      },
    ];
  }
});