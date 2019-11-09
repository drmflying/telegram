const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const server = new Koa();
const http = require('http').Server(server.callback());
const io = require('socket.io')(http);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

// 接口路由
const apis = require('./apis');

const animals = [
  'Aquarium',
  'Badger',
  'BatFace',
  'Bear',
  'Bug',
  'Bird',
  'Beaver',
  'Bee',
  'Caterpillar',
  'Bumblebee',
  'FishFood',
  'Dolphin',
  'Corgi',
  'Cat',
  'Horse',
  'Kangaroo',
  'Hornet',
  'Chicken',
  'Insect',
  'Bull',
  'Crab',
  'Fish',
  'Butterfly',
  'Dog',
  'Lion',
  'Mite',
  'Whale',
  'Giraffe',
  'Ladybird',
  'Dragonfly',
  'HornetHive',
  'Deer',
  'Duck',
  'DogPark',
  'Shark',
  'Prawn',
  'Pig',
  'Cow',
  'Seahorse',
  'Elephant',
  'Rabbit',
  'Spider',
  'Unicorn',
  'Sheep',
  'Wolf',
  'Leopard',
  'Hummingbird',
  'Gorilla',
  'Fly',
  'PuffinBird',
  'Wasp',
  'Starfish',
  'Panda',
  'Llama',
  'Stork',
  'ClownFish',
  'Rhinoceros',
  'KiwiBird',
  'Frog',
  'Grasshopper',
  'PigWithLipstick',
  'Tentacles',
  'Mosquito',
  'Dinosaur',
  'Turtle',
  'Octopus',
  'Falcon',
  'Snail'
];
const users = [];
let nums = 0;
// socket.io server
io.on('connection', socket => {
  let logged = false;
  console.log(socket.id);

  // 登录
  socket.on('login', uuid => {
    if (logged) return;
    let random = Math.floor(Math.random() * animals.length + 1) - 1;
    // 为当前的客户端存储 username
    socket.username = animals[random];
    socket.uuid = uuid;
    ++nums;
    logged = true;
    socket.emit('login', {
      uuid: uuid,
      name: socket.username,
      nums: nums
    });

    // 广播给其它客户端有用户登录了
    socket.broadcast.emit('user joind', {
      username: socket.username,
      nums: nums
    });
  });

  // 监听客户端发送的信息
  socket.on('chat', function(data) {
    io.emit('chat', {
      owner: {
        uuid: socket.uuid,
        name: socket.username
      },
      message: data,
      time: new Date().getTime()
    });
  });

  // 监听客户端的输入事件
  socket.on('typing', function() {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // 监听客户端的停止输入事件
  socket.on('stop typing', function() {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // 退出
  socket.on('disconnect', function() {
    if (logged) {
      --nums;

      // 广播给其它客户端有用户离开了
      socket.broadcast.emit('user left', {
        username: socket.username,
        nums: nums
      });
    }
  });
});

app.prepare().then(() => {
  const router = new Router();
  router.get('/messages/:chat', async ctx => {
    ctx.body = messages[ctx.params.chat];
  });

  router.get('/meetings', async ctx => {
    await app.render(ctx.req, ctx.res, '/meetings', ctx.query);
    ctx.respond = false;
  });

  router.get('/files', async ctx => {
    await app.render(ctx.req, ctx.res, '/files', ctx.query);
    ctx.respond = false;
  });

  router.all('*', async ctx => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
  // apis
  server.use(apis.routes());
  server.use(router.routes());
  http.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
