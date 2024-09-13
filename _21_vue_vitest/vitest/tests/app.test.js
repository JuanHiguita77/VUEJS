import App from '../src/App.vue'
import { mount } from '@vue/test-utils'


describe('App.vue', () => {
    it('renders', () => {
        const wrapper = mount(App)
        if (wrapper.find('button').exists()) {
            expect(wrapper.text()).toBe('0')
        }
        if(expect(wrapper.find('button').exists())) {
            expect(wrapper.text()).toBe('Increment')
        }
    })
    it('increment button works', async () => {
        const wrapper = mount(App)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('button').text()).toBe('1')
    })
})