const Age = prompt('how old are you?')

if ( Age < 18) {
  console.log(`You can't come in`)
} else if (Age >= 18 && Age < 21){
  console.log(`You can come in but can't drink`)
} else {
  console.log(`Welcome to the club`)
}
