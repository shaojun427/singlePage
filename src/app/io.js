import nattyFetch from 'natty-fetch';
console.log(1111)
let __ENV__ = (env) ? 'singlePage/mock/' : '/mock/';
const context = nattyFetch.context({
  mockUrlPrefix: __ENV__,
  mock: true,
  withCredentials: false,
  traditional: true,
  timeout: 5000,
  fit(response) {
    return {
        "success": response.success,
        "content": response,
        "error": response
    }
  }
});

context.create('Home', {
  test: {
    mockUrl: 'home/test.json',
    url: 'home/test.json'
  }
});

export default context.api;