<template>
  <div>
  <Header />
    <div class="home-page">
    <h2>Dernières entrées</h2>
      <div class="articles">
        <div class="article" v-for="(article, index) of articles" :key="index">
            <nuxt-link :to="{name: 'docs-slug', params: {slug: article.slug}}">

              <div class="article-inner">
                  <h3>{{article.title}}</h3>
                  <p> dir : {{article.dir}} <br>- path :  {{article.path}} <br>- slug :  {{article.slug}} <br>- createdAt :  {{article.createdAt}}</p>

              <!-- <img :src="require(`../assets/resources/${article.img}`)" alt="" class="w-1/2"> -->
              <outline-annotation-icon class="w-8 h-8" />
                <div class="detail">

                  <p>{{article.description}}</p>
                </div>

              </div>

            </nuxt-link>
          </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
async asyncData({ $content, params}){
  const articles = await $content('docs/passage', params.slug).only(['title', 'description', 'img', 'slug', 'dir', 'createdAt']).fetch();
  return { articles }
}
}

</script>

<style scoped>

h1 {
  font-size:32px;
  font-weight: 900;
  margin: 2em 0 1em -1em;
  color: rgb(158, 31, 31);
}

h2 {
  font-size:larger;
  font-weight: 900;
  margin: 2em 0 1em -1em;
  color: rgb(158, 31, 31);
}
</style>