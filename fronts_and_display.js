class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let node = new Node(val);
        let oldHead = this.head;
        this.head = node;
        this.head.next = oldHead;
        return this;
    }

    removeFront() {
        if (this.head) {
            this.head = this.head.next;
        }
        return this;
    }
    
    front() {
        if (this.head) {
            return this.head.data;
        }
        return null;
    }

    display() {
        let runner = this.head;
        let printOut = "";
        while (runner) {
            printOut += runner.data;
            if (runner.next) {
                printOut += ",";
            }
            runner = runner.next;
        }
        console.log(printOut);
    }
}



let list = new SLL();
list.addFront(5).addFront(7).addFront(2);

list.display();