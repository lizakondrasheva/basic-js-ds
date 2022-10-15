const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/listNull-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class Node {
  constructor(data) {
    this.data = data;
    this.l = null;
    this.r = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.listNull = null;
  }

  root() {
    return this.listNull === null ? null : this.listNull;
  }

  add(data) {
    let node = new Node(data);

    if (this.listNull === null) {
      this.listNull = node;
      return this.listNull;
    };

    this.c = this.listNull;
    do {
      if (this.c.data === data) break;

      if (data < this.c.data) {
        if (this.c.l === null) {
          this.c.l = node;
          break;
        } else {
          this.c = this.c.l;
        };
      };

      if (this.c.data < data) {
        if (this.c.r === null) {
          this.c.r = node;
          break;
        } else {
          this.c = this.c.r;
        };
      };
    } while (true);

    return this.listNull;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if (this.listNull === null) return null;

    this.c = this.listNull;
    do {
      if (this.c.data === data) return this.c;

      if (data < this.c.data) {
        if (this.c.l === null) {
          return null;
        } else {
          this.c = this.c.l;
        };
      };

      if (this.c.data < data) {
        if (this.c.r === null) {
          return null;
        } else {
          this.c = this.c.r;
        };
      };
    } while (true);
  }

  minNode(node) {
    if (node.l === null)
      return node;
    else
      return this.minNode(node.l);
  }

  remove(data) {
    this.listNull = this.removeNode(this.listNull, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.l = this.removeNode(node.l, data);
      return node;
    } else if (data > node.data) {
      node.r = this.removeNode(node.r, data);
      return node;
    } else {
      if (node.l === null && node.r === null) {
        node = null;
        return node;
      }
      if (node.l === null) {
        node = node.r;
        return node;
      } else if (node.r === null) {
        node = node.l;
        return node;
      }
      let newNode = this.minNode(node.r);
      node.data = newNode.data;
      node.r = this.removeNode(node.r, newNode.data);
      return node;
    };
  }

  min() {
    if (this.listNull === null) return null;

    this.c = this.listNull;
    do {
      if (this.c.l === null) {
        return this.c.data;
      } else {
        this.c = this.c.l;
      };
    } while (true);
  }

  max() {
    if (this.listNull === null) return null;

    this.c = this.listNull;
    do {
      if (this.c.r === null) {
        return this.c.data;
      } else {
        this.c = this.c.r;
      };
    } while (true);
  }
}

module.exports = {
  BinarySearchTree
};
