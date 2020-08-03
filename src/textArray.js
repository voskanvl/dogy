const data = require("./data.json");
const template = (imgUrl, index, title, name, alt) =>
  `<div class="item">
    <div class="img">
      <img src="${imgUrl}" alt="${alt}"/>
      <div class="blick">
          <div class="spot"></div>
      </div>
    </div>
    <div class="wrap_toggle_trigger">
      <button class="toggle_trigger">${name}</button>
      <div class="toggle_trigger_mark">▽</div>
    </div>
    <div class="toggle hidden">
      <p>
        ${index}. ${title}
      </p>
    </div>
  </div>`;

module.exports = data.map((e, i) =>
  template(e.imgUrl, i, e.title, e.name, e.alt)
);
