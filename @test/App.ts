import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "casually-button";

@customElement("app-root")
export class App extends LitElement {
  render() {
    return html`
      <casually-button text="Connected from Lit!"></casually-button>
      <casually-button skin="asphalt" text="Button"></casually-button>
      <casually-button shape="wedge" text="Button"></casually-button>
      <casually-button shape="wedge" skin="asphalt" text="Button"></casually-button>
      <casually-card>Yep</casually-card>
      <casually-box>
        <social-button link="https://linkedin.com"></social-button>
        <social-button link="https://github.com"></social-button>
        <social-button link="https://www.twitter.com/"></social-button>
      </casually-box>
    `
  }
}