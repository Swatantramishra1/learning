let _arr = [1,2,3,4,5,6,7],
    _dt = 6;

function binarySearch(arr,dt) {
    let low=0,high = arr.length-1,mid;
    while (low <= high) {
        mid = low + (high - low)/2;
        if(arr[mid] == dt) {
            return mid;
        } else if(arr[mid] < dt) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return -1;
}
function binaryRecusrsiveSearch(arr,low,high,dt)
{
    let mid = low + (high - low)/2;
    if(arr[mid] == dt) {
        return mid;
    }
    else if(arr[mid] < dt) {
       return binaryRecusrsiveSearch(arr,mid+1,high,dt);
    }
    else {
       return binaryRecusrsiveSearch(arr,low,mid-1,dt)
    }
    return -1
}
console.log(binaryRecusrsiveSearch(_arr,0,6,_dt));