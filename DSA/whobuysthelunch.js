function whosPaying(names) {

  //Write your code here.
  var numberOfPeople = names.length;
  var randomPerson = Math.floor(Math.random() * numberOfPeople);

  return names[randomPerson] + " is going to buy lunch today!";
}
