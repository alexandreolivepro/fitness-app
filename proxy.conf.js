/* eslint-disable */
module.exports =  [
      {
        context: "/api/user/v1",
        target: "http://localhost:4000/user/v1",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api/user/v1": ""
        },
        headers: {
          host: "http://localhost:4000",
          'client-id': '16b5803f-b055-4cff-bf0c-9a48b25447e4',
          'client-secret': '3e192560-3338-4ee1-b232-b4dff7cb047d',
          'grant-type': 'password',
        }
      },
];
  