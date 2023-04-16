function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/
    let left = 0;
    let right = 0;

    while (left < arr.length && right < arr.length) {
        if (arr[left] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right++;
        }
        left++;
    }

    return arr;
}


