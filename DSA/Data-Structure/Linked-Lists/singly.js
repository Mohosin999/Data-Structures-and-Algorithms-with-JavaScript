// Linked List Class
let head; // head of list

/* Node Class */
class Node {
  // Constructor to create a new node
  constructor(d) {
    this.data = d;
    this.next = null;
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
  //   console.log(head); // Node { data: 10, next: undefined}
}
// push(10);

/**
 * Way - 02
 * Insert a Node at the Front/Beginning of Linked List
 */
