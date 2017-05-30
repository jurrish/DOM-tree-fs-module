'use strict';

const Node = function(val){
  this.val = val;
  this.children = [];
};

//node will be an html element
const Tree = module.exports = function(node){
  if(!node) return new Error('need a node, noob');
  this.root = node;
};

//callback and process is where we will build our map functionality. we traverse to a certain point in the tree, and then do our object manipulation (readFile, accumulate into a new object, then write it out)
Tree.prototype.preOrderTraversalThenModifyNode = function(callBackAndProcess){
  _traverse(this.root);

  function _traverse(node){
    callBackAndProcess(node);
    node.children.forEach(_traverse);
  }

};
