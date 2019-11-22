export default {
  state: {
    ApiReq: {
      nome: "",
      descricao: "",
      path: "",
      metodo: ""
    }
  },
  mutations: {
    SET_API_REQ(state, payload) {
      state.ApiReq.nome = payload.nome;
      state.ApiReq.descricao = payload.descricao;
      state.ApiReq.path = payload.path;
      state.ApiReq.metodo = payload.metodo;
    }
  }
};
