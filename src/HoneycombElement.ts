import { html, css, LitElement, property, state } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export class HoneycombElement extends LitElement {
  static styles = css`
    :host {
      --primary-color-hsl: 0, 0%, 0%;
      --primary-color: hsl(var(--primary-color-hsl));
      --primary-color-lighten-1: hsl(0, 0%, 80%);
      --transition: 0.35s ease;

      display: block;
      padding: 250px;
      color: var(--light-color, #fff);
    }

    .container {
      position: relative;
    }

    .group {
      --size: 160px;
      position: absolute;
      top: 0;
      left: 0;
      aspect-ratio: 1/1;
      width: min(100%, var(--size));

      transition: var(--transition);
    }

    .group.inBackground {
      z-index: -1;
    }

    .group.inBackground .item {
      transform: scale(0.9);
      background-color: var(--primary-color-lighten-1);
    }

    .group:nth-of-type(1) {
      transform: translate(0%, -100%);
    }

    .group:nth-of-type(2) {
      transform: translate(84%, -50%);
    }

    .group:nth-of-type(3) {
      transform: translate(84%, 50%);
    }

    .group:nth-of-type(4) {
      transform: translate(0%, 100%);
    }

    .group:nth-of-type(5) {
      transform: translate(-84%, 50%);
    }

    .group:nth-of-type(6) {
      transform: translate(-84%, -50%);
    }

    .item {
      --size: 100%;

      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: calc(var(--size) / -2);
      margin-top: calc(var(--size) / -2);
      content: '';
      display: grid;
      place-items: center;

      width: var(--size);
      aspect-ratio: 1/1;
      clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
      background-color: var(--primary-color);

      transition: var(--transition);
    }

    .active.item:nth-of-type(1) {
      transform: translate(0%, -100%);
    }

    .active.item:nth-of-type(2) {
      transform: translate(84%, -50%);
    }

    .active.item:nth-of-type(3) {
      transform: translate(84%, 50%);
    }

    .active.item:nth-of-type(4) {
      transform: translate(0%, 100%);
    }

    .active.item:nth-of-type(5) {
      transform: translate(-84%, 50%);
    }

    .active.item:nth-of-type(6) {
      transform: translate(-84%, -50%);
    }

    .heading,
    .content {
      display: block;
      margin: 0;
      color: white;
      text-align: center;
    }
  `;

  @property({ type: Array }) items = [
    [
      {
        heading: 'Hallo1',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo2',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo3',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo4',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo5',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo6',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo7',
        content: 'Lorem ipsum...',
      },
    ],
    [
      {
        heading: 'Hallo8',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo9',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo10',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo11',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo12',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo13',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo14',
        content: 'Lorem ipsum...',
      },
    ],
    [
      {
        heading: 'Hallo8',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo9',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo10',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo11',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo12',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo13',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo14',
        content: 'Lorem ipsum...',
      },
    ],
    [
      {
        heading: 'Hallo8',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo9',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo10',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo11',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo12',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo13',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo14',
        content: 'Lorem ipsum...',
      },
    ],
    [
      {
        heading: 'Hallo8',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo9',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo10',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo11',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo12',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo13',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo14',
        content: 'Lorem ipsum...',
      },
    ],
    [
      {
        heading: 'Hallo8',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo9',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo10',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo11',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo12',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo13',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo14',
        content: 'Lorem ipsum...',
      },
    ],
    [
      {
        heading: 'Hallo8',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo9',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo10',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo11',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo12',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo13',
        content: 'Lorem ipsum...',
      },
      {
        heading: 'Hallo14',
        content: 'Lorem ipsum...',
      },
    ],
  ];

  @state()
  protected _active: any = false;

  __toggle(index: Number) {
    this._active = this._active === index ? false : index;
  }

  render() {
    return html`
      <div class="container">
        ${this.items.map(
          (group, index) => html`
            <div
              class=${classMap({
                group: true,
                inBackground:
                  index !== this._active && Number.isInteger(this._active),
              })}
              @click=${() => this.__toggle(index)}
              @keydown
            >
              ${group.map(
                (item, index1) => html`
                  <div
                    data-index=${index}
                    class=${classMap({
                      item: true,
                      active: this._active === index,
                      center: index1 === 6,
                    })}
                  >
                    <div>
                      <h6 class="heading">${item.heading}</h6>
                      <p class="content">${item.content}</p>
                    </div>
                  </div>
                `
              )}
            </div>
          `
        )}
      </div>
    `;
  }
}
