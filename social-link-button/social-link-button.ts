/* 
 * social-link-button.ts
 *    Lit element that generates pre-styled social media or link buttons
 *    
 *    @ Casually UI collection
 *    Visit our home! https://github.com/andreaabellera/Casually-UI
 */

import { LitElement, html, svg } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import "../assets/skin.css"
import "../assets/button.css"
import Link from "../assets/social/link.svg"
import { skinStyles } from '../assets/skinStyles';
import { buttonStyles } from '../assets/buttonStyles';


@customElement("social-button")
export class SocialButton extends LitElement {
  static styles = [ skinStyles, buttonStyles ]

  @property({type: String})
  skin = "platinum"

  @property({type: String})
  link = "/"

  @state({type: String})
  handleSrcRef = Link

  @state({type: String})
  handleRef = "url"

  @state()
  handleSrc = Link

  @state({type: Array})
  socials = ['discord','facebook','forms','github','instagram','linkedin','reddit','steam','tiktok','twitch','twitter','youtube']

  searchSocialHandle(newURL: String){
    let matches = newURL.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
    let clearDomain = matches && matches[1]

    // Find social handle match
    if(clearDomain){
        let toks = clearDomain.split('.')
        for (let candidate of toks){
            let match = this.socials.find(s => s == candidate)
            if(match)
                return match
        }
    } return null
  }

  render() {

    let matched = this.searchSocialHandle(this.link)
    if(matched){
        this.handleRef = matched
        this.handleSrcRef = Link.replace("link",matched)
    }

    // Fetch SVG element to render on component
    ;(async ()=>{
        const res = await fetch(this.handleSrcRef)
        const src = await res.text()
        this.handleSrc = src
        // Replace <a> innerHTML with ${this.handleSrc} after learning how to get svg fragment from fetch
    })()

    return html`
      <a id="social" href="${this.link}" class="${this.skin}">
        <img src=${this.handleSrcRef} alt=${this.handleRef}>
      </a>
    `
  }
}