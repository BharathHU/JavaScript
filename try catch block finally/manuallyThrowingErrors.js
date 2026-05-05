try {
    var num=20
    var fname="Bharath"
    throw new Error("Product ID not found")
}
catch(err){
    console.log(err)
}
finally{
    console.log("Finally executed")
}