<template>

</template>

<script>

import RepositoryFactory from '../Service/Factory/Factory';
const PostRepository = RepositoryFactory.get("posts");

export default {
  name: "FetchVue",
  data(){
    return{
      post: [],
      post2: [],
      isLoading: false
    }
  },
  methods:{
    async fetch(){
      this.isLoading = true;
      const {data} = await PostRepository.get();
      this.isLoading = false;
      this.post = data
    },
    async postData(){
      this.isLoading = true;
      const {data2} = await PostRepository.createPost(
          {
            title: 'foo',
            body: 'bar',
            userId: 1,
          }
      )
      this.isLoading = false;
      this.post2 = data2
    }
  },
  created() {
    this.fetch();

  },
  mounted() {
    this.postData();
    console.log(this.post2)
  }
}
</script>

<style scoped>

</style>