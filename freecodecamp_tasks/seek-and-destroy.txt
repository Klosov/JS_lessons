function destroyer(arr, ...args) {
  args.forEach(arg => {
    arr.forEach((item, index) => {
      if (item === arg) delete arr[index];
    })
  })

  return arr.filter(item => item !== null);
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);