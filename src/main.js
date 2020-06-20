const express = require("express");
const { response } = require("express");
const app = express();
const port = 3000;

/**
 * 使用 JSON 中间件
 */
app.use(express.json());

app.listen(port, () => {
  console.log("服务已启动");
});

app.get("/", (request, response) => {
  response.send("你好");
});

const data = [
  {
    id: 1,
    title: "公婆人家",
    content: "金额公积金",
  },
  {
    id: 2,
    title: "牌内容",
    content: "你铂金额我弟",
  },
  {
    id: 3,
    title: "围殴女哦",
    content: "宁波诶",
  },
];

app.get("/posts", (request, response) => {
  response.send(data);
});

//参数
app.get("/posts/:postId", (request, response) => {
  //解构
  const { postId } = request.params;
  //过滤
  const posts = data.filter((item) => item.id == postId);

  response.send(posts);
});

/**
 * 创建内容
 */
app.post("/posts", (request, response) => {
  const { content } = request.body;

  response.status(201);

  response.send({
    message: `成功创建了内容: ${content}`,
  });
});
