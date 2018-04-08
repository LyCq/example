A0 = dict(zip(('a', 'b', 'c', 'd', 'e'), (1, 2, 3, 4, 5)))
A1 = range(10)
A2 = [i for i in A1 if i in A0.items()]
A3 = [A0[s] for s in A0]

print("A0:  ", A0)
print("A1:  ", A1)
print("A2:  ", A2)
print("A3:  ", A3)
