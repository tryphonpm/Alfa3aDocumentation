<template>
  <div>
  <Header />
    <div class="home-page">
    <h2>Dernières entrées</h2>
      <div class="articles">
        <div class="article" v-for="(article, index) of articles" :key="index">
            <nuxt-link :to="{name: 'blog-slug', params: {slug: article.slug}}">

              <div class="article-inner">
                  <h3>{{article.title}}</h3>
              <img :src="require(`../assets/resources/${article.img}`)" alt="" class="w-1/2">
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
  const articles = await $content('blog', params.slug).only(['title', 'description', 'img', 'slug']).fetch();
  return { articles }
}
}

</script>

<style>
@tailwind base; /* Preflight will be injected here */

@tailwind components;

@tailwind utilities;

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