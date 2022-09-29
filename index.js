const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let words = tutorials.map(function (tutorial){
    return tutorial.split(" ")
  })
  const newArr = []
  for (let element of words){
    let change = element.map(function(ele){
      let up = ele[0].toUpperCase() + ele.slice(1)
      return up
    } )
    newArr.push(change.join(" "))
  }
  return newArr
}

