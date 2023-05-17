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

function actionCallback(var1) {
    let parsedData = JSON.parse(var1);
    const { data } = parsedData;
    return data;
}

const convertedData = convert(jsonData, actionCallback);

class DataProcess {
    constructor(data) {
        this._data = data;
        // this.sortData();
    }

    sortData() {
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
        this.doubled = this._data.map((el) => el * 2);
    }

    static getOdd(dataArg1) {
        let r = dataArg1.filter((el) => el % 2 === 1);
        return r;
    }
    static getEven(dataArg1) {
        let r = dataArg1.filter((el) => el % 2 === 0);
        return r;
    }
    printProps() {
        console.log("Data:");
        console.log(this._data);

        console.log("Doubled:");
        console.log(this.doubled);

        console.log("Total:");
        console.log(this.total);
    }
    filterSmaller() {
        this.smaller = this._data.filter((el) => el < 50);
    }

    toJSON() {
        return {
            data: this._data,
            doubled: this.doubled,
            total: this.total
        };
    }
}

let dataObj = new DataProcess(convertedData);
dataObj.sortData();
dataObj.calculateTotal();
dataObj.doDouble();
dataObj.filterSmaller();
// console.log(dataObj);
// console.log(dataObj.isEven());
// console.log(DataProcess.getOdd(dataObj._data));
// console.log(DataProcess.getEven(dataObj._data));
// dataObj.printProps();

console.log(JSON.stringify(dataObj));

let vv = { "data": [1, 2, 3] };
console.log(JSON.stringify(vv));