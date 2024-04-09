function handleObject(obj, key, action) {
  if (action === 'get') {

    return obj[key];

  } 
  
  else if (action === 'add') {

    obj[key] = "";

    return obj;
  } 
  
  else if (action === 'delete') {
    delete obj[key];
    return obj;
  } 
  
  else {
    return obj;
  }
}

console.log(handleObject( 1: 'add'));
