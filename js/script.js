const randMsg = {
    _greeting: ["Whaddup", "Sup", "What's crackin'", "Peek-a-boo", "Howdy", "Hello", "Ahoy", "Hi", "What's cookin, good lookin", "Aloha","Hola", "Que pasa", "Ciao"],
    _reference: ["Beauty", "Darling", "Dawg", "Amigo", "Esse", "My friend", "Homeslice", "Matey"],
    _pickUpLine: ["Are you an exam? Because I have been studying you like crazy.", "Are you a haunted house? I’m going to scream when I’m in you.", "Are you an elevator? Because I’ll go up and down on you.", "Are you a campfire? Because you’re hot and I want s’more.", "my homework? Cause I’m not doing you but I definitely should be.", "Are you a drill sergeant? Because you have my privates standing at attention.", "Are you a supermarket sample? Because I want to taste you again and again without any sense of shame.", "Are you a sea lion? Because I can sea you lion in my bed tonight.", "Are you Dracula? You looked a little thirsty when you were looking at me."],
    get greeting() {
        return this._greeting[Math.floor(Math.random() * this._greeting.length)];    
    },
    get reference() {
        return this._reference[Math.floor(Math.random() * this._reference.length)];    
    },
    get pickUpLine() {
        return this._pickUpLine[Math.floor(Math.random() * this._pickUpLine.length)];    
    },
    finalMessage() {
        document.getElementById("demo").innerHTML = this.greeting + ' ' + this.reference + '! ' + this.pickUpLine;
    }

};