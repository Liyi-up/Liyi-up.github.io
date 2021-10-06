var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '404 Not Found';
    clearTimeout(titleTime);
  }
  else {
    document.title = 'Is a joke' ;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 5000);
  }
});

