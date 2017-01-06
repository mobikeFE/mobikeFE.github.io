var appDaily = {
  baiduSearch: function(words) {
    var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.baidu.com/baidu?tn=baidu&ie=utf-8&word=';

    window.open(url + key, '_blank');
  },
  googleSearch: function(words) {
    var key = 'site:' + window.location.host + '%20' + words.replace(/\s/g, '%20');
    var url = 'https://www.google.com/search?q=';

    window.open(url + key, '_blank');
  },
  submitSearch: function(search_engines) {
    var $ipt = document.getElementById('homeSearchInput');

    if (search_engines === 'baidu') {
      this.baiduSearch($ipt.value.trim());
    } else {
      this.googleSearch($ipt.value.trim());
    }

    return false;
  },
  bindToggleButton: function() {
    var btn = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.navbar');

    btn.addEventListener('click', function() {
      var c = nav.getAttribute('class') || '';

      if (c.indexOf('show-force') !== -1) {
        nav.setAttribute('class', c.replace(/show-force/, '').trim());
      } else {
        nav.setAttribute('class', (c + ' show-force').trim());
      }
    });
  }
};

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fc2bdb95d4753fa08ba0d4bb8ebecfd6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var duoshuoQuery = {short_name:"mobike"};
(function() {
  var ds = document.createElement('script');
  ds.type = 'text/javascript';ds.async = true;
  ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
  ds.charset = 'UTF-8';
  (document.getElementsByTagName('head')[0] 
   || document.getElementsByTagName('body')[0]).appendChild(ds);
})();

appDaily.bindToggleButton();
