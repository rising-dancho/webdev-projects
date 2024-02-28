function hideName(name) {
    // split
    const first = name.split(' ')[0];
    console.log(first);
  
    // loop per character
    for (let i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  
    for (let i = 0; i < name.length; i++) {
      let hiddenName = '';
  
      hiddenName += name[i];
  
      return console.log(hiddenName);
    }
    //   iterate per character: https://www.geeksforgeeks.org/how-to-iterate-over-characters-of-a-string-in-javascript/
    //   replace on specific index: https://bobbyhadz.com/blog/javascript-string-replace-character-at-index
    //   replace: https://bobbyhadz.com/blog/javascript-remove-first-and-last-character-from-string
    //   split: https://bobbyhadz.com/blog/javascript-get-first-word-of-string
  }  
  
  
  hideName('Anonas Mayaman');
  
  function replaceCharacter(string) {
    let index = 0;
    const replacement = "*";
    
    return (
      string.slice(0, index) +
      replacement +
      str.slice(index + replacement.length)
    );
  }
  
  const str = 'bobby';
  
  const result1 = replaceCharacter(str);
  console.log(result1); //
  
  let string = "foo bitlog"
  let result = string.split('foo').join('bar');
  
  result = "12px (2) bar-456-foo 44".split(/\d/).join("#");
  console.log(result);
  
  // REGEX: Looking for a match
  let testString = 'my name is adfinem';
  let regex = /name is ([a-zA-Z]+)/; //group 0 and group 1 (regex target)
  // const match = regex.test(testString);
  let match = regex.exec(testString);
  
  if(match){
    const name = match[1];
    console.log(name);
  }else{
    console.log('No match');
  } 
  
  // REGEX: Looking for a match
  testString = 'fi_lea.mp3 file-a.mp3 file1.mp3 file2.mp3 sample.txt screenshot.jpg';
  regex = /(\w+\-?_?\w+)\.mp3/g;
  match = regex.exec(testString);
  

  while(match){
    const filename = match[1];
    console.log(filename);
    match = regex.exec(testString)
  }
  
  // regular-expressions testing site: https://regexr.com/#native_link#