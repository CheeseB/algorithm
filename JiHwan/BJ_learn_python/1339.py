N = int(input())

alphabet_dict = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0, 'J': 0, 'K': 0, 'L': 0, 'M': 0,
                 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0, 'S': 0, 'T': 0, 'U': 0, 'V': 0, 'W': 0, 'X': 0, 'Y': 0, 'Z': 0}
alphabet_list = []
arr = []
for i in range(N):
    alphabet = input()
    arr.append(alphabet)

for alphabet in arr:
    for i in range(len(alphabet) + 1):
        num = 10 ** (len(alphabet) - i - 1)
        alphabet_dict[alphabet[i]] += num
