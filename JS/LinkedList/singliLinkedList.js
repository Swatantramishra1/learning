class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let _NODE = new Node(element);
        let _current = this.head;

        if (_current == null) {
            this.head = _NODE;
        }
        else {
            while (_current.next) {
                _current = _current.next;
            }
            _current.next = _NODE;
        }
        this.size++;
    }
    print() {
        let _result = "";
        let _current = this.head;
        while (_current) {
            _result += _current.element + " ";
            _current = _current.next;
        }
        console.log(_result);
    }
    sizse() {
        console.log("Size of LinkedList: ", this.size)
    }
    inserAtIndex(element, index) {
        if (index < 0 && index > this.size) {
            return false;
        }
        else {
            let _NODE = new Node(element),
                _current = this.head,
                _prev;

            if(index == 0) {
                _NODE.next = this.head;
                this.head=_NODE;
            }
            else {
                
            }
        }
    }
}

let link = new LinkedList();

link.add(10);
link.add(20);
link.add(40);
link.add(60);
link.inserAtIndex(2, 0);
link.print();
link.sizse();