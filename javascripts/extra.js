// 滚动入场动画：进入视口时淡入上移
function initReveal() {
  var items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  document.documentElement.classList.add("reveal-ready");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach(function (el) {
    observer.observe(el);
  });
}

// 语言切换按钮（目前仅界面，暂无真实翻译功能）
function initLanguageSwitcher() {
  var palette = document.querySelector('form[data-md-component="palette"]');
  if (!palette || document.querySelector(".lang-switch")) {
    return;
  }

  var wrap = document.createElement("div");
  wrap.className = "lang-switch";
  wrap.innerHTML =
    '<button class="md-header__button md-icon lang-switch__btn" type="button" ' +
    'title="切换语言" aria-label="切换语言" aria-haspopup="menu" aria-expanded="false">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>' +
    "</svg>" +
    "</button>" +
    '<div class="lang-switch__menu" role="menu">' +
    '<button class="lang-switch__item is-current" role="menuitem" type="button">' +
    "<span>简体中文</span><span class=\"lang-switch__check\" aria-hidden=\"true\">✓</span>" +
    "</button>" +
    '<button class="lang-switch__item" role="menuitem" type="button"><span>繁體中文</span></button>' +
    '<button class="lang-switch__item" role="menuitem" type="button"><span>English</span></button>' +
    "</div>";

  palette.parentNode.insertBefore(wrap, palette);

  var btn = wrap.querySelector(".lang-switch__btn");
  var menu = wrap.querySelector(".lang-switch__menu");

  btn.addEventListener("click", function (event) {
    event.stopPropagation();
    var open = wrap.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("click", function (event) {
    if (!wrap.contains(event.target)) {
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  menu.querySelectorAll(".lang-switch__item").forEach(function (item) {
    item.addEventListener("click", function () {
      // 目前只更新高亮，不做真实语言切换
      menu.querySelectorAll(".lang-switch__item").forEach(function (el) {
        el.classList.remove("is-current");
        var check = el.querySelector(".lang-switch__check");
        if (check) check.remove();
      });
      item.classList.add("is-current");
      var mark = document.createElement("span");
      mark.className = "lang-switch__check";
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = "✓";
      item.appendChild(mark);
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  initReveal();
  initLanguageSwitcher();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
