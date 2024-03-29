import Cookies from "js-cookie";
// import { History } from "../index";
export const localstorageService = (() => {
  const _setToken = (value) => {
    Cookies.set("token", value);
  };

  const _getToken = () =>
    typeof window !== "undefined" ? Cookies.get("token") : false;

  const _logout = (url) => {
    Cookies.remove("token");
    // History.navigate(url || "/login");
  };

  const _removeToken = () => {
    Cookies.remove("token")
  }

  return {
    setToken: _setToken,
    getToken: _getToken,
    logout: _logout,
    removeToken: _removeToken,
  };
})();
