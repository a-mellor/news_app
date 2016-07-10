'use strict';

(function(exports) {

function Headlines(Article) {
  this.Artilce = Article;
  this.headlines = [];
}
  Headlines.prototype = {

    listHeadlines: function(){
      return this.headlines;
    },

    addArticle: function(title, url) {
      var article = new this.Article(title, url);
      this.headlines.push(article)
    }
  }

  exports.Headlines = Headlines
})(this)
