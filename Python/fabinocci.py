seq=[0,1]
def findFabinocci(lim,seq):
	for i in range(1,lim):
		seq.append(seq[-1]+seq[-2])



findFabinocci(10,seq)

for j in seq:
	print(j)
