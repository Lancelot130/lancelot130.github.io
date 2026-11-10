/* ==========================================================
 * 首页副标题：随机挑一句，打字机效果打一遍，打完就停
 *
 * 【总开关】把下面的 ENABLED 改成 false，本功能立即失效
 *           （副标题区域会留空；想连区域一起隐藏，
 *            去 _config.butterfly.yml 把 subtitle.enable 改成 false）
 *
 * 【改句子】改 QUOTES 数组，每句一行，用英文单引号包住
 * 【改速度】TYPE_SPEED，单位毫秒，数字越小打得越快
 * 【改进场等待】START_DELAY，进入页面后等多久开始打
 * ========================================================== */
(function () {
  var ENABLED = true;

  var QUOTES = [
    'Dreams are the seedings of realities.',
    'Let me take you to the place in this town where wishes come true.',
    'They were only two, on the planet.',
    'Pain is inevitable, suffering is optional.',
    'Day before yesterday I saw a rabbit, and yesterday a deer, and today, you.',
    '穿过县界隧道，便是雪国————夜的底色化作银白。',
    '死并非生的对立面，而作为生的一部分永存。'
  ];

  var TYPE_SPEED = 70;
  var START_DELAY = 300;

  if (!ENABLED) return;

  function typeOne() {
    var el = document.getElementById('subtitle');
    if (!el || !QUOTES.length) return;

    var text = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    var i = 0;
    el.textContent = '';

    function step() {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) {
        setTimeout(step, TYPE_SPEED);
      }
    }

    setTimeout(step, START_DELAY);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeOne);
  } else {
    typeOne();
  }
})();
