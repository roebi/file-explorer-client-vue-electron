<template>
  <div class="filexplorer">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ name }}</h1>
    <div class="holder">
      <form @submit.prevent="addFile">
        <input type="text" placeholder="Enter a filename ..." v-model="filename" v-validate="'min:3'" name="filename">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('filename')">{{ errors.first('filename') }}</p>
        </transition>
        <input type="checkbox" id="isDir" v-model="isDir">isDir
      </form>
      {{ filename }}
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(file, index) in files" :key='file.type + file.name'>{{index}}. ({{file.type}}) {{file.name}}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <p v-if="files.length > 1">{{ $tc("message.nbOfFiles", 2, { count: files.length }) }}</p>
      <p v-else>{{ $tc("message.nbOfFiles", 1) }}</p>
      <!-- <div v-bind:class="{ alert: showAlert }">vue class binding</div> -->
      <!-- <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }">vue style binding</div> -->
      <!-- <div v-bind:style="{ alertObject }">vue style binding to object</div> does not work -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileExplorer',
  data() {
    return {
      name: 'File Explorer',
      filename: '',
      isDir: true,
      files: [
          { "name": "ZT_AUTOMAT_T",
            "type": "dir"
          },
          { "name": "ZT_FACHTEST_T",
            "type": "file"
          }
      ],
      showAlert: true,
      bgColor: 'yellow',
      bgWidth: '100%',
      bgHeight: '30px',
      alertObject: {
        bgColor: 'yellow',
        bgWidth: '100%',
        bgHeight: '30px'
      }
    }
  },
  methods: {
    addFile() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.files.push({ name: this.filename, type: this.isDir ? 'dir' : 'file'});
          this.filename = '';
          console.log('add a ' + (this.isDir ? 'dir' : 'file'));
        } else {
          console.log('Filename ist not valid. (' + this.filename + ')');
        }
      });
    },
    remove(id) {
      this.files.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="./FileExplorer.css" scoped> File is in src/components/FileExplorer.css -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  li i {
     float: right;
    /* padding: 20px; */
    /* font-size: 1.3em; */
    /* background-color: #E0EDF4; */
    /* border-left: 5px solid #3EB3F6; */
    /* margin-bottom: 2px; */
    /* color: #3E5252; */
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background-color: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s reverse;
  }

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}  
</style>
