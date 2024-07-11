# nest study

## git相关

查看代理命令

```bsh
git config --global --get http.proxy
git config --global --get https.proxy
```

取消代理命令

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## nest 加了模块机制，可以把不同业务的 controller、service 等放到不同模块里

```js
nest g module other

nest g service other

nest g resource other

--no-spec // 不生成测试文件
```

## 通过node调试代码

```js
node --inspect-brk index.js
```

--inspect 是调试模式运行， --inspect-brk 还会在首行断住
浏览器输入 `chrome://inspect/` 进行调试
