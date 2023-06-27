/* 
 * casually-box.ts
 *    Lit element that produces a pre-styled container with a body slot
 *    
 *    @ Casually UI collection
 *    Visit our home! https://github.com/andreaabellera/Casually-UI
 */

import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { skinStyles } from '../assets/skinStyles';
import { containerStyles } from '../assets/containerStyles';

@customElement("casually-box")
export class CasuallyBox extends LitElement {
  static styles = [ skinStyles, containerStyles ]

  @property({type: String})
  skin = "platinum"

  @property({type: String})
  width = "max-content"

  @property({type: String})
  height = "max-content"

  @property({type: String})
  margin = "1.5em"

  @property({type: String})
  padding = "1em"

  @property({type: Boolean})
  row = false

  @state({type: String})
  rowClass = ""

  constructor() {
    super()
    if(this.row)
      this.rowClass = "boxRowLayout"
  }

  render() {
    return html`
      <div id="box" class="${this.skin} ${this.rowClass}" style="height:${this.height}; width:${this.width}; margin:${this.margin}; padding:${this.padding};">
        <slot></slot>
      </button>
    `
  }
}