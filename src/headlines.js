(function(exports) {

    function Headlines() {
      this._stories = [
        {"id":"sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2019-06-16T11:09:44Z","webTitle":"India v Pakistan: Cricket World Cup 2019 – live!","webUrl":"https://www.theguardian.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","apiUrl":"https://content.guardianapis.com/sport/live/2019/jun/16/india-v-pakistan-cricket-world-cup-2019-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},
        {"id":"news/2019/jun/16/nazanin-zaghari-ratcliffe-husband-i-will-join-hunger-strike-for-as-long-as-i-can","type":"article","sectionId":"news","sectionName":"News","webPublicationDate":"2019-06-16T11:07:00Z","webTitle":"Nazanin Zaghari-Ratcliffe's husband: I will join hunger strike for as long as I can","webUrl":"https://www.theguardian.com/news/2019/jun/16/nazanin-zaghari-ratcliffe-husband-i-will-join-hunger-strike-for-as-long-as-i-can","apiUrl":"https://content.guardianapis.com/news/2019/jun/16/nazanin-zaghari-ratcliffe-husband-i-will-join-hunger-strike-for-as-long-as-i-can","isHosted":false,"pillarId":"pillar/news","pillarName":"News"},
        {"id":"film/2019/jun/16/sophia-loren-frozen-in-time-london-june-1960-millionairess","type":"article","sectionId":"film","sectionName":"Film","webPublicationDate":"2019-06-16T11:00:47Z","webTitle":"Frozen in Time: Sophia Loren, London, June 1960","webUrl":"https://www.theguardian.com/film/2019/jun/16/sophia-loren-frozen-in-time-london-june-1960-millionairess","apiUrl":"https://content.guardianapis.com/film/2019/jun/16/sophia-loren-frozen-in-time-london-june-1960-millionairess","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},
        {"id":"food/2019/jun/16/40-best-wines-summer-2019-bargains-best-buys-barbecues-picnics","type":"article","sectionId":"food","sectionName":"Food","webPublicationDate":"2019-06-16T11:00:46Z","webTitle":"The 40 best wines for summer 2019","webUrl":"https://www.theguardian.com/food/2019/jun/16/40-best-wines-summer-2019-bargains-best-buys-barbecues-picnics","apiUrl":"https://content.guardianapis.com/food/2019/jun/16/40-best-wines-summer-2019-bargains-best-buys-barbecues-picnics","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},
        {"id":"artanddesign/2019/jun/16/rainbow-wormhole-in-the-tar-pits-londons-trippy-pavilion-moves-to-la","type":"article","sectionId":"artanddesign","sectionName":"Art and design","webPublicationDate":"2019-06-16T11:00:46Z","webTitle":"Rainbow wormhole in the Tar Pits: London's trippy pavilion moves to LA","webUrl":"https://www.theguardian.com/artanddesign/2019/jun/16/rainbow-wormhole-in-the-tar-pits-londons-trippy-pavilion-moves-to-la","apiUrl":"https://content.guardianapis.com/artanddesign/2019/jun/16/rainbow-wormhole-in-the-tar-pits-londons-trippy-pavilion-moves-to-la","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},
        {"id":"business/2019/jun/16/council-staff-pensions-at-risk-from-woodford-investments","type":"article","sectionId":"business","sectionName":"Business","webPublicationDate":"2019-06-16T10:51:46Z","webTitle":"Council staff pensions at risk from Woodford investments","webUrl":"https://www.theguardian.com/business/2019/jun/16/council-staff-pensions-at-risk-from-woodford-investments","apiUrl":"https://content.guardianapis.com/business/2019/jun/16/council-staff-pensions-at-risk-from-woodford-investments","isHosted":false,"pillarId":"pillar/news","pillarName":"News"},
        {"id":"food/2019/jun/16/rise-and-shine-breakfast-taste-test","type":"article","sectionId":"food","sectionName":"Food","webPublicationDate":"2019-06-16T10:30:48Z","webTitle":"Breakfast taste test: the best smoothies and juices, mueslis and bacon butties","webUrl":"https://www.theguardian.com/food/2019/jun/16/rise-and-shine-breakfast-taste-test","apiUrl":"https://content.guardianapis.com/food/2019/jun/16/rise-and-shine-breakfast-taste-test","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},
        {"id":"sport/2019/jun/16/nick-nurse-the-nba-champion-coach-who-learned-his-trade-in-britain","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2019-06-16T10:30:47Z","webTitle":"Nick Nurse: the NBA champion coach who learned his trade in ... Britain?","webUrl":"https://www.theguardian.com/sport/2019/jun/16/nick-nurse-the-nba-champion-coach-who-learned-his-trade-in-britain","apiUrl":"https://content.guardianapis.com/sport/2019/jun/16/nick-nurse-the-nba-champion-coach-who-learned-his-trade-in-britain","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},
        {"id":"food/2019/jun/16/italian-summer-feast-recipes-clams-bream-torta-caprese-jaconb-kenedy","type":"article","sectionId":"food","sectionName":"Food","webPublicationDate":"2019-06-16T10:00:47Z","webTitle":"Clams, baked bream and torta caprese: recipes for an Italian summer feast","webUrl":"https://www.theguardian.com/food/2019/jun/16/italian-summer-feast-recipes-clams-bream-torta-caprese-jaconb-kenedy","apiUrl":"https://content.guardianapis.com/food/2019/jun/16/italian-summer-feast-recipes-clams-bream-torta-caprese-jaconb-kenedy","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},
        {"id":"books/2019/jun/16/vivian-christina-hesselholdt-review","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2019-06-16T10:00:47Z","webTitle":"Vivian by Christina Hesselholdt review – flash portrait","webUrl":"https://www.theguardian.com/books/2019/jun/16/vivian-christina-hesselholdt-review","apiUrl":"https://content.guardianapis.com/books/2019/jun/16/vivian-christina-hesselholdt-review","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"}
      ]

  //   var today = new Date();
  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0');
  //   var yyyy = today.getFullYear();
  //   var todaysDate = yyyy + '-' + mm + '-' + dd
  //
  //   var stories = new Headlines
  //   var apiKey = "b7562bfc-34f1-4be8-a8d2-bfd4a367c037"
  //   var request = new XMLHttpRequest()
  //   request.open('GET', `https://content.guardianapis.com/search?from-date=${todaysDate}&api-key=${apiKey}`, true)
  //
  //   request.onload = function() {
  //     var data = JSON.parse(this.response)
  //     for (var i = 0; i < data.response.results.length; i++) {
  //       stories._stories.push(data.response.results[i]);
  //     }
  //   }
  //   request.send()
  }

  exports.Headlines = Headlines;
})(this);
