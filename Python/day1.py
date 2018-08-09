myArray= [1,3,4,5,6,7,8]
m=0
for e in myArray:
	if m<e:
		m=e


print m



# Other way to call arry

j=0
for i in range(len(myArray)):
	if(j < myArray[i]):
		j=myArray[i]


print j

# Other way

myNewArray=[1 for i in range(10)]

print myNewArray[2]