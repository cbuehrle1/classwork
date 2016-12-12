//Data taken from https://en.wikipedia.org/wiki/List_of_Seleucid_rulers

var apiResult = {
  rulers: [
    {
      name: 'Seleucus I Nicator',
      startReign: 305,
      endReign: 281,
      consort: 'Apama'
    },
    {
      name: 'Antiochus I Soter',
      startReign: 281,
      endReign: 261,
      consort: 'Stratonice of Syria'
    },
    {
      name: 'Antiochus II Theos',
      startReign: 261,
      endReign: 246,
      consort: 'Laodice I'
    },
    {
      name: 'Seleucus II Callinicus',
      startReign: 246,
      endReign: 225,
      consort: 'Laodice'
    },
    {
      name: 'Seleucus III Ceraunus',
      startReign: 225,
      endReign: 223,
      consort: ''
    },
    {
      name: 'Antiochus III the Great',
      startReign: 223,
      endReign: 187,
      consort: 'Laodice III'
    },
    {
      name: 'Seleucus IV Philopator',
      startReign: 187,
      endReign: 175,
      consort: 'Laodice IV'
    },
    {
      name: 'Antiochus IV Epiphanes',
      startReign: 175,
      endReign: 163,
      consort: 'Laodice IV'
    },
    {
      name: 'Antiochus V Eupator',
      startReign: 163,
      endReign: 161,
      consort: ''
    },
    {
      name: 'Demetrius I Soter',
      startReign: 161,
      endReign: 150,
      consort: 'Apama'
    },
    {
      name: 'Alexander I Balas',
      startReign: 150,
      endReign: 145,
      consort: 'Cleopatra Thea'
    },
    {
      name: 'Demetrius II Nicator',
      startReign: 145,
      endReign: 138,
      consort: 'Cleopatra Thea'
    }
  ]
}



//write a function that returns all kings named "Seleucus"

function kingsNamedSeleucus(data) {


  var output = []


  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (ruler.name.indexOf("Seleucus") != -1){
      output.push(ruler);
    }

  }

  return output;
}

var result = kingsNamedSeleucus(apiResult)

// console.log(result)

//write a function that returns all kings named "Antiochus"

function theAntiochus(data){

  var output = []

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (ruler.name.indexOf("Antiochus") != -1){
      output.push(ruler);
    }

  }
  return output;
}

var result = theAntiochus(apiResult);

// console.log(result)

//Once those two are complete, refactor so that they can both use the same function

function findTheRuler(data, guy){

  var output = []

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]


    if (ruler.name.indexOf(guy) != -1){
      output.push(ruler);
    }
  }
  return output;
}

var result = findTheRuler(apiResult, "Seleucus")

// console.log(result)

//-------------------------

//write a function that counts the rulers with a consort named "Laodice"

function consortsNamedLaodice(data) {

  var output = 0;

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (ruler.consort.indexOf("Laodice") != -1){
      output++;
    }

  }
  return output;
}

var result = consortsNamedLaodice(apiResult)

// console.log(result)
//write a function that counts the rulers with a consort named "Apama"

function consortsNamedApama (data){

  var output = 0;

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (ruler.consort.indexOf("Apama") != -1){
      output++;
    }
  }
  return output;
}

var result = consortsNamedApama(apiResult)

// console.log(result)

//Once those two are complete, refactor so that they can both use the same function

function countTheConsort(data, girl){

  var output = 0;

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (ruler.consort.indexOf(girl) != -1){
      output++;
    }
  }
  return output;
}

var result = countTheConsort(apiResult, "Laodice");
// console.log(result)

//-------------------------

//write a function that returns the rulers who reigned more than five years

function filterLongRulers (data){

  var output = [];

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (5 < ruler.startReign - ruler.endReign){
      output.push(ruler);
    }
  }
  return output;
}

var result = filterLongRulers(apiResult)

// console.log(result)

//write a function that returns the rulers who reigned more than twenty years

function filterLongerRulers (data){

  var output = []

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (20 < ruler.startReign - ruler.endReign){
      output.push(ruler);
    }
  }
  return output;
}

var result = filterLongerRulers(apiResult)

// console.log(result)
//Once those two are complete, refactor so that they can both use the same function

function filterByRuleLength(data, time){

  var output = []

  for (var i = 0; i < data.rulers.length; i++){
    var ruler = data.rulers[i]

    if (time < ruler.startReign - ruler.endReign){
      output.push(ruler);
    }
  }
  return output;
}

var result = filterByRuleLength(apiResult, 20)

console.log(result)
