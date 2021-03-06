import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("/auth/signup", credentials);
  },
  login(credentials) {
    return Api().post("/auth/signin", credentials);
  },
  newAccount(credentials) {
    return Api().post("/accounts", credentials);
  },
  getUserAccounts(token) {
    return Api().get(`/accounts/${sessionStorage.getItem("id")}/all`, token);
  },
  getAccounts(token) {
    return Api().get(`/accounts/`, token);
  },
  getStaffs(config) {
    return Api().get("/auth/allstaff", config);
  },
  createStaff(credentials) {
    return Api().post("/auth/createStaff", credentials);
  },
  deleteStaff(email, config) {
    return Api().delete(`/auth/${email}/user`, config);
  },
  toggleAccountStatus(accountNo, data, config) {
    return Api().patch(`/accounts/${accountNo}`, data, config);
  },
  deleteAccount(accountNo, config) {
    return Api().delete(`/accounts/${accountNo}`, config);
  },
  cashTransaction(accountNo, config) {
    return Api().post(`/transactions/${accountNo}/transaction`, config);
  }
};
