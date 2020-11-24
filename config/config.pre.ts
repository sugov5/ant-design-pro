// https://umijs.org/config/
import { defineConfig } from 'umi';

/**
 * 多环境共用变量命名约定：一律大写并且且采用下划线分割单词
 * 注意：在添加变量后，需要在src/typing.d.ts内增加该变量的声明，否则在使用变量时IDE会报错。
 * 参考：
 * https://umijs.org/zh-CN/docs/config#多环境多份配置
 * https://pro.ant.design/docs/environment-variables-cn#环境变量代码中报错的处理方式
 */

export default defineConfig({
  define: {
    API_SECRET_KEY: 'XXXX', // API调用密钥
  },
});
