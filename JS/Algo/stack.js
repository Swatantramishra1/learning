class Stack{
    constructor(){
        this.items=[];
    }
    push(item) {
        this.items.push(item);
    }
    print() {
        console.log(this.items.join(','));
    }
    pop(){
        this.items.pop();
    }
    peek() {
       console.log(this.items[this.items.length-1]) 
    }
}
let st = new Stack();
st.push(4);
st.push(5);
st.push(8);
st.push(9);
st.pop();
st.print();
st.peek()