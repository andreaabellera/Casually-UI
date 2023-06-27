/* 
 * casually-card.ts
 *    Lit element that produces a range of customizable, pre-styled cards 
 *    
 *    @ Casually UI collection
 *    Visit our home! https://github.com/andreaabellera/Casually-UI
 */

import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { skinStyles } from '../assets/skinStyles';
import { containerStyles } from '../assets/containerStyles';

@customElement("casually-card")
export class CasuallyCard extends LitElement {
  static styles = [ skinStyles, containerStyles ]

  @property({type: String})
  skin = "platinum"

  @property({type: String})
  link = null

  @property({type: String})
  image = null

  @property({type: String})
  imagePosition = "left"

  @property({type: String})
  width = "max-content"

  @property({type: String})
  height = "max-content"

  @property({type: String})
  margin = "1.5em"

  @state({type: String})
  posClass = ""

  @state({type: String})
  hoverClass = ""

  constructor() {
    super()
    if(this.image && this.imagePosition=="top") { this.posClass = "imgOnTop" }
    else if(this.image && this.imagePosition=="right") { this.posClass = "imgOnRight" }
    else if(this.image && this.imagePosition=="bottom") { this.posClass = "imgOnBottom" }
    else if(this.image && this.imagePosition=="left"){ this.posClass = "imgOnLeft" }
    if(this.link) { this.hoverClass = "hoverable" }
  }

  generateRedirect(){
    if(this.link){
        var a = document.createElement("a")
        document.body.appendChild(a)
        a.href = this.link
        a.click()
        window.URL.revokeObjectURL(this.link)
    }
  }

  top(){
    if(this.image && (this.imagePosition=="left" || this.imagePosition=="top"))
      return html`<div class="cardThumb" style="background-image:url(${this.image})"></div>`
  }

  bottom(){
    if(this.image && (this.imagePosition=="right" || this.imagePosition=="bottom"))
      return html`<div class="cardThumb" style="background-image:url(${this.image})"></div>`
  }

  render() {
    return html`
    <div @click=${this.generateRedirect} id="card" class="${this.skin} ${this.posClass} ${this.hoverClass}" style="height:${this.height}; width:${this.width}; margin:${this.margin};" role="link" aria-label="Clicking this card will redirect page to ${this.link}">
        ${this.top()}
        <div class="cardInner"><slot></slot></div>
        ${this.bottom()}
    </div>
    `
  }
}