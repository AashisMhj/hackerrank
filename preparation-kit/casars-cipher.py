#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'caesarCipher' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER k
#

def caesarCipher(s, k):
    # Write your code here
    result = ''
    for ch in s:
        asci_value = ord(ch)
        if 65 <= asci_value <= 90:
            modified_asci = (65 + (asci_value - 65 + k)%26)
            result = result + chr(modified_asci)
        elif 97 <= asci_value <= 122:
            modified_asci = (97 + (asci_value - 97 + k)%26)
            result = result + chr(modified_asci)
        else:
            result = result + ch
    return result
if __name__ == '__main__':
    fptr = open('output.txt', 'w')

    n = int(input().strip())

    s = input()

    k = int(input().strip())

    result = caesarCipher(s, k)

    fptr.write(result + '\n')

    fptr.close()
