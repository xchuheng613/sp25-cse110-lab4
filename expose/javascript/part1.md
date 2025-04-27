## Question 1
values added: 20

## Question 2
final result: 20

## Question 3
*var* ignores the {....} boundaries hence even if we declare the variables inside a block, it can still lead to bugs where variables exist in places that you didn't intend/want. 

Example:
``` javascript
function countdown() {
  for (var i = 3; i > 0; i--) {
    setTimeout(function() {
      console.log(i);
    }, (4 - i) * 500);
  }
}
countdown();
```
In this example, there is only one *i* for the entire countdown function. Hence when all three callbacks run, the loop finishes with *i = 0*, which applies to all three closures. Hence we get the result 0, 0, 0 instead of 3, 2, 1. 

## Question 4
values added: 20

## Question 5
There will be an error. This is because *result* is declared with a *let* in the scope of the *if* statement. Hence we can't access it outside of the *if* block, and will return a error.  

## Question 6
There will be an error as the code is assigning *num1+num2* to a constant in line 8. Hence nothing is ever printed.

## Question 7
The will be an error. First, we will hit the same reassignment of a constant error in line 8. Even if we fixed that, there will still be an error as *result* is declared with a *const* (which has the same scope as *let*) in the scope of the *if* statement. Hence we can't access it outside of the *if* block, and will return a error.