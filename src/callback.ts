/**
 * 回调
 */

const nature1 = callback => {
  const data = 'tree';
  callback(data);
};

nature1(data => {
  console.log(data);
});

/**
 * Promise
 */
const nature2 = () => {
  console.log('...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('dragon');
    }, 2000);
  });
};

// nature2().then(data => {
//   console.log(data);
// });

const demo = async () => {
  const data = await nature2();
  console.log(data);
};

demo();

console.log('volnany');
