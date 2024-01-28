const questions = [
  {
    head: `Reverse Bits`,
    body: `Reverse bits of a given 32 bits unsigned integer.`,
    ex1: {
      input: `n = 00000010100101000001111010011100`,
      output: `964176192 (00111001011110000010100101000000)`,
      explanation: `The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.`,
    },
    ex2: {
      input: `n = 11111111111111111111111111111101`,
      output: `3221225471 (10111111111111111111111111111111)`,
      explanation: `The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.`,
    },
  },
  {
    head: `Longest Palindrome`,
    body: `Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
    Letters are case sensitive, for example, "Aa" is not considered a palindrome here.`,
    ex1: {
      input: `s = "abccccdd"`,
      output: `7`,
      explanation: `One longest palindrome that can be built is "dccaccd", whose length is 7.`,
    },
    ex2: {
      input: `s = "a"`,
      output: `1`,
      explanation: `The longest palindrome that can be built is "a", whose length is 1.`,
    },
  },
  {
    head: `Sort`,
    body: `Sort the given array`,
    ex1: {
      input: `a = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]`,
      output: `[1, 1, 2, 3, 3, 4, 5, 5, 6, 9]`,
      explanation: `All of the elements in the array have been sorted in ascending order (from the smallest to the largest)`,
    },
    ex2: {
      input: `a = [9, 8, 7, 6, 5, 4, 3, 2, 1]`,
      output: ` [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      explanation: `All of the elements in the array have been sorted in ascending order (from the smallest to the largest)`,
    },
  },
];
export default { questions };
