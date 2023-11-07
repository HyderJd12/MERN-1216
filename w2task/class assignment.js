// Number of array in Ascending order :
console.log("ASC")
const acs = [1,2,15,4,11,8,6,4];
const sortedArray = acs.sort( (a,b) => a - b );
console.log (sortedArray);

// Number of array in Descending order :
const num=[2,4,1,5,6,3];
console.log("DESC")
const unsorted = num.sort( (a,b) => b - a );
console.log (unsorted);

// String shorting ascending 
console.log("");
console.log("-------string-----------");
const names = ['maham', 'farman', 'Mj', 'duli' ,'Ali', 'ali'];
const namearray = names.sort ((a,b) => a.localeCompare (b) );
console.log(namearray);

// spread opreator
const obj={
    pw:123,
    security_code:345,
    Gmail: "qwerty@gmail.com",
    title: "student"
}
const obj2 ={
    name:'Farman Hyder',
    fatherName: 'Maqbool hussain',
    Gmail:"asdf@gmail.com", // this gmail is overwrite with (const obj's gmail)
}
const {pw, Gmail, ...rest} = obj;
console.log(rest);

const objnew= { ...obj, ...obj2};
console.log(objnew);
