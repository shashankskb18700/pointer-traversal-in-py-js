//multiple pointers traversal
//sorted array of numbers
let arr = [-4, -3, -2, -1, 0, 2, 3, 5];
let cont = [];
function pair(a) {
  
  let low = 0;
  let high = a.length - 1;
  for (let i = 0; i < a.length;i++){
    if (Math.abs(a[high]) - Math.abs(a[low]) < 0) {
      low += 1;
      console.log('added')
      console.log(low)
    } else if (Math.abs(a[high]) - Math.abs(a[low]) > 0) {
      high -= 1;
      console.log('added')
      console.log(high)
    }
    
    else {
      cont.push([a[low], a[high]]);
      console.log('push');
      low += 1;
    } 
  }
  return cont;
  
}