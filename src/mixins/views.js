import { debounce } from 'lodash'

export default {
  props: ['next', 'title'],
  methods: {
    setDirty: debounce(field => field.$touch(), 1000)
  },
  mounted () {
    let firstInput = this.$el.querySelector('input, select')
    if (firstInput) firstInput.focus()

    window.scrollTo(0, 0)
  }
}