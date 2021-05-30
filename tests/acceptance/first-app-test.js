import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | first app', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to My First Ember Application');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h2').hasText('About My First Ember Application');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function(assert){
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About Us');
    await  click('.jumbo a.button');

    assert.equal(currentURL(), '/about');

  });

});
