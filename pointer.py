import math
lis = [-4, -3, -2, -1, 0, 2, 3, 5]
got= []
def pair(a):
    
    low=0
    high = len(a)-1
    for i in range(len(lis)):
        if abs(lis[high]) -abs(lis[low]) <0:
            low +=1
        elif  abs(lis[high]) - abs(lis[low]) >0:
            high -=1
        else:
            got.append([lis[high],lis[low]])
            low +=1
            
        
    return got