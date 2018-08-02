import userService from '../services/userService';

export const state = () => ({
  loginDialogVisible: false
})

export const mutations = {
  openLoginDialog(state) {
    state.loginDialogVisible = true;
  },
  closeLoginDialog(state) {
    state.loginDialogVisible = false;
  },
  async login(state, { identity, password }) {
    let res = await userService.login(identity, password);
    if (true) {
      state.loginDialogVisible = false;
    } else {
      console.error('登录失败');
    }
  }
}