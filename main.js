// nodemon main.js    to run the file

var mergeTwoLists = function(list1, list2) {
  if(list1.length === 0) return list2;
  if(list2.length === 0) return list1;
  const merge = [];
  let i = 0, j = 0;
  while(i < list1.length && j < list2.length) { // O(n) + O(m) time complexity,  O(n) + O(m) space complexity
      if(list1[i] < list2[j]){
          merge.push(list1[i]);
          i++;
      }else {
          merge.push(list2[j]);
          j++;
      }
  }

  while(i < list1.length) {
      merge.push(list1[i]);
      i++;
  }

  while(j < list2.length) {
      merge.push(list2[j]);
      j++;
  }
return merge;  
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));
 // [1,1,2,3,4,4]

 
   



