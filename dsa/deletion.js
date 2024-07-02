let data = [12, 45, 49, 5, 47, 42, 20];
let pos = 3;

function deleteEl() {
  for (let i = pos; i < data.length - 1; i++) {
    data[i] = data[i + 1]; //47,42,20,20
  }

  console.table(data); //12, 45, 49, 47, 42, 20,20
  data.length = data.length - 1;
  console.table(data); //12, 45, 49, 47, 42, 20
}

deleteEl();
