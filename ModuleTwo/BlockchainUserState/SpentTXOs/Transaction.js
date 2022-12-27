class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        for (let i in this.inputUTXOs) {
            if (this.inputUTXOs[i].spent) {
                throw new Error("Input TXO is spent");
            }
        }
        return;
    }
}

module.exports = Transaction;
