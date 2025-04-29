## What was the bug?
The inputs obtained with` document.getElementById(id).value` are always strings, so when `calculateSum` did `num1 + num2`, it did string concatenation (e.g. '2' + '3' === '23') instead of numeric addition.

## How would you fix it? 
Convert the input values to numbers using the `Numbers()` function first before passing them to `calculateSum`. This avoids javascript recognizing the inputs as *strings* and performing addition on *strings* instead of *integers*.

