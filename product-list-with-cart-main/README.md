# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Product list with cart solution](#frontend-mentor---product-list-with-cart-solution)
  - [Table of contents](#table-of-contents)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Mobile](#mobile)
      - [Table](#table)
      - [Desktop](#desktop)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

### The challenge

Users should be able to:

[+] Add items to the cart and remove them
[+] Increase/decrease the number of items in the cart
[+] See an order confirmation modal when they click "Confirm Order"
[+] Reset their selections when they click "Start New Order"
[+] View the optimal layout for the interface depending on their device's screen size
[+] See hover and focus states for all interactive elements on the page

### Screenshot

#### Mobile

![alt text](<Screen Shot 2024-08-10 at 12.41.06.png>)

---

- Mobile selected

![alt text](<Screen Shot 2024-08-10 at 12.42.31.png>)

---

- Mobile confirmation overlay

![alt text](<Screen Shot 2024-08-10 at 12.44.46.png>)

---

#### Table

![alt text](<Screen Shot 2024-08-10 at 12.46.50.png>)

---

- Table selected

![alt text](<Screen Shot 2024-08-10 at 12.48.32.png>)

---

- Table confirmation overlay

![alt text](<Screen Shot 2024-08-10 at 12.48.59.png>)

---

#### Desktop

![alt text](<Screen Shot 2024-08-10 at 12.50.40.png>)

---

- Desktop selected

![alt text](<Screen Shot 2024-08-10 at 12.51.20.png>)

---

- Desktop confirmation overlay

![alt text](<Screen Shot 2024-08-10 at 12.51.31.png>)


### Links

- Solution URL: [Repo](https://github.com/BettoRaite/front-end-challenges/tree/master/product-list-with-cart-main)
- Live Site URL: [Product list with cart](https://product-list-by-bettoraite.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

CSS:

- Media queries
Well, I knew how use media queries to websites a bit more responsive, but this time I had to actually apply them. So, I made the website responsive for all common viewports and it was great exprience!

- Most proud of this, since it turns a column layout into row and you can actually see the cart on the right. 

```css
<!-- The point at which styles applied -->
@media (min-width: 1070px) {
  .mainLayout {
    display: grid;
    grid-template-columns: 65% 1fr;
    gap: 2rem;
    background-color: var(--white);
  }
  .layout {
    padding: 3rem;
    padding-top: 5.5rem;
  }
}

@media (min-width: 1280px) {
  .mainLayout {
    grid-template-columns: 65% 1fr;
  }
  .layout {
    padding: 6.3rem;
    padding-top: 5.5rem;
  }
}
```
- Filter
Did not look into this much, but it seems to be working!
```css
.button:hover > .buttonIconWrapper img {
  filter: brightness(0.3);
}
```

- I learned a lot about how to create responsive design in general since I never had to make a website fit for all common viewports. 

- Also, one major thing that I got better at is breaking down the website logic, design and turning it into code/html/css.
- It's very important to start thinking about website from functional pespective, like is it going to work? What if the user clicks this button, then product state will be changed, how is it going to affect other components? How does the cart know what product has been selected? All that kind of stuff. 

Overall I suppose that is it.

### Useful resources

- [tailwind](https://tailwindcss.com/docs/responsive-design) - I used their media queries to make the website responsive!

## Author

- Website - [bettoraite](https://github.com/BettoRaite)
- Frontend Mentor - [@BettoRaite](https://www.frontendmentor.io/profile/BettoRaite)
