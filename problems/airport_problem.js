const airports = ['mum', 'del', 'chi', 'blr', 'kol'];

const routes = [['mum','chi'], ['del','blr'],['kol','mum'],['kol','blr']];

const source = 'mum';
const destination = 'del';

const generateRoutesGraph = (routes) => {
  const routeHash = {};
  routes.forEach(route => {
    const a = route[0];
    const b = route[1];
    routeHash[a] ? routeHash[a].push(b) : routeHash[a] = [b];
    routeHash[b] ? routeHash[b].push(a) : routeHash[b] = [a];
  });
  return routeHash;
}

const canTravel = (source, destination) => {
  const routeHash  = generateRoutesGraph(routes);
  console.log('---routeHash---', routeHash);
  const alreadyVistited = {};
  const ourQueue = [source];
  while(ourQueue.length > 0){
    const entry = ourQueue[0];
    alreadyVistited[entry] = true;
    if(routeHash[entry].includes(destination)){
      return true;
    }
    ourQueue.shift();
    routeHash[entry].forEach((city) => {
      if(!alreadyVistited[city]){
        ourQueue.push(city);
      }
    })
  }
  return false;
};

console.log(canTravel(source, destination));