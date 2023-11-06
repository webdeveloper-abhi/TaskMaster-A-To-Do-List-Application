"use strict";

const input = document.querySelector("#task");
const Add = document.querySelector("#icon");
const additems = document.querySelector("ul");

let count = 1;
const final = function () {
  const list = document.createElement("li");
  let value = input.value;
  input.value = "";

  list.innerHTML += `
        <li>   <span>${"✅"}</span> 
          ${value}
          <box-icon name="comment-x" color="white" id="cross"></box-icon>
        </li>
  `;
  count++;
  additems.appendChild(list);
  list.addEventListener("click", () => {
    list.classList.toggle("done");
  });

  list.querySelector("box-icon").addEventListener("click", () => {
    list.remove();
  });
};

Add.addEventListener("click", final);
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    final();
  }
});
