(function(exports) {

    function Headlines() {
      this._stories = []

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var todaysDate = yyyy + '-' + mm + '-' + dd

    var stories = new Headlines
    var apiKey = "b7562bfc-34f1-4be8-a8d2-bfd4a367c037"
    var request = new XMLHttpRequest()
    request.open('GET', `https://content.guardianapis.com/search?from-date=${todaysDate}&api-key=${apiKey}`, true)

    request.onload = function() {
      var data = JSON.parse(this.response)
      for (var i = 0; i < data.response.results.length; i++) {
        stories._stories.push(data.response.results[i]);
      }
    }
    request.send()
  }

  exports.Headlines = Headlines;
})(this);
