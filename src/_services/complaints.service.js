
export const complaintsService = {
  getAll,
  add,
  update
};

async function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/api/complaints`, requestOptions).then(handleResponse);
}

async function add(
  id_user_left_complaint,
  // айдишник юзера, на которого жалоба
  complaint,
  //  - текст жалобы
  type_id,
  //  - айди типа жалобы
  status_id
  //  - айди статуса жалобы
) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({
      id_user_left_complaint,
      complaint,
      type_id,
      status_id
    })
  };
  return fetch(`/api/complaints/add`, requestOptions).then(handleResponse);
}

async function update(status_id) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({ status_id })
  };
  return fetch(`/api/complaints/update/${id}`, requestOptions).then(handleResponse);
}