let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    addTotable(JSON.parse(this.responseText).Countries);
  }
};
xhttp.open("GET", "https://api.covid19api.com/summary", true);
xhttp.send();
let table = document.getElementsByClassName("table")[0];
function addTotable(data) {
  for (let i = 0; i < data.length; i++) {
    let tableRow = document.createElement("tr");
    tableRow.classList.add("table__list");
    tableRow.innerHTML = `<td class="name__country table__item" class="table__item">${data[i].Country}</td><td class="table__item">${data[i].TotalConfirmed}</td class="table__item"><td class="table__item">${data[i].NewConfirmed}</td><td class="table__item">${data[i].TotalRecovered}</td><td class="table__item">${data[i].TotalDeaths}</td>`;
    table.appendChild(tableRow);
  }
}
let input = document.getElementById("search");
input.onkeyup = function () {
  let filter = input.value.toUpperCase();
  let tRow = document.getElementsByClassName("table__list");
  console.log(tRow.length);
  let contentSearch = document.getElementsByClassName("name__country");
  for (let i = 0; i < contentSearch.length; i++) {
    if (contentSearch[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tRow[i].style.display = "table-row";
    } else {
      tRow[i].style.display = "none";
    }
  }
};
