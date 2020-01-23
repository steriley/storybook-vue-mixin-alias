import MyButton from './MyButton.vue';

export default {
  title: 'Button',
  component: MyButton,
};

export const Text = () => ({
  components: { MyButton },
  template: '<my-button>Hello World</my-button>',
});

