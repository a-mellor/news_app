'use strict';

var expect = require('chai').expect;
var Article = require('../src/article').Article;

describe('Article', function() {
  var article;

  beforeEach(function() {
    article = new Article('News', 'www.rupertmurdocl.com');
  });

  it('can create a new article', function () {
    expect(article).to.be.instanceOf(Article);
  });
})
