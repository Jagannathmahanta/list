if(condition){
    //do something
}else{

var a =  45342
a%2==0   >> true


var a =  45342
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 45342 is even

var a =  453421
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 453421 is odd

var name = "Aakash";
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i don't know you`)
}

var role = "Admin"
var name = "John"
if(role == "Admin"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}

/////////
//any condition can match
var name = "Tina"
if(name == "Tina" || name=="Nikita"){
    console.log(`hi ${name} you are welcome`)
}

//both condition should match
var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}else{

}


var name = "Tina"
if(name=="Tina" && (role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}else{

}

var a = 1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}
hi

var a = 0
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}
Bie

var a = -1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}
hi

/////
Ternary > single line if else 
//////
var a = 10
a>10?"hiii":"Bie"
"Bie"

var a = 10
a==10?"hiii":"Bie"
"hiii"

var a = 10
a>10?a+1:a-1
9

a==10?a+1:a-1
11

////you should not do this
var a = 10
a==10?"hiii":"Bie"?"test1":"test2"
"hiii"
var a = 10
a>10?"hiii":"Bie"?"test1":"test2"
"test1"