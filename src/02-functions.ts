import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

//console.log(older(friends[0]))

function allOlder(f: Friend[]):string[]{
    var allold = new Array()
    for(let i = 0; i<friends.length; i++) {
       allold.push(`${f[i].name} is now ${f[i].age+1}`) 
    };
    return allold
}

//console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  //console.log(highestExtension(colleagues.current));


  function addColleague(cs: Colleague[], name: string, department: string, email: string){
    //constructor for colleague
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            // get highest extension and add 1
            extension: highestExtension(cs).contact.extension + 1
        }
    }
    //add colleague to colleague array
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));