function HTMLElements(str) { 
  // const a = str.replace(/\>[A-Za-z\s]*\</g, "");
  // console.log(a);
  //  *\>[^)]*\< *
  // const a = str.replace(/ *\>[^<]*\) */g, "");
  // str.replace(/\>[a-z]*\</g, "");

  const stack = [];
  let elements = str.split("<").join('').split(">");

  // removing text eg "text test test/b" -> "/b"
  for(let i=0; i< elements.length; i++){
    if(elements[i].indexOf("/") > -1){
      elements[i] = elements[i].substring(elements[i].indexOf("/"));
    }
  }
  console.log(elements);
  
  let i = 0;
  while(elements[i]){
    if(elements[i][0] == '/'){
      // if peep of stack is same as this element with /, then pop it out else return it
      const peep = stack[stack.length - 1];
      if(`/${peep}` == elements[i]){
        stack.pop();
      } else {
        return peep;
      }
    } else {
      stack.push(elements[i]);
    }
    i++;
  }
  return true;
}
   
// keep this function call here 
// console.log(HTMLElements("<div><div><b></b></div></p>"));
console.log(HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>"));