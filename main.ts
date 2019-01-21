interface Friend{
    firstName: string;
    lastName: string;
}
let friend: Friend ={firstName:"Thomas",lastName:"Huber"};




function printFirstName(friends: Friend[]) {
    for (let friend of friends) {
    console.log(friend.firstName);
    }
}

function onKeyUp() {
    // Grab the input element and its value
    let input = document.getElementById("myInput") as HTMLInputElement;
    let firstname= input.value;
    // Grab the output element
    let output = document.getElementById("myOutput");
    // assign the message to the span-element’s innerText-property
    if(output != null){
        output.innerText = `Hi ${firstname},
        your firstname length is ${firstname.trim().length}!`;
    }
}