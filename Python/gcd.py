def gcd(m,n):
	fm=[]
	for i in range(1,m+1):
		if(m%i) == 0:
			fm.append(i)

	fn=[]
	for j in range(1,n+1):
		if(n%j)==0:
			fn.append(j)

	cf=[1];
	for k in fm:
		if k in fn:
			cf.append(k)


	return cf[-1]





print(gcd(8,12))





