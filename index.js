function saturdayFun(){
    console.log('saturdayFun')
    return "This Saturday, I want to roller-skate!"
}
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(){
    return 'This Monday, I will go to the office.'
}
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`

}
function wrapAdjective(wrapper){
    if (wrapper=='*'||'\||'){
        return function wrapAdjective(word){
            return `You are ${wrapper}${word}${wrapper}!`
        }

    }
}