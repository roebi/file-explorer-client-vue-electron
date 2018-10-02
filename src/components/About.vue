<template>
  <div class="about">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/about' }">about</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>Hello {{ their_name }}, this is about page</h1>
    <img src="../assets/logo.png">
    <p>File Explorer - Lorem ipsum dolor sit amet, elit, sed do tempor</p>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }  
  }
}
</script>

