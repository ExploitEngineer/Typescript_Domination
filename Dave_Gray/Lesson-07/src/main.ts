// Index Signatures

/*
interface TransactionObj {
  readonly [index: string]: number;
}
*/

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42,
};

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransaction));

// todaysTransaction.Pizza = 40

console.log(todaysTransaction["Dave"]);
