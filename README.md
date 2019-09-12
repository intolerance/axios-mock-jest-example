# axios-mock-jest-example
Sample code for mocking API's with [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter#readme) for use in [jest](https://jestjs.io/) tests.


# Running the sample
To run the sample run the following commands:

```
npm install
npm test
```

## Test case
Our function uses `axios` to retrieve a JSON file containing a `deviceModel`. Then our function evaluates if the `uid` of the `deviceModel` matches a particular value and returns the result.


## Why do we mock the response?
We mock responses to ensure that our application handles both valid and invalid responses, appropriately.
