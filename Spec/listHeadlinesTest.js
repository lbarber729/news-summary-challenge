describe ('Listing Headlines', function() {

  function HeadlinesDouble() {
  this._stories = [
    {
      "webTitle":"Lena Headey: ‘I wanted a better death for Cersei’",
      "webUrl":"https://www.theguardian.com/tv-and-radio/2019/jun/16/lena-headey-cersei-death-game-of-thrones-the-flood-interview"
    }
  ]
};

var listheadlines = new ListHeadlines(new HeadlinesDouble)
  it ('can list headlines', function(){
    console.log(listheadlines.list());
    assert.isEqualTo(listheadlines.list(), "<ul><li><div><a href=https://www.theguardian.com/tv-and-radio/2019/jun/16/lena-headey-cersei-death-game-of-thrones-the-flood-interview>Lena Headey: ‘I wanted a better death for Cersei’</a></div></li></ul>")
  });

});
