'use strict';

function collectSameElements(collectionA, objectB) {
  var sameItems=[];
  for(let itemA of collectionA)
  {
    for(let itemB of objectB.value){
      if(itemA==itemB){
        sameItems.push(itemA)
      }
    }
  }
  return sameItems;
}
