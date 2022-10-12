const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  BinarySearchTree() {
    this._root = null;
  }

  root() {
    if (!this._root) {
      return null;
    }
    return this._root;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this._root) {
      this._root = newNode;
    } else {
      treeDiveAdd(this._root, newNode);
    }

    function treeDiveAdd(currentNode, newNode) {
      // left
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        treeDiveAdd(currentNode.left, newNode);
      }
      //right
      if (newNode.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        treeDiveAdd(currentNode.right, newNode);
      }
    }
  }

  has(value) {
    return treeDiveHas(value, this.root());

    function treeDiveHas(value, currentNode) {
      if (!currentNode) {
        return false;
      }
      if (value == currentNode.data) {
        return true;
      }

      if (value < currentNode.data) {
        return treeDiveHas(value, currentNode.left);
      }
      if (value > currentNode.data) {
        return treeDiveHas(value, currentNode.right);
      }
    }
  }

  find(value) {
    return treeDiveFind(value, this.root());

    function treeDiveFind(value, currentNode) {
      if (!currentNode) {
        return null;
      }
      if (value == currentNode.data) {
        return currentNode;
      }

      if (value < currentNode.data) {
        return treeDiveFind(value, currentNode.left);
      }
      if (value > currentNode.data) {
        return treeDiveFind(value, currentNode.right);
      }
    }
  }

  remove(value) {
    this._root = treeDiveRemove(value, this.root());

    function treeDiveRemove(value, currentNode) {
      if (!currentNode) {
        return null;
      }

      if (value < currentNode.data) {
        currentNode.left = treeDiveRemove(value, currentNode.left);
        return currentNode;
      }
      else if (value > currentNode.data) {
        currentNode.right = treeDiveRemove(value, currentNode.right);
        return currentNode;
      }
      else if (value == currentNode.data) {
        // Если у удаляемого 0 листьев
        if (currentNode.left === null && currentNode.right === null) {
          currentNode = null;
          return currentNode;
        }

        // Если у удаляемого 1 лист
        if (currentNode.left === null) {
          currentNode = currentNode.right;
          return currentNode;
        }
        else if (currentNode.right === null) {
          currentNode = currentNode.left;
          return currentNode;
        }
        // Если у удаляемого 2 листа 
        // берем меньший элемент у правого поддерева удаляемого элемента
        var subtree = minInSubtree(currentNode.right);
        currentNode.data = subtree.data;

        // Если у нового элемента уже есть правая ветка
        currentNode.right = treeDiveRemove(subtree.data, currentNode.right);

        return currentNode;
      }
    }

    function minInSubtree(currentNode) {
      if (!currentNode) {
        return null;
      }

      if (!currentNode.left) {
        return currentNode;
      }
      return minInSubtree(currentNode.left);
    }
  }

  min() {
    return treeDiveMin(this.root());

    function treeDiveMin(currentNode) {
      if (!currentNode) {
        return null;
      }

      if (currentNode.left) {
        return treeDiveMin(currentNode.left);
      }
      return currentNode.data;
    }
  }

  max() {
    return treeDiveMin(this.root());

    function treeDiveMin(currentNode) {
      if (!currentNode) {
        return null;
      }

      if (currentNode.right) {
        return treeDiveMin(currentNode.right);
      }
      return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};