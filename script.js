fetch('http://www.mocky.io/v2/5d889c8a3300002c0ed7da42')
  .then(response => response.json())
  .then(data => {
    window.myData = data;
    console.log(myData); 
  })
  .catch(error => console.error(error));




