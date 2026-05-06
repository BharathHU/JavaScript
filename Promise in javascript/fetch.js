fetch('https://fakestoreapi.com/products/1')//make api call
.then((res)=>res.json())//return promise fullfill
.then((jsondata)=>{
    console.log(jsondata)
}) //fullfill
.catch((error)=>{
    console.log(error+"promise faailled")
})//rejected