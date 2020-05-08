import { authHeader, handleResponse } from '../_helpers';

export const userService = {
  getAll,
  getById,
  update,
  deleteUser
};

function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function update(id, name, second_name, email, phone, rating, position, telegram, viber, whatsapp, site, avatar) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({
      name,
      second_name,
      email,
      phone,
      rating,
      position,
      telegram,
      viber,
      whatsapp,
      site,
      avatar
    })
  };
  return fetch(`/api/auth/user/update/${id}`, requestOptions).then(handleResponse);
}

function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  return fetch(`/api/auth/user/destroy/${id}`, requestOptions).then(handleResponse);
}

// /api/auth/user - GET
// инфа о пользователе

// /api/auth / user / update / { id } - POST
// дополняет свой профиль, поля: 'name',
//   'second_name',
//   'email',
//   'phone'
// 'rating' число
// 'position' хз что придумать, но какую инфу с позицией нужно сделать будет по Украине или нет
// 'telegram', ссылка на телегу
// 'viber', ссылка на вайбер
// 'whatsapp', ссылка на ватсап
// 'site', просто сайт какой - то
// 'avatar', файл с изображением

// /api/auth/user/destroy/{id} - POST
// удаление юзера, переделаю на DELETE
// везде заголовок "Authorization" с токеном, который приходит при логине (Bearer {token})