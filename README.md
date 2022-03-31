## Testing Block

Describe: pigLatin


Test: "It should identify a vowel." 
Code: 'a'
Expected Output: true

Test: "It should identify a consonant."
Code: 'b'
Expected Output: true

Test: "It return a lower case letter."
Code: ("W");
Expected Output: "w"

Test: "It should ignore non-letters." 
Code: a
Expected Output: a

Test: "It should identify a vowel at the begining of a word." 
Code: 
Expected Output: artichoke

Test: "It should identify a word begining with a consonant." 
Code: 
Expected Output: quit

Test: "It should identify a consonant begining with "qu"." 
Code: 
Expected Output: quiet

Test: "It should add 'way' to end of a words begining with a vowel."
Code: 
Expected Output: antilopeway

Test: It should 
Code: 
Expected Output:

Test: 
Code: 
Expected Output:

Test: 
Code: 
Expected Output:

Test: 
Code: 
Expected Output:

Test: 
Code: 
Expected Output:



































 _README.md_
Rules of piglatin 

Rule 1: 
Words beginning with a vowel, add "way" to the end. vowels A E I O U

Rule 2: 
words beginning with consonants move all of the first consecutive consonants to the end then add ay to the end.

Rule 3: 
if the first consonant include qu move the q and the u to the end and add ay. ie quick becomes ickquay and squeal becomes quealsay




Describe: pigLatin();

Test: "should return a string" 
code: pigLatin(""); 
Expected Output:""

Test: "Should identify the letter a" 
Code: pigLatin("a"); 
Expected Output: true

Test: "It should identify 'a','e','i','o','u'" Code: pigLatin("e"); Expected Output: true

Test: "It should identify if its not 'a','e','i','o','u'" code: pigLatin("d"); Expected Output: false

Test: "it should identify if the first letter of a word is a vowel" code: pigLatin("ant"); Expected Output: true

Test: "it should identify if the first letter of a word is a vowel if so concat way to the end of the word" code: pigLatin("ant"); Expect Output: antway

Test: "It should identify if q and u are in a word." code: pigLatin("squeal"); Expected Output: true

Test: "It should identify if the first letter of a word is a qu" code: pigLatin("queen"); expected Output: true

Test: "If a word starts with qu it should move q and u to the end of a word." code: pigLatin("quick"); Expected Output: ("ickqu")

Test: "It should add ay to the end of a word after moving qu to the end." code: pigLatin("quick"); Expected Output: ("ickquay")

Test: "It should identify if a word begins with a consonant." code: pigLatin("goat"); Expected Output: true

Test: "if a word begins with a consonant, move it to the back of the word" code pigLatin("checkers") Expected Output: "heckersc"

Test: "If a word begins with multiple consonants move them to the back of the word" code: pigLatin("checkers") expected output: "eckersch"

Test: "If a word begins with multiple consonants move them to the back of the word and concat "ay" to the end" code: pigLatin("checkers") expected output: "eckerschay"

Test: "if a word begins with consonants, and qu is in the consecutive consonants, don't move the q with the consonants." code: pigLatin("squeal"); expected output: "quealsay"

Test: "it should handle multiple words in string for all cases" code: pigLatin("are you cooking quail if so we squeal") expected output:"areway ouyay ookingcay ailquay ifay osay eway quealsay"



Describe pigLatinUtility();

Test: It should filter out punctuation code: pigLatinUtility("hello."); Expected Output: "ellohay"

Test: It should be case insensitive code: pigLatinUtility("Hello."); Expected Output: "ellohay"

Test: It should ignore numbers code: pigLatinUtility("hello 17 what") Expected Output: "ellohay 17 atwhay"