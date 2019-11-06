<template>
    <div class="collapse">
        <div class="collapse__top" @click="isOpen = !isOpen">
            <h4 class="collapse__title" v-html="title"></h4>
            <font-awesome class="collapse__icon" :class="{ opened: isOpen }" :icon="['fas', 'chevron-up']"/>
        </div>
        <div class="collapse__text" :class="getCollapsedClass">
            <p v-html="text"></p>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false 
  }),
  props: {
      title: { type: String, required: true },
      text: { type: String, required: true }
  },
  computed: {
      getCollapsedClass () {
        return { opened: this.isOpen, closed: !this.isOpen }
      }
  }
}
</script>


<style lang="scss">

.collapse {
    margin-top: 1.5rem;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1rem 5rem rgba($primary-color, 0.12);
    overflow: hidden;
    transition: all .1s ease;

    &__top {
        display: flex;
        justify-content: space-between;
        padding: 1rem 1.5rem;

        &:hover {
            cursor: pointer;
        }        
    }

    &__title, &__text {
        user-select: none;
    }

    &__title {
        margin: 0;
    }

    &__icon {
        color: $accent-color-2;
        transition: transform .2s ease;
        transform: rotate(180deg);

        &.opened {
            transform: rotate(0);
        }
    }

    &__text {
        margin: 0;
        &.closed {
            height: 0; 
        }
        &.opened {
            height: auto;
        }
        p {
            padding: 1rem 1.5rem;
        }
    }
}

</style>

