import pandas as pd
arr = [1,2,3]
myvar = pd.Series(arr)
print(myvar)

ns = pd.Series(arr, index=["index1", "index2", "index3"])
print(ns)  

s = [(1,2), (4,5,6)]
print(pd.Series(s))