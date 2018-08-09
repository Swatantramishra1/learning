companies = ['hackerearth', 'google', 'facebook']
companies.insert(2,'airbnb')
companies.append("Uber")
companies.extend(["sss","sdsfs"])
companies.pop(1)
some_numbers = [4,3,5,1]
some_numbers.reverse()
for indx,name in enumerate(companies):
	print("Index is %s for companies: %s" %(indx,name))

print(some_numbers)