let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

let API = "https://6882448866a7eb81224e0dd3.mockapi.io/api/v1/todo";

addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  if (data) {
    todoContainer.innerHTML = "";

    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
        <p class='paraText'>${obj.text}</p>
        <input class="editInput" type="text" value="${obj.text}" style="display:none;" />
        <div>
          <button class='deleteBtn'>Delete</button>
          <button class='editBtn'>Edit</button>
          <button class='saveBtn' style="display:none;">Save</button>
        </div>
      `;

      let deleteBtn = div.querySelector(".deleteBtn");
      let editBtn = div.querySelector(".editBtn");
      let saveBtn = div.querySelector(".saveBtn");
      let paraText = div.querySelector(".paraText");
      let editInput = div.querySelector(".editInput");

      deleteBtn.addEventListener("click", function () {
        deleteData(obj.id);
      });

      editBtn.addEventListener("click", function () {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        paraText.style.display = "none";
        editInput.style.display = "inline";
      });

      saveBtn.addEventListener("click", async function () {
        let editValue = editInput.value;
        let response = await updateData(obj.id, editValue);
        if (response.status === 200) {
          fetchData(); // Refresh UI
        }
      });

      todoContainer.append(div);
    });
  }
}

async function postData() {
  let value = taskInput.value;

  if (!value.trim()) return;

  let objData = {
    text: value.trim()
  };

  let response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objData)
  });

  if (response.status === 201) {
    fetchData();
    taskInput.value = "";
  }
}

async function updateData(id, value) {
  let objData = {
    text: value.trim()
  };

  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objData)
  });

  return response;
}

async function deleteData(id) {
  let response = await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  if (response.status === 200) {
    fetchData();
  }
}

fetchData();











// js async nahi hota h
// js sync hota h bydefault

// api call apka promise return karega ar bolega aage badho block mat karo data mai de dunga aayega to

// async await

// but agar apne function async bana diya hai to async function ka behaviour kuch aaisa hota hai ki agar aap uske andar fetch waigera use karte ho  and await karte ho to aage ka task wo tabtak nahi karega jabtak apka async task complete nahi ho jaata....