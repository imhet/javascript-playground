// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbersRecursive(l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry) return null;

    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    const newNode = new ListNode(sum % 10);

    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const newCarry = Math.floor(sum / 10);

    newNode.next = addTwoNumbersRecursive(next1, next2, newCarry);
    
    return newNode;
}

// 测试数据
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

function printList(node) {
    let current = node;
    const result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(`[${result.join(' -> ')}]`);
}

console.log("Input:");
printList(l1);
printList(l2);
console.log("Output:");
printList(addTwoNumbersRecursive(l1, l2)); // 输出：[7 -> 0 -> 8]

