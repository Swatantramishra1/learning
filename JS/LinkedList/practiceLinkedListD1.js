class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    add(element) {
        let _node =new Node(element),
            _current = this.head;

        if(_current === null) {
            this.head = _node;
        }
        else {
            while(_current.next) {
                _current = _current.next;
            }
            _current.next = _node;
        }
        this.size++;

    }

    print() {
        let _current = this.head,
            _str = "";
        if(_current === null) {
            console.log("There is no data ! Please add first");
        } else {
            while(_current) {

                _str += _current.element + " ";
                _current = _current.next;
            }
            console.log("Elemets are ", _str);
        }
    }

}
const LI = new LinkedList();
LI.add(4);
LI.add(10);
LI.print();