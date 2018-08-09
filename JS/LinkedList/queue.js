class Queue {
    constructor()
    {
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop() {
        return this.items.shift();
    }

    peek() {

    }

}