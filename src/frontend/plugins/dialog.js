import Vue from 'vue'

import Dialog from '~/components/Dialog.vue'

export default (ctx, inject) => {
  inject('message', (props) => {
    return new Promise((resolve) => {
      const dialog = new Vue({
        methods: {
          closeHandler(val) {
            this.$destroy()
            this.$el.remove()
            return val
          },
        },
        render(h) {
          return h(Dialog, {
            props: {
              ...props,
            },
            on: {
              close: (val) => resolve(this.closeHandler(val)),
            },
          })
        },
      }).$mount()
      document.body.appendChild(dialog.$el)
    })
  })
}
