function insert(value){
    const DivResult=document.querySelector('.display').innerHTML
    DivResult.innerHTML=``
    document.querySelector('.display').innerHTML=DivResult+value
}

function ClearDisplay(){
    document.querySelector('.display').innerHTML=``
}

function back(){
    const Display=document.querySelector('.display').innerHTML
    document.querySelector('.display').innerHTML=Display.substring(0, Display.length -1)
}

function calculate(){
    const Display=document.querySelector('.display').innerHTML
    if(Display.length>0){
        document.querySelector('.display').innerHTML=eval(Display)
    }
    else{
        Display.innerHTML=''
    }
}