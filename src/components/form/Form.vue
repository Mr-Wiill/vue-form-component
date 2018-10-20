<template>
  <el-form :model="formData" ref="formData" label-width="80px" class="form-dynamic">
    <el-form-item
      v-for="(domain, index) in formData.domains"
      :label="'表单项' + (index+1)"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{required: true, message: '内容不能为空', trigger: 'blur'}">
      <el-input v-model="domain.value"></el-input>
      <a class="remove-item" v-show="formData.domains.length>1" @click.prevent="removeDomain(domain)"><i class="el-icon-close"></i></a>
    </el-form-item>
    <el-form-item class="submit-btn">
      <el-button type="primary" @click="submitForm('formData')">提交</el-button>
      <el-button @click="addDomain">新增一项</el-button>
      <el-button @click="resetForm('formData')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Form",
      data(){
          return{
            formData: {
              domains: [{
                value: ''
              }],
            }
          }
      },
      methods:{
        /*增加表单项*/
        addDomain() {
          this.formData.domains.push({
            value: '',
          });
        },
        /*删除表单项*/
        removeDomain(item) {
          var index = this.formData.domains.indexOf(item)
          if (index !== -1) {
            this.formData.domains.splice(index, 1)
          }
        },
        /*格式化表单数据*/
        formatData(data){   //动态表单生成的是一个对象数组，需要把对象数组转成一个对象
          let obj = {};
          data.forEach((item,index)=>{
            obj['value'+(index+1)] = item.value
          });
          return obj
        },
        /*提交表单*/
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.formatData(this.formData.domains))
            } else {
              alert('表单项不能为空！！！');
              return false;
            }
          });
        },
        /*重置表单*/
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
      }
    }
</script>

<style scoped>
  .form-dynamic{
    width: 650px;
    background: #fff;
    padding: 20px;
    padding-top: 40px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-align: left;
  }
  .el-input{
    width: 95%;
  }
  .remove-item{
    color: red;
  }
  .submit-btn{
    text-align: center;
    margin-left: -60px;
  }
</style>
