## Question 1
3 will be logged to the console. This is because in the *for* loop, the variable *i* is function scoped, hence can be accessed event outside of the loop. By the time the loop finishes, *i* will be incremented to 3 which fails the condition `i<prices.length` and will break the loop. So in line 12, we are logging the same variable as declared in the loop, and hence *3* will be logged. 

## Question 2
150 will be logged to the console. This is because *discountedPrice* is function scoped and hence can be accessed outside of the *for* loop. The last value to be assigned to *discountedPrice* is 300 (`prices[2]`) * 0.5 = 150. 

## Question 3
150 will be logged to the console. This is because *finalPrice* is function scoped and hence can be accessed outside of the *for* loop. The last value to be assigned to *finalPrice* = round(150 * 100) / 100 = 150.

## Question 4
The function will simply return the array [50, 100, 150]. This is because during each loop, we push *finalPrice* into the *discounted* array. There are no errors as everything used is in scope. 

## Question 5
There will be an error as *i* is declared with *let*, hence in the scope of the *for* loop only. Therefore, *i* is out of scope when we try to access it outside of the loop.

## Question 6
There will be an error as *discountedPrice* is declared with *let*, hence in the scope of the *for* loop only. Therefore, *discountedPrice* is out of scope when we try to access it outside of the loop.

## Question 7
150 will be logged to the console. This is because *finalPrice* is function scoped as it's declared at the top of the function (despite using *let*). Hence it can be accessed outside of the *for* loop. The last value to be assigned to *finalPrice* = round(150 * 100) / 100 = 150.

## Question 8
The function will simply return the array [50, 100, 150]. This is because during each loop, we push *finalPrice* into the *discounted* array. As the *discounted* is declared at the top of the function, it scopes the entire function (despite using *let*). There are no errors as everything used is in scope. 

## Question 9
There will be an error as *i* is declared with *let*, hence in the scope of the *for* loop only. Therefore, *i* is out of scope when we try to access it outside of the loop.

## Question 10
3 (length of passed in array = 3) will be logged to the console. This is because we declared *length* as a *const* at the top of the function, hence the variable scopes the entire function. 

## Question 11
The function will simply return the array [50, 100, 150]. This is because during each loop, we push *finalPrice* into the *discounted* array. As the *discounted* is declared at the top of the function, it scopes the entire function (despite using *const*). Pushing into a *const* is also allowed (we are not reassigning values but simply mutating). There are no errors as everything used is in scope and mutating in *const* is allowed. 

## Question 12
- A. `student.name` 
- B. `student['Grad Year']`
- C. `student.greeting()`
- D. `student['Favorite Teacher'].name`
- E. `student.courseLoad[0]`

## Question 13
- A. '3' + 2 = '32'
- B. '3' - 2 = 1
- C. 3 + null = 3
- D. '3' + null = '3null'
- E. true + 3 = 4
- F. false + null = 0
- G. '3' + undefined = '3undefined'
- H. '3' - undefined = NaN

## Question 14
- A. '2' > 1 = true
- B. '2' < '12' = false
- C. 2 == '2' = true
- D. 2 === '2' = false
- E. true == 2 = false
- F. true === Boolean(2) = true

## Question 15
`==` allows type conversion: if operands differ in type, JavaScript converts them to a common type before checking if resulting values are equal
`===` doesn't allow type conversion: requires both type and value to match exactly.

## Question 17
1. We first call the function and *newArr* is initialized to []
2. In the first iteration, `i = 0`, `array[0] = 1`. We call *callback(1) or doSomething(1)* which returns 1*2 = 2. Then we push 2 into `newArr`, `newArr = [2]`.
3. In the second iteration, `i = 1`, `array[1] = 2`. We call *callback(2) or doSomething(2)* which returns 2*2 = 4. Then we push 4 into `newArr`, `newArr = [2, 4]`.
4. In the first iteration, `i = 2`, `array[2] = 3`. We call *callback(3) or doSomething(3)* which returns 3*2 = 6. Then we push 6 into `newArr`, `newArr = [2, 4, 6]`.
5. Finally, the loop ends and the `modifyArray` returns the arary `[2,4,6]`

## Question 19
```
1
4
3
2
```