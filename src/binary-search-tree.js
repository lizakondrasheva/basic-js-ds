const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = {
  BinarySearchTree
};

class BinarySearchTree {
  root = null;

  constructor() {
      this.root = null;
  }

  root() {
      return this.root;
  }
  add(data) {
      let i = new Node(data);
      if (this.root === null) {
          this.root = i;
      } else {
          checkNode(this.root, i);
      }

      function checkNode(current, i) {
          if (i.data < current.data) {
              if (current.left === null) {
                  current.left = i;
              } else {
                  checkNode(current.left, i);
              }
          } else {
              if (current.right === null) {
                  current.right = i;
              } else {
                  checkNode(current.right, i);
              }
          }
      }
  }

  has(data) {
      let nodeData = this.find(data);
      if (nodeData === null) return false;
      else return true;
  }

  find(data) {
      if (this.root === null) return null;
      let nodeData = this.root;
      if (nodeData.data === data) return nodeData;
      else {
          while (nodeData)
              if (nodeData.data === data) return nodeData;
              else {
                  if (data < nodeData.data) {
                      nodeData = nodeData.left;
                  } else {
                      nodeData = nodeData.right;
                  }
              }
      }
      return null;
  }
  remove(data) {
      this.root = deleteNode(this.root, data);

      function deleteNode(nodeData, data) {
          if (nodeData === null) return null;
          else if (data < nodeData.data) {
              nodeData.left = deleteNode(nodeData.left, data);
              return nodeData;
          } else if (data > nodeData.data) {
              nodeData.right = deleteNode(nodeData.right, data);
              return nodeData;
          } else {
              if (nodeData.left === null && nodeData.right === null) nodeData = null;
              else if (nodeData.left === null) {
                  nodeData = nodeData.right;
                  return nodeData;
              } else if (nodeData.right === null) {
                  nodeData = nodeData.left;
                  return nodeData;
              } else {
                  let min = nodeData.right;
                  while (min.left != null) {
                      min = min.left;
                  }
                  nodeData.data = min.data;
                  nodeData.right = deleteNode(nodeData.right, min.data);
                  return nodeData;
              }
          }
      }
  }
  min() {
      let nodeData = this.root;
      if (nodeData === null) return null;
      while (nodeData.left != null) {
          nodeData = nodeData.left;
      }
      return nodeData.data;
  }

  max() {
      let nodeData = this.root;
      if (nodeData === null) return null;
      while (nodeData.right != null) {
          nodeData = nodeData.right;
      }
      return nodeData.data;
  }
}
