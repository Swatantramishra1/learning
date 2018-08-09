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
        let _node = new Node(element),
            _cuurentNode = this.head;
        if (_cuurentNode === null) {
            this.head = _node;
        }
        else {
            while (_cuurentNode.next) {
                _cuurentNode = _cuurentNode.next;
            }
            _cuurentNode.next = _node;
        }

        this.size++;
    }

    indexOf(element) {
        let _cuurentNode = this.head,
            _count = 0;
        console.log("index offff", element)
        while (_cuurentNode) {
            if (_cuurentNode.element === element) {

                return _count;
            }
            _cuurentNode = _cuurentNode.next;
            _count++;
        }

        return -1;

    }


    delete(element) {
        let _cuurentNode = this.head,
            _prev = null;
        while(_cuurentNode != null) {
                if(_cuurentNode.element === element) {
                    if(_prev === null) {
                        this.head = _cuurentNode.next;
                    } else {
                        _prev.next = _cuurentNode.next;
                    }
                    this.size--;
                    return _cuurentNode.element;
                }
                _prev = _cuurentNode;
                _cuurentNode = _cuurentNode.next;
        }
        return -1;

    }

    print() {
        let _cuurentNode = this.head,
            _str = "";

        while (_cuurentNode) {
            _str += _cuurentNode.element + " ";
            _cuurentNode = _cuurentNode.next;
        }

        console.log("Linked List", _str);
    }
}

let li = new LinkedList();
li.add(3);
li.add(11);
li.print();
console.log("Index Of ", li.indexOf(1111))
console.log(li.delete(11))
li.print()