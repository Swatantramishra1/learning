class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data) {
        const NODETOADD = new Node(data);
        let _nodeToCheck = this.head;

        if (!_nodeToCheck) {
            this.head = NODETOADD;
            this.length++;
            return NODETOADD;
        }

        while (_nodeToCheck.next) {
            _nodeToCheck = _nodeToCheck.next;
        }
        _nodeToCheck.next = NODETOADD;
        this.length++;
        return NODETOADD;
    }
}
let _linkedList = new LinkedList();

console.log(_linkedList.add(5))
console.log(_linkedList.add(6))