<template>
    <div class="collapse" :class="getCollapsedClass">
        <div class="collapse__top" @click="isOpen = !isOpen">
            <h4 class="collapse__title">{{ title }}</h4>
            <font-awesome class="collapse__icon" :class="{ opened: isOpen }" :icon="['fas', 'chevron-up']"/>
        </div>
        <p class="collapse__text">{{ text }}</p>
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
    padding: 1rem 1.5rem;
    box-shadow: 0 1rem 5rem rgba($primary-color, 0.12);
    overflow: hidden;
    transition: all .1s ease;

    &.closed {
        height: 3.33rem; 
    }

    &.opened {
        height: auto;
    }

    &__top {
        display: flex;
        justify-content: space-between;

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
        margin-top: 1.5rem;
    }
}

</style>

