/*async function getRecipe(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43a538bf98msh845702fed47406cp111041jsn999253279440',
      'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
    }
  };
  
  const res =  await fetch('https://random-recipes.p.rapidapi.com/ai-quotes/5', options).then(res => res)
    
  const result = await res.json();

  return result
  /*<div className="random-recipe">

  {result.map((res)=>
    <p>{res.title}</p>  
  )}

</div>;
  console.log(result);
  console.log('hello', result[1].title)


} */ 
export  function Home(){
    const r1 = <></>;
    /* getRecipe().then(res=>
      
      console.log('hiiiiii', res[0]) 
      
      );*/



    

    return(
    <body>
    <h2>Welcome to CookMaster</h2>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sem pretium, semper odio sit amet, semper est. Ut ut nibh nec arcu pellentesque placerat. Aliquam erat volutpat. Etiam et erat tincidunt risus fringilla rhoncus vitae quis nulla. Donec condimentum lectus nulla, et tempus sapien maximus ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec lectus quam, auctor at metus aliquam, luctus lacinia massa. In et orci in dui semper suscipit id in leo. Proin ornare odio quis nisl laoreet commodo. Nam non euismod neque, at maximus odio. Aenean libero elit, feugiat quis congue vitae, ultrices a lorem. Aliquam ex lectus, tristique ut commodo quis, varius vel metus. Morbi nec ornare leo. Quisque eros nisi, sodales sed risus vitae, scelerisque suscipit turpis. Integer commodo quam mauris, ac interdum justo ultricies ut. Morbi dapibus ex a nisi iaculis, a pretium nunc luctus.
    </div>
    
    <p></p>
  </body>)

}




export default Home;