import { css } from "lit"

export const buttonStyles = css`
#wedge.btnOuter{
    display: block;
    height: max-content;
    max-height: 40vh;
    width: max-content;
    max-width: 300px;
    min-width: 100px;
    overflow: hidden;
    margin: 40px;
    transform: skewX(-30deg);
}

#hex.btnOuter {
    height: max-content;
    max-height: 40vh;
    margin: 20px;
    display: grid;
    grid-template-columns: 1.3em max-content 1.3em;
}

#hex .btnInner{
    height: max-content;
    width: max-content;
    z-index: 3;
}

#wedge .btnInner{
    transform: skewX(30deg);
    text-align: center;
}

#hex .btnInner div{
    height: 100%;
    width: max-content;
    margin-top: calc(0.2em - 0.8%);
    margin-bottom: calc(0.2em - 0.8%);
    overflow: hidden;
}

.fill{
    margin: 0.4em 0 0.4em 0;
    padding: 0.4em 0.7em 0.4em 0.7em;
    max-width: 300px;
    min-width: 100px;
    text-align: center;
}

.btnOuter span{
    clip-path: polygon(0% 50%, 90% 0%, 100% 0%, 100% 100%, 90% 100%);
    position: relative;
    margin-right: -3%;
}

.btnOuter span:last-of-type{
    transform: rotate(180deg);
    margin-left: -3%;
}

.pt div{
    position: absolute;
    clip-path: polygon(0% 50%, 90% 0%, 100% 0%, 100% 100%, 90% 100%);
    height: 100%;
    width: 100%;
}

.pt div:nth-child(1){
    left: 15%;
    z-index: 4;
}

.pt div:nth-child(2){
    left: calc(15% + 0.13em);
    z-index: 5;
}

@media (max-width: 600px) {
    #wedge.btnOuter{
        border: 3px solid var(--sage);
        box-shadow: 0 0 0 4px #D9D9D9;
    }
}

#social{
    display: block;
    height: 32px;
    width: 32px;
    padding: 0.1em;
    margin: 10px;
    border-radius: 0.2em;
}

#social img{
    height: 100%;
    width: 100%;
}
`