'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameItems=[];
  for(let itemA of collectionA)
  {
    for(let itemB of collectionB[0]){
      if(itemA==itemB){
        sameItems.push(itemA)
      }
    }
  }
  return sameItems;
}
