/* 
 * casually-button.ts
 *    Lit element that produces pre-styled buttons
 *    
 *    @ Casually UI collection
 *    Visit our home! https://github.com/andreaabellera/Casually-UI
 */

import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { choose } from "lit/directives/choose.js"
import { skinStyles } from './styles/skinStyles';
import { buttonStyles } from './styles/buttonStyles';


@customElement("casually-button")
export class CasuallyButton extends LitElement {
  static styles = [ skinStyles, buttonStyles ]
  
  @property({type: String})
  text = "Button"

  @property({type: String})
  link = "/"

  @property({type: String})
  shape = "hex"

  @property({type: String})
  skin = "platinum"

  render() {
    return html`
      <a href="${this.link}" id="${this.shape}" class="btnOuter ${this.skin}">
      ${choose(this.shape, [
          
        ["wedge", () => html`<div class="btnInner">${this.text}</div>`],
        ["hex", () => html`
          <span class="pt">
            <div></div><div></div>
          </span>
          <div class="btnInner">
            <div><div class="fill">${this.text}</div></div>
          </div>
          <span class="pt">
            <div></div><div></div>
          </span>
        `]

        ])}
      </a>
    `
  }
}