## Lesson 2: Big-O Notation
This is a mathematical  notation used to describe the time and space complexity of an algorithm in terms of input size n.
It helps you understand how your code behaves as the input grows especially when handling large datasets.
Big-O is a way to measure the performance of algorithms in terms of time and space relative to the input size `n`.

###Common Time Complexities(Big-0 - Name -> Description => Example)
0(1) - Constant Time -> Always takes the same amount of time  => Accessing an array element.
0(log n) - Logarithmic Time -> Divides the problem in half each iteration  => Binary search.
0(n) - Linear Time -> Grows proportionally with input => Loop over array.
0(n log n) - Linearithmic Time -> Efficient sorting algorithms => Merge sort, Quick sort.
0(n^2) - Quadratic Time -> Nested loops => Bubble sort.
0(2^n) - Exponential Time -> Double for each additional input => Recusrsive Fibonacci.
0(n!) - Factorial Time -> All permutations => Traveling Salesman Problem.