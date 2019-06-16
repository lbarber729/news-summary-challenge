(function(exports) {

  function ListHeadlines(headlines) {
    this._headlines = headlines;

    ListHeadlines.prototype.list = function() {

      var html = '<ul>'
      for (var i = 0; i < this._headlines._stories.length; ++i) {
        html += "<li><div><a href=" + this._headlines._stories[i].webUrl + ">" + this._headlines._stories[i].webTitle + "</a></div></li>"
      };
      html += '</ul>'
      return html

    };

  };
  exports.ListHeadlines = ListHeadlines;
})(this);
