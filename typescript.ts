import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('服务已启动');
});

app.get('/', (request: Request, response: Response) => {
  response.send('你好');
});

const data = [
  {
    id: 1,
    title: '公婆人家',
    content: '金额公积金',
  },
  {
    id: 2,
    title: '牌内容',
    content: '你铂金额我弟',
  },
  {
    id: 3,
    title: '围殴女哦',
    content: '宁波诶',
  },
];

app.get('/posts', (request: Request, response: Response) => {
  response.send(data);
});

//参数
app.get('/posts/:postId', (request: Request, response: Response) => {
  //解构
  const { postId } = request.params;
  //过滤
  const posts = data.filter(item => item.id == parseInt(postId, 10));

  response.send(posts);
});
