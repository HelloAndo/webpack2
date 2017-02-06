require('path');
var moment = require('moment');
require ('css-loader!./style.css');
let time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(time);
setTimeout(() => {
  console.log('hello world')
});
var love = {
  brief: true
}
let {brief} = love
console.log(brief)