/*------------------Első verzió----------------------*/

/* const box = document.createElement("div");
box.id ="box1";
document.body.appendChild(box);

const button =document.createElement("button");
button.innerText = 'Klikk';
button.classNeme ="proba";
box.appendChild(button); */

/*------------------Második verzió----------------------*/

/* document.body.appendChild(
    Object.assign(document.createElement("div"), { id: "box2"}
    )
).appendChild(
    Object.assign(
      document.createElement('button'),
      { innerHTML : 'button' ,
        id:'button-1'
      }
    )
  ) */

/*------------------Harmadik verzió----------------------*/
/* const thirdMet = `
<div id="box3"></div>
`;

document.body.innerHTML = thirdMet; */

let nav = document.querySelector(".js-cat-nav");
let footer = document.querySelector(".js-footer");

const navJS = `
<div class="logo">
        <img src="./img/mrCat.png" alt="macskáslogo" />
      </div>
      <ul class="nav-menu">
        <li class="nemu-item"><a href="./index.html">Főoldal</a></li>
        <li class="nemu-item"><a href="./about.html">Rólunk</a></li>
        <li class="nemu-item"><a href="./cont.html">Kapcsolat</a></li>
        <li class="nemu-item"><a href="./impres.html">Impresszum</a></li>
        <li class="nemu-item"><a href="#">Játék</a></li>
      </ul>`;

const footerJS = `
<section class="footer-first">
          <ul class="footer-nav">
            <li class="footer-item"><a href="./proba.html">Sütik</a></li>
            <li class="footer-item"><a href="./adat.html">Adatkezelés</a></li>
            <li class="footer-item"><a href="./catImpress.html">Impresszum</a></li>
            <li class="footer-item"><a href="./catCont.html">Kapcsolat</a></li>
          </ul>
        </section>
        <section class="footer-second">
          <p>COPYRIGHT ©2022 Mr.Kocka</p>
        </section>`;

nav.innerHTML = navJS;

footer.innerHTML = footerJS;
