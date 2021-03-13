# node-red-contrib-require

A custom node for node-red to require third-party module.

There are many powerful third-party modules for us in the world of nodejs, and for some reason we don't have time to encapsulate them as a node-red custom node for a while. Now you can use them easily with `node-red-contrib-require`

## How to use

### 1.For third party module

Install the module first. In your node-red user directory, typically ~/.node-red, run:

```bash
npm install <third-party-module>
```

Then you can just use module name require it.

### 2.For local module

You can use file path to require the module, like `./my-module/index.js`.

**_Note: The module must comply with the CommonJS specification._**

## License

The code in this project is licensed under [MIT license](https://github.com/ArcherGu/node-red-contrib-require/blob/main/LICENSE).
