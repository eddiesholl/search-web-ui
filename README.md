# Search-web-ui

This is a simple web front end for a user search API, implemented using the ember.js framework.

# Description

The task at hand is to allow a user to define a search they would like to run across user or user-related objects (users, tickets, organisations). The query is made up of 3 parameters:

* entity - one of user, ticket or org
* field - the field on the chosen entity to search in
* term - the actual value to search for in the field

The query is actually implemented with a simple ajax GET request. This is much simpler than using an idiomatic query via the ember `store`, which is overkill for the task at hand. More complex interfaces and features might benefit from the ember store and models etc, but this is not helpful right now.   

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
