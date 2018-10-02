<template>
  <div class="about">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/about' }">about</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>Hello {{ their_name }}, this is about page</h1>
    <img src="../assets/logo.png">
    <p>{{ $t("message.hello") }}</p>
    <p>File Explorer - Lorem ipsum dolor sit amet, elit, sed do tempor</p>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
      <div class="block">
        <p class="datepickerwithoptions">Picker with quick options</p>
        <el-date-picker
          v-model="pickeddate"
          type="date"
          placeholder="Pick a day"
          :picker-options="datePickerOptions">
        </el-date-picker>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name,
      pickeddate: '',
      datePickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    }  
  }
}
</script>

