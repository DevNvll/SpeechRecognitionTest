var speech = function() {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.onresult = function(event) {
    var result = event.results[event.results.length - 1][0].transcript;
    result = result.toLowerCase();
    result = result.replace(/\s/gi,'');
    $('#text').html(result);

    if(result === "reload") {
      location.reload();
    }

    if(result === "go to google") {
      window.location = "http://google.com/";
    }

    $('body').css('background', result);

  };
  recognition.start();
};

if (!('webkitSpeechRecognition' in window)) {
  $('#text').html("Your browser does not support speech recognition. Sorry.");
}
else {
    speech();
}
