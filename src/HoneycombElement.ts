import { html, css, LitElement, property, state } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map.js';

interface ItemInterface {
  heading: string;
  content?: string;
  image?: {
    src: string;
    title?: string;
  };
}

export class HoneycombElement extends LitElement {
  static styles = css`
    :host {
      --honeycomb-font-family: 'FlamaSemicondensed', 'Roboto Condensed',
        'Helvetica Neue', Arial, sans-serif;
      --honeycomb-global-size: 160px;
      --honeycomb-primary-color: hsl(0, 0%, 0%);
      --primary-color-lighten-1: hsl(0, 0%, 80%);
      --primary-color-lighten-2: hsl(0, 0%, 90%);
      --primary-color-lighten-3: hsl(0, 0%, 95%);
      --transition: 0.35s ease;
      --base-spacing: 4px;
      --base-radius: 4px;
      --font-size: 100%;

      font-family: var(--honeycomb-font-family);
      font-size: var(--font-size);
      color: var(--light-color, #fff);
    }

    .container {
      position: relative;
      width: calc(var(--honeycomb-global-size) * 5);
      height: calc(var(--honeycomb-global-size) * 5);
      margin: auto;
    }

    .group {
      --size: var(--honeycomb-global-size);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: calc(var(--size) / -2);
      margin-top: calc(var(--size) / -2);
      aspect-ratio: 1/1;
      width: min(100%, var(--size));

      transition: var(--transition);
    }

    .group.inBackground {
      z-index: -1;
    }

    .group.inBackground .item {
      transform: scale(0.9);
      background-color: var(--honeycomb-primary-color-lighten-1);
    }

    .item {
      --size: 100%;

      position: absolute;

      content: '';
      display: grid;
      place-items: center;

      width: var(--size);
      aspect-ratio: 1/1;
      clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
      background-color: var(--honeycomb-primary-color);
      overflow: hidden;

      cursor: pointer;

      transition: var(--transition);
    }

    .image {
      --image-size: calc(var(--honeycomb-global-size) / 3);

      margin: 0 auto;
      margin-bottom: calc(var(--base-spacing) * 2);

      width: var(--image-size);
      height: var(--image-size);
      border-radius: 100%;
      overflow: hidden;

      box-shadow: 0px 0px 0px 2px white;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .active.item:nth-of-type(7),
    .group:nth-of-type(7) {
      transform: translate(0%, -100%);
    }

    .active.item:nth-of-type(2),
    .group:nth-of-type(2) {
      transform: translate(84%, -50%);
    }

    .active.item:nth-of-type(3),
    .group:nth-of-type(3) {
      transform: translate(84%, 50%);
    }

    .active.item:nth-of-type(4),
    .group:nth-of-type(4) {
      transform: translate(0%, 100%);
    }

    .active.item:nth-of-type(5),
    .group:nth-of-type(5) {
      transform: translate(-84%, 50%);
    }

    .active.item:nth-of-type(6),
    .group:nth-of-type(6) {
      transform: translate(-84%, -50%);
    }

    .heading,
    .content {
      display: block;
      margin: 0;
      color: white;
      text-align: center;
    }

    .heading {
      font-size: 0.9rem;
      text-transform: uppercase;
    }

    .content {
      font-size: 0.8rem;
    }

    code {
      display: block;
      box-sizing: border-box;
      padding: calc(var(--base-spacing) * 3);
      background-color: var(--honeycomb-primary-color-lighten-2);
      border-radius: var(--base-radius);
      text-align: center;
      color: var(--honeycomb-primary-color);
    }
  `;

  @property({ type: Array }) items: ItemInterface[][] = [];

  @state()
  protected _active: any = false;

  __toggle(index: Number | Boolean) {
    this._active = this._active === index ? false : index;
  }

  __close() {
    this._active = false;
  }

  render() {
    return html`
      <div class="container">
        ${this?.items?.length !== 0
          ? this.items.map(
              (group, index) => html`
                <div
                  class=${classMap({
                    group: true,
                    inBackground:
                      index !== this._active && Number.isInteger(this._active),
                  })}
                  @click=${() => this.__toggle(index === 0 ? false : index)}
                  @keydown
                >
                  ${group.map(
                    (item, index1: Number) => html`
                      <div
                        style=${styleMap({
                          ...(item?.image?.src
                            ? { backgroundImage: `url('${item?.image?.src}')` }
                            : {}),
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                        })}
                        data-index=${index}
                        class=${classMap({
                          item: true,
                          active: this._active === index,
                          center: index1 === 6,
                        })}
                      >
                        <div>
                          ${item?.image
                            ? html` <div class="image">
                                <img
                                  class="img"
                                  src=${item.image.src}
                                  alt=${item.image?.title || item.heading}
                                  title=${item.image?.title || item.heading}
                                />
                              </div>`
                            : null}
                          <h6 class="heading">${item.heading}</h6>
                          <p class="content">${item.content}</p>
                        </div>
                      </div>
                    `
                  )}
                </div>
              `
            )
          : html`<code>Error: Please add items to the "items" property.</code>`}
      </div>
    `;
  }
}
