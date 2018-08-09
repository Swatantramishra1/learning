class Stack {
    constructor(){
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if(this.items.length === 0)
            return 'OverFlow';
        this.items.pop()
    }
    peek() {
        if(this.items.length === 0)
            return -1;
        return this.items[this.items.length -1];
    }
}

// Stack is Last in first out
