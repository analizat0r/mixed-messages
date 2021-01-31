const dataArr = {
    greeting: ["Whaddup", "Sup", "What's crackin'", "Peek-a-boo", "Howdy", "Hello", "Ahoy", "Hi", "What's cookin, good lookin", "Aloha","Hola", "Que pasa", "Ciao"],
    reference: ["Beauty", "Darling", "Dawg", "Amigo", "Esse", "My friend", "Homeslice", "Matey"],
    pickUpLine: ["Are you an exam? Because I have been studying you like crazy.", "Are you a haunted house? I’m going to scream when I’m in you.", "Are you an elevator? Because I’ll go up and down on you.", "Are you a campfire? Because you’re hot and I want s’more.", "my homework? Cause I’m not doing you but I definitely should be.", "Are you a drill sergeant? Because you have my privates standing at attention.", "Are you a supermarket sample? Because I want to taste you again and again without any sense of shame.", "Are you a sea lion? Because I can sea you lion in my bed tonight.", "Are you Dracula? You looked a little thirsty when you were looking at me."]
}

function randNum (num) {
    return Math.floor(Math.random() * num);
};

let message = [];

for (let prop in dataArr) {
    let index = randNum(dataArr[prop].length)

    switch (prop) {
        case 'greeting':
            message.push(`Try greeting your friend with '${dataArr[prop][index]}' next time you chat !`)
            break
        case 'reference':
            message.push(`Next time you will be at the bar, try calling someone by '${dataArr[prop][index]}'!`)
            break
        case 'pickUpLine':
            message.push(`Here is a pick up line for the next time you will go out: '${dataArr[prop][index]}'!`)
            break
        default:
            message.push(`Something went wrong :(`)
    }
}

const finalMessage = () => {
    document.getElementById("demo").innerHTML = message;
}