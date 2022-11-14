let x;
let obj = {};//my object
let arr = [];//my array
//for to get prompt
for (i = 0; i > -1; i++) {
  if ((x = prompt("please inter your id"))) {
    let temp = x.split(",");
    obj = {
      name: temp[0],
      age: Number(temp[1]),
      picture: (temp[2]),
      salar: Number(temp[3]),
    };
    arr[i] = obj;
  } else {
    break;
  }
}

//sort age
let temp2 = arr;

var res = temp2.sort((a, b) => b.age - a.age);
console.log(res);

//max salary
var res2 = temp2.sort((a, b) => b.salar - a.salar);
console.log(res2[0].user);

//avarage
function amount(item) {
  return item.salar;
}

function sum(prev, next) {
  return prev + next;
}

console.log(arr.map(amount).reduce(sum) / arr.length);

//yes or no
function checkPicture(arr) {
  for (j = 0; j < arr.length; j++) {
    let temp3 = arr[j].picture;
    if (temp3 === "no") {
      return "no";
    }

  }
  return "yes";
}
console.log(checkPicture(arr));


// display result in html
const resultTable = (obj) => {
  const table = document.createElement('table');

  // the header of result table
  const tableHeaderItems = ['Item', 'Name', 'Age', "Picture", "Salary"];
  let headerRow = table.insertRow();
  tableHeaderItems.forEach(item => {
    let headerCell = document.createElement("th");
    headerCell.innerHTML = item;
    headerRow.appendChild(headerCell);
  });

  // the body of result table
  for (let i = 0; i < obj.length; i++) {
    const row = table.insertRow();
    const item = row.insertCell(0)
    const userName = row.insertCell(1)
    const age = row.insertCell(2)
    const picture = row.insertCell(3)
    const salar = row.insertCell(4)

    item.innerHTML = i + 1;
    userName.innerHTML = obj[Object.keys(obj)[i]].name;
    age.innerHTML = obj[Object.keys(obj)[i]].age;
    picture.innerHTML = obj[Object.keys(obj)[i]].picture;
    salar.innerHTML = obj[Object.keys(obj)[i]].salar;

    document.body.appendChild(table)
  }
}
resultTable(temp2);

