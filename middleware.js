export { default } from "next-auth/middleware";
//list all protected routes
export const config = { matcher: ["/dashboard"] };
