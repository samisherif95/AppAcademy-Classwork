const  FollowToggle = require('./folllow_toggle.js');

$(document).ready(function ($el) {
  console.log("ready!");
  let $buttons = $('.follow-toggle');
  console.log(`this is a ${$buttons}`);

  $buttons.each((i ,button)=>{
    new FollowToggle($(button));
  });
});