import { shallowMount, createLocalVue } from '@vue/test-utils'
import Register from '@/views/Register.vue'

test('Register', () => {
    const wrapper = shallowMount(Register)

    wrapper.setData({ email: 'test@test.com' })

})