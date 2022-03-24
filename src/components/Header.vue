<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link to="/" :class="{'nav-link': navLink}" @click.native="switchingTabs">Главная</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Document" :class="{'nav-link': navLink}" @click.native="switchingTabs">Вид документа</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Apparatus" :class="{'nav-link': navLink}" @click.native="switchingTabs">
        Принимающие органы
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Block" :class="{'nav-link': navLink}" @click.native="switchingTabs">Блоки</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/Npa" :class="{'nav-link': navLink}" @click.native="switchingTabs">Нпа</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        navLink: true,
      }
    },
    methods: {
      switchingTabs(event) {
        let elements = document.querySelectorAll('.nav-link')
        elements.forEach((el) => el.classList.remove('active'))
        let elem = event.target
        if (!elem.classList.contains('active')) {
          elem.classList.add('active')
        }
      },
    },
  }
</script>
