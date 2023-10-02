// Linked List Class
let head; // head of list
console.log(head);

/* Node Class */
class Node {
  // Constructor to create a new node
  constructor(d) {
    this.data = d;
    this.next = null;
    console.log(this);
  }
}

/**
 * Way - 01
 * Insert a Node at the Front/Beginning of Linked List
 */
function push(new_data) {
  /* 1 & 2: Allocate the Node & Put in the data*/
  const new_node = new Node(new_data);

  /* 3. Make next of new Node as head */
  new_node.next = head;

  /* 4. Move the head to point to new Node */
  head = new_node;
  // console.log(head); // Node { data: 10, next: undefined}
}
// push(10);

/**
 * Way - 02
 * Insert a Node after a Given Node in Linked List
 */
function insertAfter(prevNode, newData) {
  /* 1. Check if the given Node is null */
  if (prev_node == null) {
    document.write("The given previous node cannot be null");
    return;
  }

  /* 2. Allocate the Node &
    3. Put in the data*/
  const newNode = new Node(newData);

  /* 4. Make next of new Node as next of prev_node */
  newNode.next = prevNode.next;

  /* 5. make next of prev_node as new_node */
  prevNode.next = newNode;
}

/**
 * Way - 03
 * Insert a Node at the End of Linked List
 */
