import nattyFetch from 'natty-fetch';
import NProgress from 'nprogress';

const context = nattyFetch.context({
  mockUrlPrefix: '/mock/',
  mock: !__ENV__,
  willFetch: () => {
    NProgress.start();
  },
  didFetch: () => {
    NProgress.done();
  },
  withCredentials: true,
  traditional: true,
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
    url: 'mock/home/test.json'
  }
});
const IO = context.api;

export {
  context,
  IO
};