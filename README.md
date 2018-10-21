# 一个基于vue.js和element-ui可以动态生成表单项form表单

此动态form表单是基于element-ui里的el-form表单基础上进行修改而来，它实现了新增表单项、删除表单项、表单验证和重置表单、表单提交等form表单所拥有的基本功能。

## 原理分析：

此form表单每一项绑定的值组成一个对象，对象叠加组成了一个对象数组，循环对象数组生成form的表单项。当点击新增一项时，其实就是给form表单对象数组添加一个对象，删除则反之。值得注意的是，由于动态表单得到的是一个对象数组，但我们需要的是表单的值组成的对象，所以我们还需要把这个对象数组转成一个对象（我的源码中已经做了处理）。

![image](https://github.com/KBeginner/vue-dynamic-demo/blob/master/src/assets/dynamic.gif)
