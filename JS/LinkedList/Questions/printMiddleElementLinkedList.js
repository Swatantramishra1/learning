class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head=null;
        this.size=0;
    }

    addElement(element) {
        let _current = this.head,
            _Node = new Node(element);
        if(_current === null) {
            this.head = _Node
        }
        else{
            while(_current.next) {
                _current = _current.next;
            }
            _current.next = _Node;
        }
        this.size++;
    }

    print(){
        let _current = this.head,
            _result = [],
            _index = 0;

        while(_current.next) {
            _result.push(_current.element)
            _current = _current.next;
        }
        _index = Math.round((_result.length-1)/2);
        console.log(_result[_index])
    }
}

let _link = new LinkedList();
    _link.addElement(3);
    // _link.addElement(35);
    // _link.addElement(6);
    // _link.addElement(7);
    // _link.addElement(4);
    // _link.addElement(8);
    // _link.addElement(18);
    _link.print();