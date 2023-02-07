# 2robots

=====Task=====
Please create a webpage where user can enter the input and show the output for 
the problem below.

=====Problem=====
There are 2 robots A & B.

They are locked up in separate hallways for a test.

Each hallway contains 100 buttons labeled with numbers 1, 2, ..., 100. 
The number also indicates that same meters from the start of the hallway. (e.g. 
button 2 means this button is 2 meters from the start)

Both A & B start at button 1. 

For each second, a robot can either:
* walk one meter in either direction
* or it can press the button at its position once
* or it can stay at its position and not press the button 

To complete the test, the robots need to push a certain sequence of buttons in 
a certain order. Both robots know the full sequence in advance. 

Calculate how fast can they complete this test.

For example, let's consider the following button sequence required for the robots to push:

   A 2, B 1, B 2, A 4

Here, A 2 means button 2 in robotA's hallway, B 1 means button 1 in robotB's 
hallway, and so on. 

The robots can push this sequence of buttons in 6 seconds using the strategy 
shown below:

Time | Robot A           | Robot B
-----+------------------+-----------------
  1  | Move to button 2 | Stay at button 1
  2  | Push button 2    | Stay at button 1
  3  | Move to button 3 | Push button 1
  4  | Move to button 4 | Move to button 2
  5  | Stay at button 4 | Push button 2
  6  | Push button 4    | Stay at button 2
  
Note that B has to wait until A has completely finished pushing A 2 before it 
can start pushing B 1.

=====Input=====
The first line of the input gives the number of test cases, T. T test cases follow.

Each test case consists of a single line beginning with a positive integer N, 
representing the number of buttons that need to be pressed. This is followed 
by N terms of the form "Ri Pi" where Ri is a robot color (always 'A' or 'B'), 
and Pi is a button position.

=====Output=====
For each test case, output one line containing "Case #x: y", where x is the case
number (starting from 1) and y is the minimum number of seconds required for 
the robots to push the given buttons, in order.

=====Limits=====
1 <= Pi <= 100 for all i.
Memory limit: 1GB.
 
1 <= T <= 20.
1 <= N <= 10.

=====Sample=====

Input
3
4 A 2 B 1 B 2 A 4
3 A 5 A 8 B 100
2 B 2 B 1

  
Output
Case #1: 6
Case #2: 100
Case #3: 4