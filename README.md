# JavaScript Unexpected NaN with undefined in arithmetic operations

This repository demonstrates a common JavaScript error involving unexpected NaN results when performing arithmetic operations with undefined values.

## Description

JavaScript's loose typing system can sometimes lead to unexpected behavior, particularly when dealing with null and undefined values. This example highlights a scenario where adding null values results in the expected null, but adding undefined values leads to NaN (Not a Number).

## Bug

The `bug.js` file contains a function that demonstrates this unexpected behavior.  The function handles null values correctly but produces NaN when encountering undefined values.

## Solution

The `bugSolution.js` file offers a solution to mitigate this issue by explicitly checking for both null and undefined values and handling them appropriately.
