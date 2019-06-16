describe ('Listing Headlines', function() {

  function HeadlinesDouble() {
  this._stories =
    {"response":{"status":"ok","userTier":"developer","total":102,"startIndex":1,"pageSize":5,"currentPage":1,"pages":21,"orderBy":"newest","results":[{"id":"sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2019-06-16T11:25:30Z","webTitle":"India v Pakistan: Cricket World Cup 2019 – live!","webUrl":"https://www.theguardian.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","apiUrl":"https://content.guardianapis.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"}]}}
};

var listheadlines = new ListHeadlines(new HeadlinesDouble)
  it ('can list headlines', function(){
    assert.isEqualTo(listheadlines.list(), "<ul><li><div><a href=https://www.theguardian.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live>India v Pakistan: Cricket World Cup 2019 – live!</a></div></li></ul>")
  });

});
