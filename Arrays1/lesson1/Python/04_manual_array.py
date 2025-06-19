class CustomArray:
    def __init__(self):
        self.data = {}
        self.length = 0

    #Access
    def get(self, index):
        return self.data.get(index, None)
    
    #Update
    def set(self, index, value):
        if index < self.length:
            self.data[index] = value
    
    #Insert at end
    def push(self, value):
        self.data[self.length] = value
        self.length += 1

    #Insert at beginning
    def unshift(self, value):
        for i in range(self.length, 0, -1):
            self.data[i] = self.data[i - 1]
        self.data[0] = value
        self.length += 1

    #Delete at end
    def pop(self):
        if self.length == 0:
            return None
        last = self.data[self.length - 1]
        del self.data[self.length -1]
        self.length -= 1
        return last
    
    #Delete at beginning
    def shift(self):
        if self.length == 0:
            return None
        first = self.data[0]
        for i in range(self.length - 1):
            self.data[i] = self.data[i + 1]
        del self.data[self.length - 1]
        self.length -= 1
        return first
    
    #linear search
    def index_of(self, value):
        for i in range(self.length):
            if self.data[i] == value:
                return i
        return  -1

arr = CustomArray()
arr.push(10)
arr.push(20)
arr.unshift(5)
print(arr.get(1)) # 10
print(arr.index_of(20)) # 2
arr.pop()
arr.shift()
print(arr.data)