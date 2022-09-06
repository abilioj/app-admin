import { routes as home } from "../views/home";
import { routes as about } from "../views/about";
import { routes as login } from "../views/login";

export default [
  ...about,
  ...home,
  ...login
];
