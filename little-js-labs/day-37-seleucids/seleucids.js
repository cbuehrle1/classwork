//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var dataset = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: ['Apama']
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: ['Stratonice of Syria']
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: ['Laodice I', 'Berenice']
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: ['Laodice II']
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: []
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: ['Laodice III', 'Euboea of Chalcis']
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: ['Laodice IV']
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: []
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: ['Apama', 'Laodice V']
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Antiochus VI Dionysus',
      startReign: 145,
      endReign: 140,
      consort: []
    },
    {
      name: 'Diodotus Tryphon',
      startReign: 140,
      endReign: 138,
      consort: []
    },
    {
      name: 'Antiochus VII Sidetes',
      startReign: 138,
      endReign: 129,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 129,
      endReign: 126,
      consort: ['Cleopatra Thea']
    },
    {
      name: 'Alexander II Zabinas',
      startReign: 129,
      endReign: 123,
      consort: []
    },
    {
      name: 'Cleopatra Thea',
      startReign: 126,
      endReign: 121,
      consort: []
    },
    {
      name: 'Seleucus V Philometor',
      startReign: 126,
      endReign: 125,
      consort: []
    },
    {
      name: 'Antiochus VIII Grypus',
      startReign: 125,
      endReign: 96,
      consort: ['Tryphaena of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Antiochus IX Cyzicenus',
      startReign: 114,
      endReign: 96,
      consort: ['Cleopatra IV of Egypt', 'Cleopatra Selene I of Egypt']
    },
    {
      name: 'Seleucus VI Epiphanes Nicator',
      startReign: 96,
      endReign: 95,
      consort: []
    },
    {
      name: 'Antiochus X Eusebes Philopator',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Demetrius III Eucaerus',
      startReign: 95,
      endReign: 87,
      consort: []
    },
    {
      name: 'Antiochus XI Epiphanes Philadelphus',
      startReign: 95,
      endReign: 92,
      consort: []
    },
    {
      name: 'Philip I Philadelphus',
      startReign: 95,
      endReign: 84,
      consort: []
    },
    {
      name: 'Antiochus XII Dionysus',
      startReign: 87,
      endReign: 84,
      consort: []
    },
    {
      name: 'Tigranes I of Armenia',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Seleucus VII Kybiosaktes',
      startReign: 83,
      endReign: 69,
      consort: []
    },
    {
      name: 'Antiochus XIII Asiaticus',
      startReign: 69,
      endReign: 64,
      consort: []
    },
    {
      name: 'Philip II Philoromaeus',
      startReign: 65,
      endReign: 63,
      consort: []
    }
  ]
}



//-------------------------
// Reducing practice
//-------------------------

// Create a function that calculates the total consorts. Requirement: you must use reduce

function totalConsortCount (data) {

  var output = data.rulers.reduce(function(start, ruler){
    return start + ruler.consort.length;
  }, 0)
  return output;
}

var result = totalConsortCount(dataset);

// console.log(result)

// Use the function you just created to calculate the average number of consorts

function avgConsortCount (data) {

  var output = data.rulers.reduce(function(start, ruler){
    return start + ruler.consort.length;
  }, 0)

  var avg = output / data.rulers.length;
  return avg.toFixed(2);
}

var result = avgConsortCount(dataset);

// console.log(result);

//-------------------------

// Create a function that counts how many rulers are the second ruler with that name in the dynasty. Requirement: use reduce

function secondRuler (data) {

  var output = data.rulers.reduce(function(start, ruler){

    if (ruler.name.indexOf(" II ") != -1){
      return start + 1;
    } else {
      return start;
    }

  }, 0)
  return output;
}

var result = secondRuler(dataset);

// console.log(result)

// Create a function that counts how many rulers are the third ruler with that name in the dynasty. Requirement: use reduce

function thirdRuler (data) {

  var output = data.rulers.reduce(function(start, ruler){

    if (ruler.name.indexOf(" III ") != -1){
      return start + 1;
    } else {
      return start;
    }

  }, 0);
  return output;
}

var result = thirdRuler(dataset);
//
// console.log(result);

//-------------------------

// Create a function that calculates the total years that all the rulers ruled. Requirement: you must use reduce.

function totalDynastyYears (data) {

  var output = data.rulers.reduce(function(start, ruler){
    var lengthOfReign = ruler.startReign - ruler.endReign;
    return start + lengthOfReign;
  }, 0);
  return output;
}

var result = totalDynastyYears(dataset);

// console.log(result)

// Use the function you just created to calculate the average length of the all the rulers' reign

function avgRuleLengthPerRuler (data) {

  var output =data.rulers.reduce(function(start, ruler){
    var lengthOfReign = ruler.startReign - ruler.endReign;
    return start + lengthOfReign;
  }, 0)

  var avg = output / data.rulers.length;
  return avg.toFixed(0);
}

var result = avgRuleLengthPerRuler(dataset);

console.log(result);

//-------------------------
// Mapping practice
//-------------------------

// Write a function that will take this data and return just an array of the ruler's names. Requirement: use map.

function returnRulerNames (data) {

  var output = data.rulers.map(function(ruler){
    return ruler.name;
  });
  return output;
}

var result = returnRulerNames(dataset);

// console.log(result);

// Write a function that will take this data and return just an array of the lengths of each ruler's rule. Requirement: use map.

function returnRulerReignLength (data){

  var output = data.rulers.map(function(ruler){
    return ruler.startReign - ruler.endReign;
  });
  return output;
}

var result = returnRulerReignLength(dataset);

// console.log(result)

// Write a function that will take this data and return a new array of objects that has all the same data, plus each object needs to have a new property called "lengthOfReign" which should have the length of the ruler's reign in years. Requirement: use map.

function addRulerReignLength (data) {

  var output = data.rulers.map(function(ruler){

    return {
      name: ruler.name,
      startReign: ruler.startReign,
      endReign: ruler.endReign,
      lengthOfReign: ruler.startReign - ruler.endReign,
      consort: ruler.consort
    }

  });
  return output;
}

var result = addRulerReignLength(dataset);

// console.log(result)

// Write a function that will take this data and return a new array of objects that has the name of the ruler and a property called "numberOfConsorts", which should have the total number of consorts that the ruler had. Requirement: use map.

function rulerAndNumberOfConsorts (data) {

  var output = data.rulers.map(function(ruler){

    return {
      name: ruler.name,
      numberOfConsorts: ruler.consort.length
    };

  });
  return output;
}

var result = rulerAndNumberOfConsorts(dataset);

// console.log(result);

// Write a function that will take this data and return an array of strings in this format: "{name} ({startReign}-{endReign} BCE)" (e.g. "Seleucus I Nicator (305-281 BCE)"). Requirement: use map.

function returnArrOfStrings (data) {

  var output = data.rulers.map(function(ruler){
    var stringPrep = ruler.name + " " + "(" + ruler.startReign + "-" + ruler.endReign + " " + "BCE)";
    return stringPrep;
  });
  return output;
}

var result = returnArrOfStrings(dataset);

// console.log(result);
