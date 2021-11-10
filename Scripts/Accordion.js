// let accordionJS = {
//   2020: [
//     {
//       Апрель: [{}],
//     },
//     {
//       Май: [{}],
//     },
//     {
//       Июнь: [{}],
//     },
//   ],
//   2021: [
//     {
//       Апрель: [{}],
//     },
//     {
//       Май: [{}],
//     },
//     {
//       Июнь: [{}],
//     },
//   ],
// };

// let arr = accordionJS.map((e) => {
//   return `
//     <div
//       class="accordian ok1 accordianInner"
//       style="padding: 0; background-color:none;"
//     >
//       <h3 class="ok accordianIn">
//         <a class="" href="#">
//           {e[0]}
//         </a>
//       </h3>
//       <div class="accordian1vl">
//         <div
//           class="accordian ok1 accordianInner"
//           style="padding: 0; background-color:none;"
//         >
//           <h3 class="ok accordianIn2">
//             <a class="" href="#">
//               14.06.2021
//             </a>
//           </h3>
//           <div class="accordian1vl">
//             <div class="accordianIn3"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `;
// });
// function findObjectByLabel(obj, label) {
//   for (let elements in obj) {
//     if (elements === label) {
//       console.log(obj[elements]);
//     }
//     if (typeof obj[elements] === "object") {
//       findObjectByLabel(obj[elements], []);
//     }
//   }
// }

// findObjectByLabel(accordionJS, []);
