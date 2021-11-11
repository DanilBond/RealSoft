let accordionJS = {
    2020: [
        {
            Апрель: [{}],
        },
        {
            Май: [{}],
        },
        {
            Июнь: [{}],
        },
    ],
    2021: [
        {
            Апрель: [{}],
        },
        {
            Май: [{}],
        },
        {
            Июнь: [{}],
        },
    ],
};

let accordion = $(".asd");
console.log(accordion);
const renderYear = (arrAcc) => {
    for (let i in arrAcc) {
        const year = $("<h3>", {
            class: "ok accordian__year",
        });
        const a = $("<a>", { href: "#" });
        const folder = $("<div>", { class: "accordian__folder" });
        a.text(i);
        year.append(a);
        year.append(folder);
        accordion.append(year);
        renderMonth(arrAcc[i]);
    }
};

renderYear(accordionJS);

function renderMonth(arrMotnh) {
    for (let i = 0; i < arrMotnh.length; i++) {
        console.log(arrMonth[i]);
    }
}

function renderDay() {}

// let arr = accordionJS.map((e) => {
//     return `
{
    /* <h3 class="ok accordian__year"><a href="#">2020</a><div class="accordian__folder"></div></h3>

<div class="accordian ok1 accordianInner" style="padding: 0; background-color:none;">
  <h3 class="ok accordianIn"><a class="" href="#">Апрель</a><div class="accordian__folder"></div></h3>
  <div class="accordian1vl">
    
    <div class="accordian ok1 accordianInner" style="padding: 0; background-color:none;">
      <h3 class="ok accordianIn2"><a class="" href="#">16.06.2021</a><div class="accordian__folder"></div></h3>
      <div class="accordian1vl">
        <div class="accordianIn3Fir">
          <div class="accordian_checkbox">
            <div class="square-checkbox">
              <label>

                <input type="checkbox" name="" id="" />
                <span></span>
              </label>
            </div>
          </div>
          <img src="./images/accordian__status-purple.svg">
          <p>0064</p>
          <p>А-15-Б</p>
          <p>16.02.2021</p>
          <p>15.06.2021</p>
          <!-- <img src="./images/accordian__p.png"> -->
          <p class="text-around">P</p>
          <div>
            <p class="in3title">"ABS"</p>
            <p class="in3bottomText">example@email.com</p>
          </div>
          <p>Добрый день! Во вложении разместил документ, которы...</p>
          <p>Генеральный директор</p>
        </div>
        <div class="accordianIn3Fir">
          <div class="accordian_checkbox">
            <div class="square-checkbox">
              <label>

                <input type="checkbox" name="" id="" />
                <span></span>
              </label>
            </div>
          </div>
          <img src="./images/accordian__status-red.svg">
          <p>0064</p>
          <p>А-15-Б</p>
          <p>16.02.2021</p>
          <p>15.06.2021</p>
          <!-- <img src="./images/accordian__p.png"> -->
          <p class="text-around">P</p>
          <div>
            <p class="in3title">"ABS"</p>
            <p class="in3bottomText">example@email.com</p>
          </div>
          <p>Добрый день! Во вложении разместил документ, которы...</p>
          <p>Генеральный директор</p>
        </div>
      </div>

    </div>
  </div>
</div> */
}
//     `;
// });
// function findObjectByLabel(obj, label) {
//     for (let elements in obj) {
//         if (elements === label) {
//             console.log(obj[elements]);
//         }
//         if (typeof obj[elements] === "object") {
//             findObjectByLabel(obj[elements], []);
//         }
//     }
// }

// findObjectByLabel(accordionJS, []);
