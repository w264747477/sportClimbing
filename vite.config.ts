import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { Console } from 'console';

// https://vitejs.dev/config/

export default defineConfig(({ command, mode, ssrBuild }) => {
    if (command == 'serve') {
        console.log(loadEnv(mode, process.cwd()));
    } else {
        // command === 'build'
    }
    const env = loadEnv(mode, process.cwd()); // 环境变量对象
    const { VITE_DROP_CONSOLE, VITE_APP_BASE_URL } = env;

    return {
        base: VITE_APP_BASE_URL + '/',
        publicDir: 'src/assets', //要打包的静态资源，我的图片资源在这个文件夹里，不配置的话，output打包出来的文件会没有图片
        resolve: {
            //设置别名
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        plugins: [vue()],
        server: {
            port: 8080, //启动端口
            hmr: {
                host: '127.0.0.1',
                port: 8080,
            },
            // 设置 https 代理
            proxy: {
                // 设置代理
                '^/mallos/api': {
                    // target: 'https://iotbase.cmcconenet.com:1005', // 接口域名
                    target: 'http://10.12.6.24:30808',
                    // target: 'http://192.168.226.8:9090',
                    changeOrigin: true, // 是否跨域
                    // pathRewrite: {
                    //   '^.*/mallos/api': '' //需要rewrite重写的,
                    // }
                },
            },
        },
        build: {
            outDir: 'mallos/pctpt',
            assetsDir: 'assets',
            sourcemap: false, //构建后是否生成 source map 文件
            brotliSize: false, // 启用/禁用 brotli 压缩大小报告。 禁用该功能可能会提高大型项目的构建性能
            minify: 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
            chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
            cssTarget: 'chrome61', //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
            rollupOptions: {
                input: {
                    //方便运维配置，我把index.html入口文件名和指定输出路径文件改为同名了，但是开发环境没有index.html会导致页面空白，所以我是再复制一份出来命名为index.html
                    main: path.resolve(__dirname, 'index.html'),
                    // nested: resolve(__dirname, 'nested/index.html')
                },
                output: {
                    //配置这个是让不同类型文件放在不同文件夹，不会显得太乱
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[name]-[hash].[ext]',
                },
            },
        },
        esbuild: {
            pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
        },
    };
});
