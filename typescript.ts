'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const app = express_1.default();
const port = 3000;
app.listen(port, () => {
  console.log('服务已启动');
});
app.get('/', (request, response) => {
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
app.get('/posts', (request, response) => {
  response.send(data);
});
app.get('/posts/:postId', (request, response) => {
  const { postId } = request.params;
  const posts = data.filter(item => item.id == parseInt(postId, 10));
  response.send(posts);
});
//# sourceMappingURL=main.js.map
