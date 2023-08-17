const randomNnumber = (max, min) => min + Math.random() * (max + 1 - min)

// доля и радиус тоже рандомные  от maxCategories до minCategories
const generateData = () => {
  const maxCategories = 8;
  const minCategories = 3;
  const counCategories = Math.floor(randomNnumber(maxCategories, minCategories));
  const categories = Array.from(
    { length: counCategories },
    (_, index) => [(index + 1) + 'category', { value: randomNnumber(maxCategories, minCategories), rad: randomNnumber(maxCategories, minCategories) }]);
  const data = categories.reduce(function (target, [key, value]) {
    target[key] = value;
    return target;
  }, {})
  return data;
}

export default generateData;