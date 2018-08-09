# print('s'.isalpha())


def checkAlphabet(s):
	return s.isalpha()

def reverse(input):
	List=[]
	SpecialCharachet=[]
	inp=input

	for i in range(0,len(input)):
		 if checkAlphabet(input[i]):
		 	List.append(input[i])
		 else:
		    SpecialCharachet.append(i)

	List.reverse()
	str1 = ''.join(List)
	for k in range(0,len(SpecialCharachet)):
		str1=str1+.
	return 



		



reverse("sww#")



