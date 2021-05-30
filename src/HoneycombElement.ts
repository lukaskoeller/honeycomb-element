import { html, css, LitElement, property, state } from 'lit-element';

export class HoneycombElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--honeycomb-element-text-color, #000);
    }

    .group {
      position: relative;
    }

    .item {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      display: grid;
      place-items: center;

      width: 160px;
      aspect-ratio: 1/1;
      clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
      background-color: blue;
    }

    .active .item:nth-of-type(1) {
      transform: translate(0%, -100%);
    }

    .active .item:nth-of-type(2) {
      transform: translate(84%, -50%);
    }

    .active .item:nth-of-type(3) {
      transform: translate(84%, 50%);
    }

    .active .item:nth-of-type(4) {
      transform: translate(0%, 100%);
    }

    .active .item:nth-of-type(5) {
      transform: translate(-84%, 50%);
    }

    .active .item:nth-of-type(6) {
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

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

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
  ];

  @state()
  protected _active = false;

  __increment() {
    this.counter += 1;
  }

  __toggle() {
    this._active = !this._active;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      ${this.items.map(
        group =>
          html`
            <div class="group">
              ${group.map(
                item =>
                  html`
                    <div class="item">
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
    `;
  }
}
