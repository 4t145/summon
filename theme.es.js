import { css, LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let RdnmkDanmaku = class extends LitElement {
  constructor() {
    super(...arguments);
    this.danmaku = "";
    this["show-medal"] = false;
  }
  render() {
    if (this.danmaku === "") {
      return html``;
    } else {
      const danmaku = JSON.parse(this.danmaku);
      const medal_part = this["show-medal"] ? html`
        <div class="danmaku-medal">
          ${danmaku.fans_medal ? html`
              <rdnmk-medal 
              level=${danmaku.fans_medal.medal_level} 
              name=${danmaku.fans_medal.medal_name} 
              />
            ` : html`

            `}
        </div>
      ` : html`

      `;
      const name_part = html`
        <span class="danmaku-uname">
          ${danmaku.user.uname}
        </span>
      `;
      const msg_part = danmaku.message.tag === "Emoticon" ? html`
        <span class="danmaku-emoticon">
          <img referrerPolicy="no-referrer" src="{danmaku.message.data.emoticon.url}" alt="[表情:{danmaku.message.data.alt_message}]" height="54px">
        </span>
      ` : html`
        ${danmaku.message.data.message}
      `;
      return html`
        ${medal_part}
        ${name_part}
        ${msg_part}
      `;
    }
  }
};
RdnmkDanmaku.styles = css`
  :host {
    display: block;
    height: auto;
    word-break: break-all;
    text-shadow: 0px 0px 4px chartreuse, 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black;
    color: white;

    overflow-wrap: anywhere;
  }

  .danmaku-medal {
    text-shadow: none;
    width: 7em;
  }

  .danmaku-uname, .danmaku-medal, .danmaku-emoticon {
    position: relative;
    display: inline-block;

    vertical-align: middle;
  }

  .danmaku-uname {
    font-family: 'Heiti';
    font-size: small;
    padding-left: 3px;
    padding-right: 1em;
    paint-order: stroke fill;
    text-shadow: 0px 0px 3px white,
  }
  `;
__decorateClass([
  property({ type: String })
], RdnmkDanmaku.prototype, "danmaku", 2);
__decorateClass([
  property({ type: Boolean })
], RdnmkDanmaku.prototype, "show-medal", 2);
RdnmkDanmaku = __decorateClass([
  customElement("rdnmk-danmaku")
], RdnmkDanmaku);
let RdnmkMedal = class extends LitElement {
  constructor() {
    super(...arguments);
    this.guard_level = 0;
    this.level = 0;
    this.name = "";
    this.nomedal = false;
  }
  render() {
    if (this.nomedal) {
      return html``;
    }
    return html`
      <div class="medal-name">${this.name}</div>
      <div class="medal-level">${this.level}</div>
    `;
  }
};
RdnmkMedal.styles = css`
    :host {
      display: grid;
      grid-template-areas: "name medal";
      grid-template-columns: 70% 30%;
      align-items: center;

      background-color:black;
      font-size: inherit;
    }
    .medal-name {
      display: inline-flex;
      justify-content: center;
      grid-area: name;
      align-items: center;
      height: 100%;
      color: white;
      background-color: black;
    }
    .medal-level {
      grid-area: medal;
      justify-content: center;

      display: inline-flex;
      align-items: center;
      height: 100%;
      color: black;
      background-color: white;
    }
  `;
__decorateClass([
  property({ type: Number })
], RdnmkMedal.prototype, "guard_level", 2);
__decorateClass([
  property({ type: Number })
], RdnmkMedal.prototype, "level", 2);
__decorateClass([
  property({ type: String })
], RdnmkMedal.prototype, "name", 2);
__decorateClass([
  property({ type: Boolean })
], RdnmkMedal.prototype, "nomedal", 2);
RdnmkMedal = __decorateClass([
  customElement("rdnmk-medal")
], RdnmkMedal);
export { RdnmkDanmaku, RdnmkMedal };
