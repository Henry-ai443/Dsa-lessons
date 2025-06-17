# 0(1) - constant Time
def get_first_element(arr):
    return arr[0]

# 0(n) - linear Time
def print_all_items(arr):
    for item in arr:
        print(item)

# 0(n^2) - Quadratic Time
def print_all_pairs(arr):
    for i in arr:
        for j in arr:
            print(i, j)

# 0(log n) - Logarithmic Time
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    while left <= right:
        mid = (left + right) / 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid -1
    return -1