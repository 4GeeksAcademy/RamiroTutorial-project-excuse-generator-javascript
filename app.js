let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let azWho = Math.floor(Math.random() * who.length)
let azAction = Math.floor(Math.random() * action.length)
let azWhat = Math.floor(Math.random() * what.length)
let azWhen = Math.floor(Math.random() * when.length)

let excusa = who[azWho]+ " " +action[azAction]+ " " +what[azWhat]+ " " +when[azWhen]

document.write( `<h1>`+ excusa +`</h1>` )