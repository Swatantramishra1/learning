let input= "My Name is swatantra and 20-10-1975 becoming india as 19-12-1975";

function getDistinctYear(input)
{
	let spltInput= input.split(' ');
	let years=[];
	for (var i = 0; i < spltInput.length; i++)
	{
		let splitYear = spltInput[i].split('-');
		if(splitYear.length == 3)
		{
			years.push(spltInput[i])
		}

	} 

 return years
}


function getCount(inp) {

	let yearsData = inp.map( x => x.split('-')[2])
	let obj={};
	for (let i = 0; i < yearsData.length; i++) {
		obj[yearsData[i]] = yearsData[i]
	}

	return Object.keys(obj).length;
}
// console.time('someFunction');
// console.log(getCount(getDistinctYear(input)))	
// console.timeEnd('someFunction');


var t0 = performance.now();
console.log(getCount(getDistinctYear(input)))	
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");