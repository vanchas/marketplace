
export const desiresService = {
  getAll,
  getById,
  update,
  search,
  deleteById,
  archivate
};

function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/api/desires`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/api/desires/${id}`, requestOptions).then(handleResponse);
}

function update(
  id,
  photo,
  //  - jsonс файлами , в котором может быть несколько фотографий
  video,
  //  - файл с видел
  description,
  //  - описание желания
  current_price,
  //  - текущая цена
  old_price,
  //  - старая цена
  header,
  //  - заголовок
  rating,
  //  - рейтинг
  first_category,
  //  - первая категория
  second_category,
  //  - вторая категория
  first_subcategory,
  //  - первая подкатегория
  second_subcategory,
  //  - вторая подкатегория
) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
    body: JSON.stringify({
      photo,
      video,
      description,
      current_price,
      old_price,
      header,
      rating,
      first_category,
      second_category,
      first_subcategory,
      second_subcategory
    })
  };
  return fetch(`/api/desires/update/${id}`, requestOptions).then(handleResponse);
}

// выпадающее меню(по убыванию рейтинга, цены, по увеличению рейтинга и цены)
// sort descending desire rating
// sort by increase in price of desire
function search(sort, search) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
    body: JSON.stringify({
      sort,
      search
    })
  };
  return fetch(`/api/desires/search`, requestOptions).then(handleResponse);
}

function deleteById(id) {
  const requestOptions = { method: 'DELETE', headers: authHeader() };
  return fetch(`/api/desires/${id}`, requestOptions).then(handleResponse);
}

function archivate(id) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/api/desires/archive/${id}`, requestOptions).then(handleResponse);
}
