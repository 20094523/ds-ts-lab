import {Friend, Colleague, EmailContact } from './myTypes'

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
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  

  function findFriends(friends: Friend[], match:(friend: Friend)=> boolean): Friend[] {
    //create empty array of matches. fill it with friends during for loop.
    const matchingFriends: Friend[] = [];
    for (const friend of friends) {
      if (match(friend)) {
        matchingFriends.push(friend);
      }
    }
    return matchingFriends;
  }

//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));