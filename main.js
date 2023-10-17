
var size=parseInt(prompt("enter the number of element"))
var a=[]

for(i=0;i<size;i++){
    a[i]=parseInt(prompt(i+1) +"value")
}

var b=[]


let fun=(call)=>{

    call

    document.write(`[ ${a} ]<br>`)

    document.write(`<br>[ ${call} ]`)
}


let neg=(a)=>{
    
    a.forEach(e => {

        if(e>0){
            b.push(e)
        }

    })
    return b
}

fun(neg(a))


