import pandas as pd
arr = [1,2,3]
myvar = pd.Series(arr)
print(myvar)

ns = pd.Series(arr, index=["index1", "index2", "index3"])
print(ns)  

s = [("a","b","c"), ("d","e","f")]
print(pd.Series(s))

print(pd.DataFrame(s))
print(ns)
print(s)