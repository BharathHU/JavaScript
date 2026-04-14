function emp(name,id,salary,company){
    this.name=name
    this.id=id
    this.salary=salary
    this.company=company
}
e1=new emp("Bharath",101,100,"Still waiting")
console.log(e1)
e2=new emp("Chaluva",102,50000,"Alphabet")
console.log(e2)
e3=new emp("Ujwal",103,45000,"Yellow.ai")
console.log(e3)
e4=new emp("Vishal",104,45000,"Yellow.ai")
console.log(e4)

function product(name,price,stock,quantity,category,rating){
    this.name=name;
    this.price=price;
    this.stock=true;
    this.quantity=quantity;
    this.category=category;
    this.rating=rating;
}
p=new product("Laptop",50000,true,5,"Electronics",4.5);
console.log(p)
console.log(p.name + " " + p.price + " " + p.stock + " " + p.quantity + " " + p.category + " " + p.rating);