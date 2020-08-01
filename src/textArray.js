const data = require("./data.json");
const template = (imgUrl, index, title, name) => `<div>
<div class="img">
  <img src="${imgUrl}"/>
  <div class="blick">
      <div class="spot"></div>
  </div>
  </div>
<div class="toggle">
  <button>${name}</button>
  <p class="hidden">
    ${index}. ${title}
  </p>
</div>
</div>`;

module.exports = data.map((e, i) => template(e.imgUrl, i, e.title, e.name));
