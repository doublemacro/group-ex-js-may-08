const jsonData = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

function isPrime(num) {
    if (num == 2 || num == 3) return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
    for (let i = 5; i * i <= num; i += 6)
        if (num % i == 0 || num % (i + 2) == 0) return false;
    return true;
}

function isEven(num) {
    return num % 2 === 0;
}

function convert(data, actionCb) {
    return actionCb(data);
}

function actionCallback(arg1) {
    return JSON.parse(arg1)
}

const convertedData = convert(jsonData, actionCallback);
// more articles on callbacks and promises, static methods

// console.log(convertedData.data);

class DataProcess {
    constructor(arg1) {
        this._data = arg1;
        this.useless = -1;
    }

    doSort() {
        this._data.sort((a, b) => a - b);
    }
    calculateTotal() {
        let totalResult = 0;
        for (let i = 0; i < this._data.length; i++) {
            const element = this._data[i];
            totalResult = totalResult + element;
        }
        this.total = totalResult;
    }
    isEven() {
        return this.total % 2 === 0;
    }
    doDouble() {
        this.doubled = this._data.map((elem) => elem * 2);
    }

    static getOdd(data) {
        let result = data.filter((elem) => elem % 2 === 1);
        return result;
    }
    static getEven(data) {
        return data.filter((elem) => elem % 2 === 0);
    }

    doPrint() {
        let var1 = {
            total: this.total,
            doubled: this.doubled,
            data: this._data
        };
        console.log(var1)
    }
    calculateSmaller() {
        let result = this._data.filter((elem) => elem < 50);
        this.smaller = result;
    }
    toJSON() {
        return {
            "data": this._data,
            "smaller": this.smaller,
            "doubled": this.doubled,
        };
    }
}

const dataP = new DataProcess(convertedData.data);
dataP.doSort();
dataP.calculateTotal();
dataP.doDouble();
dataP.calculateSmaller();
// console.log(dataP);
// console.log(dataP.isEven());
// const resultOdd = DataProcess.getOdd(convertedData.data);
// console.log(resultOdd);
// const resultEven = DataProcess.getEven(convertedData.data);
// console.log(resultEven);

console.log(JSON.stringify(dataP));


