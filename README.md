# conference-workshop

This a simple Ember demo app to manage a conference.

The app has four pages:

 * home
 * agenda
 * speakers
 * tickets.

 ## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)


## How to run this app
* `git clone <repository-url>` this repository
* `cd conference-workshop`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Tutorial: how to replicate this app
After Ember has been installed in your environment, the first step is to create
a new ember application with the command:

`ember new conference-workshop`

Then move to the new created folder:

`cd conference-workshop`

### Set up routes

If you want to visit a specific page on your application it is a requirement to create a route.

Ember has *generators* that automate the boilerplate code for
common tasks such as creating components, routes and tests.

To create a route just run this command:

`ember generate route home`

It will automatically create a route with its template/controller and unit test.
The application also needs to know that there is a new route for the url address `/home`, this is done by adding an entry to the route:

```javascript
Router.map(function() {
  this.route('agenda');
});
```

Repeat this process for every page of your app:

`ember generate route agenda`

`ember generate route speakers`

`ember generate route tickets`

After all these command, your router has been accordingly updated:

```javascript
Router.map(function() {
  this.route('home');
  this.route('agenda');
  this.route('speakers');
  this.route('tickets');
});
```

### Create the agenda page

First of all, the agenda route should fetch the model.

Open the file on `/app/routes/agenda.js` and add to the Route class a special method called the *model hook*:

```javascript
export default Route.extend({

  model() {
    // or return `$.get('http://www.yourdomain.com/api/agenda')`
    return [
      {
        id: 1,
        time: '09:00',
        speaker: 'Daniela Remogna',
        title: 'Ember JS Framework',
        description: 'Ember.js is an open-source JavaScript web framework….',
     },
     {
       id: 2,
       time: '09:35',
       speaker: 'John Smith',
       title: AngularJS Framework',
       },
      ];
    },
});
```

The term *hook* is used for methods that are automatically called by the framework.
This method is not meant to be called directly from the code.
It's a *promise-aware* method, as it waits that a model is fetched from the server.
Usually in this method there is an AJAX call to a specific API endpoint (like `$.get('http://www.yourdomain.com/api/agenda')`), for the sake of simplicity, the example is just returning an array of agenda's object.


The next step is to build the layout of the agenda page.

Open the file `/app/templates/agenda.hbs`:

This file contains html code binded to your model data.

On the template you can use the context variable *model* to access to the data returned by the model() method.
To loop over every agenda item, the *each* handlebar helper it is used.
On the pipe `|agenda|` a local variable available on the each body is created and it represents the current object in the iteration process.

If something change with your binded data, the template is rendered automatically.
You don't have to worry about that.

```html
<h2 class="title">Agenda</h2>

<div class="content">
{{#each model as |agenda|}}
  <ul class='agenda'>
    <li class='a-time'>{{agenda.time}}</li>
    <li class='a-speaker'>{{agenda.speaker}}</li>
    <li class='a-title'>{{agenda.title}}</li>
    <li class='a-desc'>{{agenda.description}}</li>
  </ul>
{{/each}}
</div>

```
### Build the main menu

Open the file `/app/template/application.hbs`:

The main menu lives on the application's template that it's always visible as it's shared between all the child routes.
This is a good candidate for hosting your header, main navigation and footer.
The most important thing is that the `{{outlet}}` is not deleted because it is the placeholder for
rendering the child routes.

The `link-to` component has been used to create links between routes.

```html
<ul class='menu'>
  <li>{{#link-to 'home'}} Home {{/link-to}} </li>
  <li>{{#link-to 'agenda'}} Agenda {{/link-to}}</li>
  <li>{{#link-to 'speakers'}} Speakers {{/link-to}}</li>
  <li>{{#link-to 'tickets'}} Tickets {{/link-to}}</li>
</ul>
<h1 class='header'>Front End Framework Conference</h1>

{{outlet}} {{! -- this is a placeholder for rendering the child view --}}
```

### Generate a component

For the tickets page a simple component has been created with the command:

`ember generate component buy-ticket`

It will create the component file with its template and test.

The component logic is simple: it is just an input field and a buy button.
When the user clicks on buy, an action is triggered and a simple alert message is shown.

Actions in Ember are used to handle user interactions.
An action can be added on a template by using the helper {{action 'actionName' [param1, paramN]}}
The default dom triggered event is click.

Open `/app/templates/components/buy-ticket.hbs`:

```html
{{input placeholder='Enter Name' value=name}}
<button class='buy' {{action 'buy' name}}>BUY TICKET</button>

<p>You are buying a ticket for: {{name}}</p>
```
The next step is to bind the action on the template with the component.

All the actions handled by a component live on actions object.
In this example, it's necessary to add a new method called `buy`:

```javascript
import Component from '@ember/component';

export default Component.extend({
  name: '',

  actions: {
    buy(name) {
      alert(`${name} bought a ticket`);
    }
  }
});
```

The last step is to render the component under the tickets.hbs template.

```html
{{buy-ticket}}
```


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
