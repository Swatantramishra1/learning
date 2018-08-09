let sample = [
                [1,1,1,0,0,0],
                [0,1,0,0,0,0],
                [1,1,1,0,0,0],
                [0,0,2,4,4,0],
                [0,0,0,2,0,0],
                [0,0,1,2,4,0]
            ];

let max = 0;
for(let i=1;i<sample.length-1;i++){

    for(let j=1;j<sample[i].length-1;j++){
        let sum = sample[i-1][j-1] + sample[i-1][j]+  sample[i-1][j+1]+ sample[i][j]+ sample[i+1][j-1]+sample[i+1][j]+ sample[i+1][j+1]
        if(sum>max)
        max=sum;
    }
}

console.log(max)
