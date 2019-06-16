(function(exports) {

    function Headlines() {
      this._stories = [{"id":"technology/2019/jun/16/trans-childrens-charity-apologises-after-parents-emails-published-online","type":"article","sectionId":"technology","sectionName":"Technology","webPublicationDate":"2019-06-16T12:23:31Z","webTitle":"Trans children's charity apologises after parents' emails published online","webUrl":"https://www.theguardian.com/technology/2019/jun/16/trans-childrens-charity-apologises-after-parents-emails-published-online","apiUrl":"https://content.guardianapis.com/technology/2019/jun/16/trans-childrens-charity-apologises-after-parents-emails-published-online","fields":{"thumbnail":"https://media.guim.co.uk/b85bb18caeee98da09c296f4f7bca2a164fd54d2/717_506_1531_919/500.jpg"},"isHosted":false,"pillarId":"pillar/news","pillarName":"News"},{"id":"football/live/2019/jun/16/sweden-v-thailand-womens-world-cup-2019-live","type":"liveblog","sectionId":"football","sectionName":"Football","webPublicationDate":"2019-06-16T12:23:25Z","webTitle":"Sweden v Thailand: Women's World Cup 2019 – live!","webUrl":"https://www.theguardian.com/football/live/2019/jun/16/sweden-v-thailand-womens-world-cup-2019-live","apiUrl":"https://content.guardianapis.com/football/live/2019/jun/16/sweden-v-thailand-womens-world-cup-2019-live","fields":{"thumbnail":"https://media.guim.co.uk/56240b725edc9731f1a7b2100135f907143ba7f5/0_227_3500_2100/500.jpg"},"isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},{"id":"sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2019-06-16T12:22:28Z","webTitle":"India v Pakistan: Cricket World Cup 2019 – live!","webUrl":"https://www.theguardian.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","apiUrl":"https://content.guardianapis.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","fields":{"thumbnail":"https://media.guim.co.uk/5b693a941fb1e9dc2837315a3e077d798439e1c2/0_258_3616_2169/500.jpg"},"isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},{"id":"stage/2019/jun/16/jimmy-carr-review-rose-theatre-kingston","type":"article","sectionId":"stage","sectionName":"Stage","webPublicationDate":"2019-06-16T12:16:42Z","webTitle":"Jimmy Carr review – a relentless wallow in grubbiness","webUrl":"https://www.theguardian.com/stage/2019/jun/16/jimmy-carr-review-rose-theatre-kingston","apiUrl":"https://content.guardianapis.com/stage/2019/jun/16/jimmy-carr-review-rose-theatre-kingston","fields":{"thumbnail":"https://media.guim.co.uk/d19b7a29fb085af1c2f9ebc046ee4caf45919664/210_211_2538_1523/500.jpg"},"isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},{"id":"commentisfree/2019/jun/16/rory-stewart-boris-johnson","type":"article","sectionId":"commentisfree","sectionName":"Opinion","webPublicationDate":"2019-06-16T12:06:48Z","webTitle":"If you think Rory Stewart is the grownup choice, think again | Ash Sarkar","webUrl":"https://www.theguardian.com/commentisfree/2019/jun/16/rory-stewart-boris-johnson","apiUrl":"https://content.guardianapis.com/commentisfree/2019/jun/16/rory-stewart-boris-johnson","fields":{"thumbnail":"https://media.guim.co.uk/ed9c82673474064384c71388464ce08e71055f7f/0_101_3393_2036/500.jpg"},"isHosted":false,"pillarId":"pillar/opinion","pillarName":"Opinion"}]

  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0');
  //   var yyyy = today.getFullYear();
  //   var todaysDate = yyyy + '-' + mm + '-' + dd
  //
  //   // var stories = this._stories
  //   var apiKey = "b7562bfc-34f1-4be8-a8d2-bfd4a367c037"
  //   var request = new XMLHttpRequest()
  //
  //   request.open('GET', `https://content.guardianapis.com/search?page=1&page-size=5&from-date=${todaysDate}&&page=1&show-fields=thumbnail&api-key=${apiKey}`, true)
  //
  //   request.onload = function() {
  //     var data = JSON.parse(this.response)
  //     for (var i = 0; i < data.response.results.length; i++) {
  //       this._stories.push(data.response.results[i]);
  //     }
  //   }
  //   request.send()
  }

  exports.Headlines = Headlines;
})(this);
