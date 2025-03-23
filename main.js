// nodemon main.js    to run the file

//          Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"    
// Output: true
// Example 3:     

// Input: s = "(]"                
// Output: false    

// Solution:

  function isValid(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i]); // add the element to the end of the array
      } else {
        if (stack.length === 0) return false;
        if (
          (s[i] === ")" && stack[stack.length - 1] === "(") ||
          (s[i] === "]" && stack[stack.length - 1] === "[") ||
          (s[i] === "}" && stack[stack.length - 1] === "{")
        ) {
          stack.pop(); // remove the last element from the array
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

 // console.log("case1: ", isValid("()"));
  console.log("case2: ", isValid("([])"));
  //console.log("case3: ", isValid("()[]{}"));
  //console.log("case3: ", isValid("(]")); 


 
   



