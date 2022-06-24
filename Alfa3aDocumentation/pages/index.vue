<template>
  <div>
  <Header />
    <div class="home-page">
    <h2>Dernières entrées</h2>
      <div class="articles">
        <div class="article" v-for="article of articles" :key="article">
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  background-color: beige;
}
a {
  text-decoration: none;
}
p {
  margin-bottom: 15px;
}
p:last-of-type {
  margin-bottom: 0px;
}



.home-page {
  padding: 50px 30px;
}
h2 {
  margin-bottom: 30px;
  text-align: center;
}
.articles {
  margin: 0 auto;
  max-width: 800px;
}
.article {
  margin-bottom: 15px;
}
.article-inner {
  padding: 15px;
  background: #FFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
}
.article-inner img {
  display: block;
  width: 100%;
  max-width: 300px;
}
.article-inner .detail {
  padding-left: 15px;
  padding-right: 15px;
}
h3 {
  color: #212121;
  font-size: 24px;
  text-decoration: none;
}
p {
  color: #888;
  font-size: 18px;
  text-decoration: none;
}
</style>