describe ('Headlines', function() {
  this._stories = [
    {
      "webTitle":"Lena Headey: ‘I wanted a better death for Cersei’",
      "webUrl":"https://www.theguardian.com/tv-and-radio/2019/jun/16/lena-headey-cersei-death-game-of-thrones-the-flood-interview"
    },
    {
      "webTitle":"Sportwatch: Wins for Roosters, Sea Eagles, Vixens, Swifts and Giants – as it happened",
      "webUrl":"https://www.theguardian.com/sport/live/2019/jun/16/sportwatch-sea-eagles-v-dragons-north-melbourne-v-gws-swifts-v-giants-live"
    },
    {
      "webTitle":"Being a new father is all-consuming – but does that make me a real dad? | Séamas O’Reilly",
      "webUrl":"https://www.theguardian.com/lifeandstyle/2019/jun/16/being-a-new-father-is-all-consuming-but-does-that-make-me-a-real-dad-seamas-oreilly"
    },
    {
      "webTitle":"Your pictures: share your photos on the theme of ‘plastic'",
      "webUrl":"https://www.theguardian.com/community/2019/jun/16/your-pictures-share-your-photos-on-the-theme-of-plastic"
    },
    {
      "webTitle":"How to follow the Maybot? A droid PM | David Mitchell",
      "webUrl":"https://www.theguardian.com/commentisfree/2019/jun/16/how-to-follow-the-maybot-a-droid-pm"
    }
  ]
  it ('can store headlines', function(){

    assert.isEqualTo(this._stories[0].webTitle, "Lena Headey: ‘I wanted a better death for Cersei’");
    assert.isEqualTo(this._stories[0].webUrl, "https://www.theguardian.com/tv-and-radio/2019/jun/16/lena-headey-cersei-death-game-of-thrones-the-flood-interview");
  });

});
