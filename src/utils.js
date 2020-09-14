const forCompanyFilter = (place, filter) => {
  return place.company === filter.company || filter.company === `any`;
};
const forDepartamensFilter = (place, filter) => {
  return place.departmens === filter.departmens || filter.departmens === `any`;
};
const forOtdelFilter = (place, filter) => {
  return place.otdel === filter.otdel || filter.otdel === `any`;
};
const forGenderFilter = (place, filter) => {
  return place.gender === filter.gender || filter.gender === `any`;
};
const forSpaceFilter = (place, filter) => {
  if (filter.space < 1) {
    return place.titlle === ``;
  } else if (filter.space > 0) {
    return place.titlle.length > 1;
  }
  return place;
};

/**
 * Функция сортировки
 * @param {*} data массив с данными
 * @param {*} filter массив с фильтрами
 * @return {Array} массив отфильтрованых данных
 */
const onSortPins = (data, filter) => {
  return data.filter((place) => {
    return forCompanyFilter(place, filter) && forDepartamensFilter(place, filter) &&
      forOtdelFilter(place, filter) && forSpaceFilter(place, filter) && forGenderFilter(place, filter);
  });
};

export {
  onSortPins
};
