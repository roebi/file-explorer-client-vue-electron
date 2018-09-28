<template>
  <div class="filexplorer">
    <h1>{{ name }}</h1>
    <div class="holder">
      <form @submit.prevent="addFile">
        <input type="text" placeholder="Enter a filename ..." v-model="filename">
        <input type="checkbox" id="isDir" v-model="isDir">isDir
      </form>
      {{ filename }}
      <ul>
        <li v-for="(file, index) in files" :key='index'>{{index}}. ({{file.type}}) {{file.name}}</li>
      </ul>
      <p v-if="files.length > 1">You have {{files.length}} files</p>
      <p v-else>You have less than or equal to 1 file</p>
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
      this.files.push({ name: this.filename, type: this.isDir ? 'dir' : 'file'});
      this.filename = '';
      console.log('isDir:' + this.isDir);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="./FileExplorer.css" scoped> File is in src/components/FileExplorer.css -->
<style scoped>
.alert {
    background-color: yellow;
    width:100%;
    height: 30px;
}

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

  p {
    text-align:center;
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
</style>
