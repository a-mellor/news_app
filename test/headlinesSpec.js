'use strict';

var expect = require('chai').expect;
var Headlines  = require('../src/headlines.js').Headlines
var Article = require('../src/article.js')

describe('Headlines', function(){

  var headlines;

  beforeEach(function() {
    headlines = new Headlines(Article);
  })

  it('creates a new list of headlines', function(){
    expect(headlines).to.be.instanceOf(Headlines);
  });

  it('starts with an empty list of headlines', function(){
    expect(headlines.listHeadlines()).to.be.empty;
  });

  it('can add articles into the haedlines', function(){
    headlines.addArticle('Queen gets older', 'www.thequeen.com');
    expect(headlines.listHeadlines()).to.not.be.empty;
  });
});
