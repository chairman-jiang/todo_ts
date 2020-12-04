/** 
 * @param target 
 * @param className 
 * @description 循环
 */
export const findElementNodeByClassName = (target: HTMLElement, className: string): HTMLElement => {
  while (target = target.parentNode as HTMLElement) {
    if (target.className === className) {
      return target;
    }
  }
};

export const isArrayList = (list: any) : boolean => {
  return (list && Array.isArray(list) && list.length) ? true : false;
};

// let arr = [1, 2, 3, 4, 5, 6 ,6, 7, 3];

// let newList = arr.reduce((prv, cur) => {
//   let lastVal: number[] | undefined = prv[prv.length - 1];
//   if (isArrayList(lastVal) && lastVal.length !== 2) {
//     lastVal.push(cur)
//   } else {
//     prv.push([cur]);
//   }
//   return prv;
// }, []);


// console.log(newList, 'ss');
