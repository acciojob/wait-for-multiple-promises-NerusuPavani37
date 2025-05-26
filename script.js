//your JS code here. If required.
let startTime = performance.now();

let promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
       resolve(["promise 1", 1])
    },1000)
});


let promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
       resolve(["promise 2", 3])
    },3000)
})

let promise3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
       resolve(["promise 3", 2])
    },2000)
});

let res=Promise.all([promise1,promise2,promise3])
res.then((results) => {
  let endTime = performance.now();
  let totalTime = ((endTime-startTime)/1000).toFixed(3);
  let tbody = document.getElementById("output");
  tbody.innerHTML = "";
  results.forEach(item =>{
    let newRow = tbody.insertRow()
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = item[0];
    cell2.innerHTML = item[1];
  });

   let newRow = tbody.insertRow()
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "Total";
    cell2.innerHTML = totalTime;
  
}).catch((err) => {
  console.error(err); 
});