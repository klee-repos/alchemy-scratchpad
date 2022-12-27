class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        let totalOutput = 0;
        let totalInput = 0;
        // check if already spent else add to totalInput
        for (let i in this.inputUTXOs) {
            if (this.inputUTXOs[i].spent) {
                throw new Error("Input TXO is spent");
            } else {
                totalInput += this.inputUTXOs[i].amount;
            }
        }
        // add all output amounts
        for (let o in this.outputUTXOs) {
            totalOutput += this.outputUTXOs[o].amount;
        }
        // check if has enough funds
        if (totalInput < totalOutput) {
            throw new Error("Input TXO does not have enough funds");
        }
        // market input TXOs as spent
        for (let i in this.inputUTXOs) {
            this.inputUTXOs[i].spend();
        }
        return;
    }
}

module.exports = Transaction;
