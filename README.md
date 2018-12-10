# fpnn sdk websocket #

* 不支持`FPNN`加密链接, 支持`SSL`加密链接
* 支持源码方式接入, 支持自定义构建

#### 关于三方包依赖 ####
* [base64](https://github.com/dankogai/js-base64) `./libs/base64-js.js`
* [ieee754](https://github.com/feross/ieee754) `./libs/ieee754.js`
* [buffer](https://github.com/feross/buffer) `./libs/buffer.js`

#### Promise支持 ####
* 支持动态转Promise接口
* 参考:[Promise.promisifyAll](http://bluebirdjs.com/docs/api/promise.promisifyall.html)

#### 关于编译 ####
* 支持源码编译[详见: `./webpack.config.js` `./package.json`]
* 编译依赖的模块[`babel-loader` `babel-preset-es2015` `webpack` `webpack-cli`]
* 编译内置的模块[`buffer`]
```
yarn run build
```

#### 一个例子 ####
* 参考 `./test/index.html` `./test/test-rum.js` 打开浏览器console输出
```html
<script src="../libs/msgpack.min.js"></script>
<script src="../libs/fpnn.min.js"></script>
```

```javascript
let client = new fpnn.FPClient({
    endpoint: 'ws://52.83.245.22:13013/service/test',
    autoReconnect: true,
    connectionTimeout: 10 * 1000
});

client.connect();
client.on('connect', function() {

    console.log('connect!');

    let options = {
        flag: 1,
        method: 'duplex demo',
        payload: msgpack.encode({}),
    };

    client.sendQuest(options, function(data) {

        if (data) {

            console.log('duplex demo:\n', data);
        }
    }, 10 * 1000);
});

client.on('error', function(err) {

    console.error(err);
});

client.processor.on('duplex quest', function(payload, cb) {

    console.log('push demo:', payload);
    // cb && cb(msgpack.encode({test: 'test push'}), false);
});
```

#### Events ####
* `event`:
    * `connect`: 连接成功 

    * `error`: 异常
        * `err`: **(Error)**

    * `close`: 连接关闭

#### API ####
//TODO