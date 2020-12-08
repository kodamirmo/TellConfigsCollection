// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by tell-configs-collection.js.
import { name as packageName } from "meteor/tell-configs-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('tell-configs-collection - example', function (test) {
  test.equal(packageName, "tell-configs-collection");
});
