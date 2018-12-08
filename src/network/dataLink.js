// GET
// 参数 - URL上
// 返回 - String

function dataLinkGetJson (url, callback, err) {
  var Authorization = sessionStorage.getItem('Authorization')
  fetch(
    url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': Authorization
      },
    }
  ).then((response) => {
    if (response.ok)
      return response.json();
    else
      err("error");
  }).then((responseJson) => {
    callback(responseJson);
  }).catch((error) => {
    err(error);
  }).done();

}

// POST
// 参数 - URL上
// 返回 - String
function dataLinkPostJson (url, params, callback, err) {
  var Authorization = sessionStorage.getItem('Authorization')
  fetch(
			url,
			{
				method: 'POST',
				headers: {
					'Accept': '*/*',
					'Content-Type': 'application/json',
				},
				body: params
			}
		).then((response) => {
			if (response.ok)
				return response.json();
			else
				err("error");
		}).then((responseJson) => {
			callback(responseJson);
		}).catch((error) => {
			err(error);
		});
}
export {
  dataLinkPostJson,
  dataLinkGetJson
}
