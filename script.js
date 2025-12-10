//Search Filter
const  search = document.getElementById("search");
const tablebody = document.getElementById("tablebody");


search.addEventListener("keyup",()=>{
  const value = search.value.toLowerCase();
  const rows = tablebody.getElementsByTagName("tr");

  for(let row of rows) {
    let name = row.cells[0].innerText.toLowerCase();
    row.style.display = name.includes(value) ? "": "none";
  }
});

//Dark Mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")) {
    themeToggle.textContent="";
  }else{
    themeToggle.textContent= "";
  }
});

//chart.js
const ctx = document.getElementById("salesChart");

new Chart(ctx,{
  type:'line',
  data:{
    labels:["Jan","Feb","Mar","Apr", "May", "Jun"],
    datasets:[{
      label: 'Sales',
      data:[12,19,3,5,12,15],
      borderWidth:2
    }]
  }
});

//User Data (LocalStorage)

let users =JSON.parse(localStorage.getItem("Users")) || [
  {name:"Alan Swag",email:"Alan@gmail.com", status:"Active"},
  {name:"Sarah Smith", email: "sarah@yahoo.com", status:"pending"},
  {name:"Mark Wilson", email:"mark@gmail.com", status:"Blocked"}
];

function saveUsers(){
  localStorage.getItem("users", JSON.stringify(users));
}

function renderTable(){
  tablebody.innerHTML = "";

  users.forEach((user, index)=>{
    tablebody.innerHTML +=
    <tr>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.status}</td>
      <td><button class="delete-btn" onClick="deleteUser(${index})">Delete</button></td>
    </tr>
    ;
  });
}

function deleteUser(i) {
  users.splice(i,1);
  saveUsers();
  renderTable();
}

renderTable();

//search Filter

search.addEventListener("keyup",()=>{
  const value = search.value.toLowercase();
  const rows = tablebody.getElementsByTagName("tr");

  for(let row of rows){
    let name = row.cells[0].innerText.toLowerCase();
    if(name.includes(value))row.style.display = "";
    else row.style.display = "none";
  }
});

//Modal Logic

const modal = document.getElementById("userModal");
document.getElementById("addUserBtn").onClick = ()=>{
  const name = document.getElementById("newName").value;
  const email = document.getElementById("newEmail").value;
  const status = document.getElementById("newStatus").value;

  if(!name || !email)
return alert("Please fill all fields.");

  users.push({name,email,status});
  saveUsers();
  renderTable();
  modal.style.display = none;
};

//Dark mode

themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")?"":"";
});


