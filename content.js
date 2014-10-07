var ffsRobot = (function () {
  var delay = 2000;
  var directoryUrl = "http://ut-dallas-utils.herokuapp.com/is_student/";
  var els = document.getElementsByClassName('fsl');
  var elsArray = Array.prototype.slice.call(els, 0);
  var names = elsArray.map(function (n) {
    return n.innerText;
  });
  if(names.length > 0) {
  var index = -1;
  var intervalID = window.setInterval(function () {
    var i = index+1;
    index++;
    if(i < names.length) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", directoryUrl+encodeURIComponent(names[i]), true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          var res = JSON.parse(xhr.response);
          console.log(names[i], res.isStudent);
          if(!res.isStudent) {
            els[i].style.backgroundColor = "red";
          }
        }
      };
      xhr.send();
    } else {
      clearInterval(intervalID);
    }
  }, delay);
  } else {
    console.log('no names found');
  }

})();
