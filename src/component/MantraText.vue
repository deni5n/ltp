<template>
  <div class="flx">
    <transition name="fade" mode="out-in">
      <span class="text" :key="i">{{ nextWords(i) }}</span>
    </transition>
  </div>
</template>

<script>
export default {
name: "Text1",
  data() {
    return {
      text: 'я спокоен и уверен, спал крепко, без кошмаров ' +
            'я активен и собран, ' +
            'я знаю, что происходит вокруг и кто меня окружает ' +
            'я внимателен, ' +
            'я думаю о важном исключая все прочее ' +
            'я не знаю будущего, но я не боюсь ' +
            'я полагаюсь на своих близких ' +
            'и разделяю их бремя ведь они разделяют мое ' +
            'я буду жить и любить',
      id:0,
      i:0
    };
  },
  computed:{
    word(){
      if (this.i === 0){
        return this.nextWords(this.i) + ' ' + this.nextWords(this.i + 1)
      }else if (this.i > 0 && this.i < this.arrayWords.length){
        return this.nextWords(this.i-1 ) + ' ' + this.nextWords(this.i) + ' ' + this.nextWords(this.i +1)
      }else{
        return this.nextWords(this.arrayWords.length)
      }

    },
    arrayWords(){
      return this.text.split(' ')
    }
  },
  mounted() {
    this.next()
  },
  methods:{
    next(){
      this.i = 0
      this.id = setInterval(()=>{
        this.i += 1
        if (this.i > this.arrayWords.length){
          this.i = 0
        }

      },3500)
    },
    nextWords(i){
      return this.arrayWords[i]
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  /*transition: opacity 0.5s linear, transform 2.5s linear;*/
  transition: all 2.5s linear
}

.fade-enter{
  opacity: 0;
  transform: translate(250px, 0);
}

.fade-leave-to {
  opacity: 0;
  transform: translate(-250px, 0);
}

.text{
  font-size: 9em;
  color: red;
}

.flx{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>