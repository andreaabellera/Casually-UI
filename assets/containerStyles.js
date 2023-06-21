import { css } from "lit"

export const containerStyles = css`
#box{
    min-width: 5vw;
    max-width: 70vw;
    min-height: 5vh;
    display: grid;
    justify-items: center;
    align-items: center;
}

.boxRowLayout{
    display: flex !important;
    justify-content: space-between;
}

.scene {
    margin: 50px 0 0 50px;
    perspective: 1000px;
    perspective-origin: 1200px 800px;
}

.cube {
    transform-style: preserve-3d;
}

.cube div {
    display: block;
    position: absolute;
    backface-visibility: visible;
}

.front {
    border-bottom: 1px solid pink;
    border-right: 1px solid rgb(248, 195, 203);
    transform: translateZ(5px);
}

.back {
    background: rgba(246, 180, 180, 0.4);
    transform: translateZ(-5px);
}

.top {
    background: rgba(255, 90, 112, 0.9);
    transform: rotateX(90deg) translateZ(5px);
    height: 10px;
}

.bottom {
    background: rgba(246, 167, 167, 0.9);
    height: 10px;
}

.left {
    background: rgba(246, 147, 137, 0.9);
    transform: rotateY(-90deg) translateZ(5px);
    width: 10px;
}

.right {
    background: rgba(255, 198, 198, 0.9);
    width: 10px;
}

#card{
    min-width: 4em;
    max-width: 60vw;
    min-height: 4em;
    display: grid;
    justify-items: center;
    overflow: hidden;
}

#card.hoverable{
    cursor: pointer;
}

/* Thanks Grid, sister Flex is being rebellious */
.imgOnLeft{
    grid-template-columns: max-content 1fr;
}
.imgOnRight{
    grid-template-columns: 1fr max-content;
}
.imgOnTop{
    grid-template-rows: max-content 1fr;
}
.imgOnBottom{
    grid-template-rows: 1fr max-content;
}

.imgOnLeft .cardThumb, .imgOnRight .cardThumb{
    height: 100%;
    width: 4em;
}
.imgOnTop .cardThumb, .imgOnBottom .cardThumb{
    height: 4em;
    width: 100%;
    padding: 0.3em;
}


.cardThumb{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset -0.1em 0.2em 0.3em rgb(0,0,0,0.6);
    height: 100%;
    width: 100%;
}

.cardInner{
    height: 85%;
    width: 85%;
}
`