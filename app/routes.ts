import { type RouteConfig, index, route, } from "@react-router/dev/routes";
import path from "path";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/Auth.tsx'),
] satisfies RouteConfig;
