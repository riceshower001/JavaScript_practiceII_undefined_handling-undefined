// Let's branch the processing according to the value of "character.age" in the for statement.

const characters = [
    {name: `◆◆◆ ◆◆◆`, age: 14},
    {name: `*** ***`, age: 100},
    {name: `??? ???`, age: 5},
    {name: `### ###`}
  ];
  
  for (let i = 0; i < characters.length; i++) {

    console.log(`--------------------`);
    
    const character = characters[i];
    
    console.log(`My name is ${character.name}.`);
    
    // Please add an if statement.
    if(character.age === undefined){
      console.log(`My age is a secret.`);
    }else{
      console.log(`I am ${character.age} years old.`);
    }
        
  }