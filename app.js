(function() {
  return {
    requests: {
      request: function() {
        return {
          // url: 'http://requestb.in/1cfjqfg1',
          url: 'http://iheartquotes.com/api/v1/random',
          type: 'GET',
          dataType: 'json'
        };
      }
    },
    events: {
      'app.created':'init',
      'click .btn': 'startRequest',
      'request.always': 'response'
    },
    init: function() {
      this.switchTo('button');
    },
    startRequest: function() {
      this.ajax('request');
    },
    response: function(data) {
      console.log(data);
      this.switchTo('test', {
        test: data.responseText
      });
    }
  };
}());