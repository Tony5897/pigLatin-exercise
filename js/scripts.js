// Business Logic ----------


function pigLatin() {
  const vowels = "'a','e','i','o','u'";
  const connostestinnaughts = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  let input = input.toLowerCase();
  if (vowels === 'a') {
    return true;
  }
  
}





// function pigLatin(text) {
//   const words = text.replaceAll(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").trim().split(" ");
//   let latin = [];
//   words.forEach(function(element) {
//     if (Number(element)){
//       latin.push(element);
//     } else {
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     const vowelQ = ['a', 'e', 'i', 'o', 'u', 'q'];
//     for (index = 0; index < element.length; index++) {
//       if (vowel.includes(element[0].toLowerCase())) {
//         return latin.push(element + "way");
//       } else if (element[0].toLowerCase() === "q" && element[1].toLowerCase() === "u") {
//         return latin.push(element.slice(2, element.length) + "quay");
//       } else if (vowelQ.includes(element[index].toLowerCase())) {
//         return latin.push(element.slice(index, element.length) + element.slice(0, index) + "ay");
//       } 
//     } 
//   }
//    });
//   return latin.join(" ");
//   }



// // UI Logic ----------  
// $(document).ready(function(){
//   console.log(pigLatin("Are can't 2 you?"))
// });




