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
        let node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    sizeOfList()
    {
        console.log("Size Of List ",this.size)
    }

    indexOf(element) {
        let _count =0;
        let _current = this.head;
        while(_current != null) {
            if(_current.element === element)
                return _count;
            _count++;
            _current = _current.next;
        }

        return -1;
    }
}



let l1 = new LinkedList();

l1.add(10);
l1.add(40);

l1.printList();

console.log("Index Of", l1.indexOf(40))
