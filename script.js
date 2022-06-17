function callbackTeste (value) {
    return value === "Banana"
}

function newMap (array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}//

function newForEach (array, callback) {
    for(let i = 0; i < array.length; i++){
        array[i] = callback(array[i])
    }
}//

function newFilter (array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray
}//

function newFind (array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return array[i]
        }
    }
}//

function newIndexOf (array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return i
        }
    }
    return -1
}//

function newIncludes (array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return true
        }
    }
    return false
}//

function newReduce (array, callback) {
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += callback(array[i])
    }
    return total
}//*

function newFindIndex (array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return i
        }
    }
    return -1
}//

function newSome (array, callback) {
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return true
        }
    }
    return false
}//

function newEvery (array, callback) {
    let total = 0
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            total++
        }
    }

    if(total >= array.length){
        return true
    }else{
        return false
    }
}//

function newConcat (...arrays) {
    let newArray = []
    for(let a = 0; a < arrays.length; a++){
        for(let b = 0; b < arrays[a].length; b++){
            newArray.push(arrays[a][b])
        }
    }
    return newArray
}//

function newJoin (array, item) {
    if(item === undefined){
        let itensConcatenados = ""
        for(let i = 0; i < array.length; i++){
            itensConcatenados += array[i]
        }
        return itensConcatenados
    }else{
        let itensConcatenados = ""
        for(let i= 0; i < array.length; i++){
            itensConcatenados += array[i]+item
        }
        return itensConcatenados
    }
}//

function newSlice (array, inicio, fim) {
    if(inicio === undefined){
        inicio = 0
    }
    if(inicio > array.length){
        return []
    }
    if(fim === undefined){
        let newArray = []
        for(let i = inicio; i < array.length; i++){
            newArray.push(array[i])
        }
        return newArray
    }
    if(typeof fim === "number"){
        let newArray = []
        for(let i = inicio; i < fim; i++){
            newArray.push(array[i])
        }
        return newArray
    }
    
}//

// let myArray = ["Maçã", "Uva", "Banana", "Uva", 1]
// let newMapTeste = newMap(myArray, callbackTeste)
// let newFilterTeste = newFilter(myArray, callbackTeste)
// let newFindTeste = newFind(myArray, callbackTeste)
// let newIndexOfTeste = newIndexOf(myArray, callbackTeste)
// let newIncludesTeste = newIncludes(myArray, callbackTeste)
// let newReduceTeste = newReduce(myArray, callbackTeste)
// let newFindIndexTeste = newFindIndex(myArray, callbackTeste)
// let newSomeTeste = newSome(myArray, callbackTeste)
// let newEveryTeste = newEvery(myArray, callbackTeste)
// let newConcatTeste = newConcat(myArray, myArray, myArray)
// let newJoinTeste = newJoin(myArray, "-")
// let newSliceTeste = newSlice(myArray)

//console.log(newMapTeste)
//newForEach(myArray, callbackTeste)
//console.log(newFilterTeste)
//console.log(newFindTeste)
//console.log(newIndexOfTeste)
//console.log(newIncludesTeste)
//console.log(newReduceTeste)
//console.log(newFindIndexTeste)
//console.log(newSomeTeste)
//console.log(newEveryTeste)
//console.log(newConcatTeste)
//console.log(newJoinTeste)
//console.log(newSliceTeste)

//console.log(myArray)