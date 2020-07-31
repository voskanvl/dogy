const data = require("./data.json");
const template = (imgUrl, index, title) => `<div>
<div class="img">
  <img src="${imgUrl}"/>
  <div class="blick">
      <div class="spot"></div>
  </div>
  </div>
<p>
  ${index}. ${title}
</p>
</div>`;

module.exports = data.map((e, i) => template(e.imgUrl, i, e.title));
