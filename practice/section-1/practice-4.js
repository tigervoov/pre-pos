'use strict';

function collectSameElements(collectionA, objectB) {
  var sameItems=[];
  for(let itemA of collectionA)
  {
    for(let itemB of objectB.value){
      if(itemA.key==itemB){
        sameItems.push(itemA.key)
      }
    }
  }
  return sameItems;

}
