1. 3. The output, i from line 12 is declared as var in line 6, and is repeated by the length of the prices. Since there are three values transmitted as parameters on line 19, i++ is performed as many as three times. Therefore, the output value is 3.
2. 150. what the program wants to show in line 13 is the value of the discountedPrice, which was declared as var in line 7. Since the value declared var is reallocable, and the values array has a total of three values, the discountedPrice will be changed to 50, 100, and 150, which are the result of the calculation, and finally, it has 150. At this time, when calling from line 13, 150 is returned.
3.  150. when the discountedPrice makes a result of 50, 100, and 150 in the for loop of line 6, the finalPrice multiplies the value by 100 and rounds it out and divides it by 100. Since finalPrice is declared as var, it can be reallocated, and finalPrice has 150 at the end of the for loop. Therefore, the value returned by line 14 is 150.
4.  Array discounted [50,100,150]. finalPrice is updated in the for loop and its values are entered in order at line 9 to the discounted array. Therefore, 50, 100, and 150 are included in the discounted, and the return value at line 16 is this entire array.
5.  Error. i was declared via let on line 6, so {} It is not valid beyond the block. Therefore, an error occurs because i called on line 12, since it cannot be found.
6.  Error. the discountedPrice was declared via let on line 7, so {} It is not valid beyond the block. Therefore, an error occurs because the discountedPrice called on line 13, since it cannot be found.
7.  150. The finalPrice was declared let on line 4. Which was repeatedly changed within the for loop. When finalPrice is called on line 14, the return value is 150 because finalPrice has 150 at the time. Unlike other previous values such as i or discountedPrice, the finalPrice is declared in where {} block, which is located in a function of discountPrices. So the finalPrice is valid in it.
8.  Array discounted [50,100,150]. finalPrice is updated in the for loop and its values are entered in order at line 9 to the discounted array. Therefore, 50, 100, and 150 are included in the discounted, and the return value at line 16 is this entire array.
9.  Error. i was declared via let on line 6, so {} It is not valid beyond the block. Therefore, an error occurs because i called on line 11, since it cannot be found.
10. 3. Output from line 12, length declared constant at line 4. The length is declared in where {} block, which is located in a function of discountPrices. So the length is valid in it. Therefore, the output value is 3.

[Data Type]  
11. Array discounted [50,100,150]. dicountedPrice is updated in the for loop and its values are entered in order at line 8 to the discounted array. Therefore, 50, 100, and 150 are included in the discounted, and the return value at line 14 is this entire array.
12. A. student.name
    B. Object.values(student)[2]
    C. student.greeting()
    D. Object.values(student)[4].name
    E. student.courseLoad[0]

[Basic Operators & Type Conversion]  
13. A. 32. When operator, + meets the string operand, it is used as a concatenate, and '3' and '2' are connected.
    B. 1. Operator, - is only used as subtraction, so '3' is parsed as a number, and 3-2 is calculated.
    C. 3. Since null is compatible with the number 0, 3+0 is calculated.
    D. 3null. When operator + meets the string operand, it is used as a concatenate, and '3' and 'null' are connected.
    E. 4. Since true is compatible with the number 1, 1+3 is calculated.
    F. 0. Both false and null are numbers 0 and are compatible, so 0+0 is calculated.
    G. 3undefined. When operator + meets the string operand, it is used as concatenate, and '3' and 'undefined' are connected.
    H. NaN. Operator - is only used as subtraction, so '3' is parsed as a number, but undefined returns Not a Number (NaN) when used with operators with numbers as operands.
14. A. true. '2' is parsed as a number, so 2 > 1 is calculated.
    B. false. Both '2' and '12' are parsed as a number, so 2 < 12 is calculated.
    C. true. An operator, == parses two operands to ensure that they have the same value. '2' is parsed as a number, so 2 == 2 is calculated.
    D. false. The operator === first checks that the two operands are of the same type, and if they are, then cheack wether the values are the same. 2 and '2' are different types, so they are false.
    E. false. Since true is compatible with the number 1, so 1 == 2 is calculated.
    F. true. The Boolean() function returns false when a value compatible with 0 as a parameter, and true if it is any other value, so true === true is calculated.
15. An operator, == parses two operands to ensure that they have the same value.
    The operator, === first checks that the two operands are of the same type, and if they are, then cheack wether the values are the same.

[Loops]  
16. Please check part2-qustion16.js

[Functions]  
17. as

[setInterval(), setTimeout(), clearTimeout()]  
18. a
19. a
