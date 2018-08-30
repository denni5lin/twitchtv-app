const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "joshog"];

function makeURL(type, name){
  return 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name + '?callback=?';
}

$(function(){
  $.getJSON(makeURL('streams', 'freecodecamp'), function(data1){
    if(data1.stream === null){
      $('#fccStatus').html('currently OFFLINE');
    } else {
      $('#fccStatus').html('currently ONLINE');
    };
  });
  // offline
  for(var i = 0; i < channels.length; i++){
    $.getJSON(makeURL('channels', channels[i]), function(data3){
      let logo, status, name;           
      logo = data3.logo;
      status = 'OFFLINE';
      name = data3.display_name;
      $('#followerInfo').prepend('<div class="row">' + '<div class="col-sm-4">' + '<img src="' + logo + '">' + '</div>' + '<div class="col-sm-4"><a href="https://www.twitch.tv/' + name + '" target="blank">' + name + '</a></div>' + '<div class="col-sm-4">' + status + '</div>');

    });
  };
  
  // online
  for(var i = 0; i < channels.length; i++){
    $.getJSON(makeURL('streams', channels[i]), function(data2){
      let logo, status, name;
      logo = data2.stream.channel.logo;
      status = data2.stream.channel.status;
      name = data2.stream.channel.display_name;
      $('#followerInfo').prepend('<div class="row">' + '<div class="col-sm-4">' + '<img src="' + logo + '">' + '</div>' + '<div class="col-sm-4"><a href="https://www.twitch.tv/' + name + '" target="blank">' + name + '</a></div>' + '<div class="col-sm-4">' + status + '</div>');

    });
  };
});
