<div align="center">
   <h1> Annoying Submit Button in a Form using Vue.js </h1>

   <img src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" width=200 />

  <p>

   <a href="https://github.com/ricardocastanho/vue-annoying-button/graphs/Stars" alt="Stars">
        <img src="https://img.shields.io/github/stars/ricardocastanho/vue-annoying-button" /></a>
        
   <a href="https://github.com/ricardocastanho/vue-annoying-button/graphs/issues" alt="Contributors">
        <img src="https://img.shields.io/github/issues/ricardocastanho/vue-annoying-button" /></a>
   <a href="https://github.com/ricardocastanho/vue-annoying-button/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/ricardocastanho/vue-annoying-button" /></a>

   <a href="https://github.com/ricardocastanho/vue-annoying-button/forks">
      <img alt="Issues" src="https://img.shields.io/github/forks/ricardocastanho/vue-annoying-button" />
    </a> 
    <a href="https://github.com/ricardocastanho/vue-annoying-button/license">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/license/ricardocastanho/vue-annoying-button" />
    </a>
    <a href="https://github.com/ricardocastanho/vue-annoying-button">
      <img alt="GitHub pull requests" src="https://img.shields.io/badge/version-0.1.0-blue?color=0088ff" />
    </a>

   </p>
</div>


You won't be able to submit the form until you satisfy your own conditions. Enjoy playing with it. :)

<!-- ## Project Preview
![Preview video of project](./content/preview.gif) -->


<!-- ## :bulb: Live Project Link
[Click here to play with **Annoying Submit Button**](https://annoyingsubmitbutton.netlify.app/) -->

---

## :writing_hand: Authors

👤 **Ricardo Castanho**

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/castanhoricardo/)


---

## :people_hugging: Show your support

Give a ⭐️ if you like this project and want to support it!

---


## 🛠️ Usage example

1. Install the project
```sh
pnpm install vue-annoying-button
```

2. Register the annoying plugin
```ts
// main.ts
import { createApp } from 'vue'
import AnnoyingPlugin from 'vue-annoying-button'

import App from './App.vue'

createApp(App)
  .use(AnnoyingPlugin)
  .mount('#app')
```

3. Use it on your components
```vue
// App.vue
<template>
  <header>
    <v-annoying-button :annoy="true" range="20vw" class="submit-button">
      Annoy me
    </v-annoying-button>
  </header>
</template>

<style scoped>
header {
  margin: auto;
  width: 50%;
}

.submit-button {
  margin-top: 1.75rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
  letter-spacing: 0.5px;
  padding: 0.85em 2.2em;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

See [demo](./demo/) for more examples

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b 'feature/AmazingFeature'`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Feel free to check the [issues page](../../issues/).
---
## 📝 License

This project is under the [MIT](./LICENSE) license.

---
<!-- ## :pray: Thanks

Thanks to everyone who has contributed towards this project

<div>
    <a href="https://github.com/ricardocastanho/vue-annoying-button/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=ricardocastanho/vue-annoying-button" />
    </a> -->
</div>



