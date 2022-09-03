const findTheOldest = function (people) {
  
  //use Date to gey full year  
  let today = new Date();
  let year = today.getFullYear();
  let age;
  let maxAgePerson;

  maxAgePerson = people.reduce((max, person) => {
    // add age property to object 
    if (person.yearOfDeath) {        
      // death person  
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      // still alive person   
      person.age = year - person.yearOfBirth;
    }
    // return max age person
    return person.age > max.age ? person : max;
  }, people[0]);

  return maxAgePerson;
};

// Do not edit below this line
module.exports = findTheOldest;
