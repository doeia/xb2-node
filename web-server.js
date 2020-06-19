const http = require("http");

const server = http.createServer((request, response) => {
  //   response.write("hello");

  //   response.writeHead(200, {
  //     "Content-Type": "text/html",
  //   });
  //   response.write(`<input/>`);

  /* switch (request.url) {
    case "/":
      response.write("hello");
      break;
    case "/posts":
      response.write("posts");
      break;
    default:
      response.writeHead(404);
      response.write("404");
      break;
  } */

  const data = {
    id: 1,
    title: "几个我",
    content: "更接近偶记",
  };

  const jsonData = JSON.stringify(data);

  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });

  response.write(jsonData);

  response.end();
});

server.listen(3000, () => {
  console.log("服务已启动");
});
