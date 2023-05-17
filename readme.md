Define a function called actionCallback, that converts jsonData object to regular js object. It returns the result from JSON.parse().

Extract the list of numbers inside this object's "data" property, in a new variable.

Create a class DataProcess.
In this class:
Create a constructor that takes this list of numbers, and stores it in this._data;

Create a method called sortData which sorts all the elements in this._data, and updates this._data to be sorted.

Create a method called calculateTotal, which calculates a total for this array, and saves it in this.total;

Create a method called isEven, which will be true if the total is even, or false if the total is odd.

Create a method called doDouble, which doubles all the elements in our data using .map(), and stores it into this.doubled. 

Create a static method called getOdd, which gets all the odd elements in our data, and returns them.

Create a static method called getEven, which gets all the even elements in our data, and returns them.

Create a method which prints all these properties we created previously, this.total, this.doubled, this._data.

Create a method which filters all the elements smaller than 50, and stores them into this.smaller.

Create the method toJSON() which returns the class properties we want to stringify, in an object like: {data: this._data}.
Convert our ProcessData object to json, and print it.




