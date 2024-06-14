# nest study

## nest 加了模块机制，可以把不同业务的 controller、service 等放到不同模块里

```js
nest g module other

nest g service other
```

## 通过node调试代码

```js
node --inspect-brk index.js
```

--inspect 是调试模式运行， --inspect-brk 还会在首行断住
浏览器输入 `chrome://inspect/` 进行调试
