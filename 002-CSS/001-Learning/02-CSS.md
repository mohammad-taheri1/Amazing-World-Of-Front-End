# 01 - Elementary

## Folder Structure

## Syntax

## Elementary Selectors

- general

- tag name
- class
- id

## Box Model

### [The_box_model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

<img src="./images/MDN_box-model.png" >

- Content

  - Width (min-width, max-width)

  - Height (min-height, max-height)

- Padding

- Margin

- border

## Box-sizing :

### [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

<img src="./images/box-sizing.png" >
	 
* content-box
* border-box

## CSS Reset

## Dynamic content

- VW -> ViewPort Width (like: 100vw)

- VH -> ViewPort Heigth (like: 100vh)

## Static content

Static size(Absolute width || Absolute height)

## Reusability

## Units

- ### Absolute Lengths

  | Unit Name | Unit Description             |
  | --------- | ---------------------------- |
  | cm        | centimeters                  |
  | mm        | millimeters                  |
  | in        | inches (1in = 96px = 2.54cm) |
  | px        | pixels (1px = 1/96th of 1in) |
  | pt        | points (1pt = 1/72 of 1in)   |
  | pc        | picas (1pc = 12 pt)          |

- ### Relative Lengths

  | Unit Name | Unit Description                                                                                           |
  | --------- | ---------------------------------------------------------------------------------------------------------- |
  | em        | Relative to the font-size of the element (2em means 2 times the size of the current font) (Parent element) |
  | ex        | Relative to the x-height of the current font (rarely used)                                                 |
  | ch        | Relative to the width of the "0" (zero)                                                                    |
  | rem       | Relative to font-size of the root element                                                                  |
  | vw        | Relative to 1% of the width of the viewport                                                                |
  | vh        | Relative to 1% of the height of the viewport                                                               |
  | vmin      | Relative to 1% of viewport's\* smaller dimension                                                           |
  | vmax      | Relative to 1% of viewport's\* larger dimension                                                            |
  | %         | Relative to the parent element                                                                             |

- ### change default rem size :

  html {
  font-size: 62.5%; // This line turns 1rem to 10px instead of 16px
  }

## Fonts
 * font-family
 * font-style
    * normal
    * italic
    * oblique
 * font-weight
     * normal
     * bold
     * 100
 * font-variant
 * font-size


## Display
 * none
 * block
 * inline
 * inline-block
 * flex
    ### 1-flex-direction
      * row 
      * row-reverse
      * column 
      * column-reverse

    ### 2-flex axis:
      * ### main 
          main is exact the flex-direction Horizontal or vertical type

          <img src="./images/flex-1.png" > 

          <img src="./images/flex-2.png" >

      * ### cross 
          main is oposite of the flex-direction Horizontal or vertical type

          <img src="./images/flex-3.png" > 
          
          <img src="./images/flex-4.png" > 

    ### 3-justify-content
      This is the main axis selector
      * flex-start : `Default`
      * center
      * flex-end
      * space-between
      * space-around
      * space-evenly
    
    ### 4-align-items
      This is the cross axis selector
      * flex-start 
      * center
      * flex-end
      * stretch : `Default`
      * baseline 

      <img src="./images/flex-align-items.PNG" />


    ### 5-align-content  
      This is the main axis selector that accepts properties just like justify-content
      * flex-start
      * center
      * flex-end
      * space-between
      * space-around
      * space-evenly


    ### 6-align-self
      This is the cross axis selector for the selected element itself- not the childrens!!!!!
      * flex-start 
      * center
      * flex-end
      * stretch
      * baseline 


    ### 7-flex-wrap
      This property switches flex container between one-line and multi-line
      * wrap
      * nowrap : `Default`
      * wrap-reverse

    ### 8-flex-flow  
      This property combines flex-direction & flex-wrap like this:  <`flex-direction`> <`flex-wrap`> 
      * row
      * column
      * wrap
      * nowrap
      * row wrap
      * row nowrap
      * column wrap
      * column nowrap

    ### 9-flex-basis
      This property defines the size of any item according to the available space. It's initial value is: `auto`.
      * Example: 

            flex-basis: 200px

    ### 10-flex-grow
      This property defines the grow size in main axis from the flex-basis. It will stretch the item to the available space

    ### 11-flex-shrink
      This property is the opposite of flex-grow. It handles smaller sizes. Higher shrink will shrink faster
    
    ### 12-shorthand flex 
      order of values: <`flex-grow`> <`flex-shrink`> <`flex-basis`>

    ### 13-gap
      specifying the size of gutters, which is the space between rows and columns
      * gap
      * row-gap
      * column-gap


     ### 14-Order
      Specifying the order of each item.



 * grid

## Overflow

## Z-index

---

# 02 - Intermediate

## Intermediate Selectors

- Element > element

- Element + element
- Element ~ element

## !important

## Calc()

## Min()

## Max()

## Pseudo-classes

- :root

## Pseudo-elements

## Transition

### properties
* transition (shorthand)
  *  transition: <`property`> <`duration`> <`timing-function`> <`delay`>;
* transition-delay
* transition-duration
* transition-property
* transition-timing-function
  * ease 
  * linear  
  * ease-in 
  * ease-out 
  * ease-in-out 
  * cubic-bezier(n,n,n,n) 
### Examples

      transition: width 2s linear 1s;

      transition: all 0.5s ease-in-out;

      transition: transform 0.5s cubic-bezier(0.7, 0.04, 0.66, 1.71);


## Transform
 

* transform: none;

* transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
* transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
* transform: perspective(17px);
* transform: rotate(0.5turn);
* transform: rotate(180deg)
* transform: rotate3d(1, 2.0, 3.0, 10deg);
* transform: rotateX(10deg);
* transform: rotateY(10deg);
* transform: rotateZ(10deg);
* transform: translate(12px, 50%);
* transform: translate3d(12px, 50%, 3em);
* transform: translateX(2em);
* transform: translateY(3in);
* transform: translateZ(2px);
* transform: scale(2, 0.5);
* transform: scale3d(2.5, 1.2, 0.3);
* transform: scaleX(2);
* transform: scaleY(0.5);
* transform: scaleZ(0.3);
* transform: skew(30deg, 20deg);
* transform: skewX(30deg);
* transform: skewY(1.07rad);



## CSS Flexbox

## CSS Grid Layout

---

# 03 - Advanced

## Animation

### Properties
* animation
* animation-delay
* animation-direction
* animation-duration
* animation-fill-mode
* animation-iteration-count
* animation-name
* animation-play-state
* animation-timeline
* animation-timing-function

## Media Query

## Filter (graphical effects)

- blur

- brightness

- contrast

- drop-shadow

- grayscale

- hue-rotate

- invert

- opacity

- saturate

- sepia

---

# 04 - Examples

## Icon style (`<i></i>`)

## Link style (`<a></a>`)

## Modal
