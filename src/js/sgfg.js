export default function orderByProps(obj, arr) {
   const ObjFirst = [];
 
   arr.forEach((element) => {
     if (element in obj) {
       ObjFirst.push({key: element, value: obj[`${element}`]});
       delete obj[`${element}`];
     }
    })
 
     const ObjSecond = [];
     const keys = Object.keys(obj);
     keys.sort();
     keys.forEach((element) => {
       ObjSecond.push({key: element, value: obj[`${element}`]});
     });
     return [ ...ObjFirst, ...ObjSecond ];
 }