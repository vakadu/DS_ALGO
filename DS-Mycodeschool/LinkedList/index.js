class Node{
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;    
    }

    //insert at index

    //get at index

    //remove at index

    //clear list

    //print all data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// const n1 = new Node(100);

// console.log(n1);

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.printListData();
