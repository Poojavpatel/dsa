class Hashmap{
  constructor(size=53){
    this.keyValues = new Array(size);
  }
  hash(key){
    let total = 0;
    let PRIME = 31;
    for(var i=0; i<key.length;i++){
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyValues.length;
    }
    return total%this.keyValues.length;
  }
  // set using seperate chaining
  set(key, value){
    const hash = this.hash(key);
    if(!this.keyValues[hash]){
      this.keyValues[hash] = [];
    }
    this.keyValues[hash].push([key, value]);
  }
  get(key){
    const hash = this.hash(key);
    if(this.keyValues[hash]){
      if(this.keyValues[hash].length === 1 && this.keyValues[hash][0][0] === key) return this.keyValues[hash][0][1];
      for(let i=0;i<this.keyValues[hash].length; i++){
        if(this.keyValues[hash][i][0] === key) return this.keyValues[hash][i][1];
      }
    }
    return undefined;
  }
  // return all the keys in the hashmap
  keys(){
    let keys =[];
    for(let i=0;i<this.keyValues.length;i++){
      if(this.keyValues[i]){
        for(let j=0;j<this.keyValues[i].length;j++){
          keys.push(this.keyValues[i][j][0]);
        }
      }
    }
    return keys;
  }
  // return all the unique values in the hashmap
  values(){
    let values =[];
    for(let i=0;i<this.keyValues.length;i++){
      if(this.keyValues[i]){
        for(let j=0;j<this.keyValues[i].length;j++){
          if(!values.includes(this.keyValues[i][j][1])){
            values.push(this.keyValues[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}

const hashmap = new Hashmap(13);
hashmap.set('pink', '#765678');
hashmap.set('green', '#68bt56');
hashmap.set('orange', '#tndu74');
hashmap.set('cyan', '#678765');
hashmap.set('maroon', '#878787');
hashmap.set('red', '#878787');
// console.log('%j', hashmap); // {"keyValues":[null,null,null,[["green","#68bt56"]],null,[["pink","#765678"],["cyan","#678765"]],null,null,null,null,[["orange","#tndu74"]],[["maroon","#878787"],["red","#879098"]],null]}
// console.log(hashmap.get('green')); // '#68bt56'
// console.log(hashmap.get('blue')); // undefined
// console.log(hashmap.get('pink')); // '#765678'
// console.log(hashmap.get('cyan')); // '#678765'
console.log(hashmap.keys()); // [ 'green', 'pink', 'cyan', 'orange', 'maroon', 'red' ]
console.log(hashmap.values()); // [ '#68bt56', '#765678', '#678765', '#tndu74', '#878787' ]