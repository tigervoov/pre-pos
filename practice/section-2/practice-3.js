'use strict';

function countSameElements(collection) {
  var obj={}
  var str1=/[a-z]:\d+/
  var str2=/[a-z]-\d+/
  var str3=/[a-z]\[\d+\]/
  for(let item of collection){
    if(item.length>1){
      if(str1.test(item)){
        let itemArray=item.split(':')
        let name=itemArray[0]
        let summary=parseInt(itemArray[1])
        console.log("name:"+name)
        if(obj.hasOwnProperty(name)){
          obj[name]+=summary
        }else{
          obj[name]=summary
        }
        //obj[itemArray[0]]= (obj[itemArray[0]]+parseInt(itemArray[1]))||parseInt(itemArray[1]);
      }else if(str2.test(item)){
        let itemArray=item.split('-')
        let name=itemArray[0]
        let summary=parseInt(itemArray[1])
        if(obj.hasOwnProperty(name)){
          obj[name]+=summary
        }else{
          obj[name]=summary
        }
        //obj[itemArray[0]]= (obj[itemArray[0]]+parseInt(itemArray[1]))||parseInt(itemArray[1]);
      }
      else if(str3.test(item)){
        let name=item.substr(0,1)
        let summary=parseInt(item.match(/\d+/))
        if(obj.hasOwnProperty(name)){
          obj[name]+=summary
        }else{
          obj[name]=summary
        }
      }
    }else{
      obj[item] = (obj[item] +1 ) || 1; 
    }
  }
  var result=[]
  for(let objItem of Object.keys(obj))
  {
    let object={}
    object.name=objItem
    object.summary=obj[objItem]
    result.push(object)
  }
  return result;
}
