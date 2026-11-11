/* ==========================================================
 * 右上角夜间模式开关
 * 做法：新建一个按钮，点击时去"点"主题原有的 #darkmode 按钮，
 *       这样不用碰主题源码，升级主题也不会失效。
 * ========================================================== */
(function () {
  function init() {
    var real = document.getElementById('darkmode');
    var nav = document.getElementById('nav');
    if (!real || !nav || document.getElementById('nav-darkmode')) return;

    var btn = document.createElement('button');
    btn.id = 'nav-darkmode';
    btn.type = 'button';
    btn.title = '切换白天 / 夜间模式';
    nav.appendChild(btn);

    function isDark() {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    }

    function sync() {
      btn.innerHTML = isDark()
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    }

    btn.addEventListener('click', function () {
      real.click();
      setTimeout(sync, 80);
    });

    sync();

    // 跟随主题自身的模式变化（含自动切换）更新图标
    if (window.MutationObserver) {
      new MutationObserver(sync).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
