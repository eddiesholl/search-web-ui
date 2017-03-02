# Search-web-ui

This is a simple web front end for a user search API, implemented using the ember.js framework.

# Description

The task at hand is to allow a user to define a search they would like to run across user or user-related objects (users, tickets, organisations). The query is made up of 3 parameters:

* entity - one of user, ticket or org
* field - the field on the chosen entity to search in
* term - the actual value to search for in the field

The query is actually implemented with a simple ajax GET request. This is much simpler than using an idiomatic query via the ember `store`, which is overkill for the task at hand. More complex interfaces and features might benefit from the ember store and models etc, but this is not helpful right now.

## Enhancements

The solution so far has provided a few basic use cases for defining a search of user data, and displaying the results. Some possible future features and enhancements to the ember app are:

* Multiple search results - right now the client is expecting a single search result. The server is not returning well formed JSON with multiple search matches. If this was fixed, then the client should obviously support a list of matches. This would probably involve using an iterator (`#each` in ember terms) and using multiple instances of the `search-result-display` component.

* Better feedback waiting for results - Right now there is no feedback while a search is running. With a local server, this is fine, but adding things like a spinner during the load phase would help the user know what is happening.

* Let the user choose the field from a dropdown - The set of searchable fields should be a bound set of names (per entity). It would make the searching user's life much easier if this was a dropdown, with a fixed list of fields to choose from.

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

This client requires access to the search API that is included in the [user-search](https://github.com/eddiesholl/user-search) repo. First you will need to get access to that app and get the server up and running on port 8000.

Then when you're ready to run this app:

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
