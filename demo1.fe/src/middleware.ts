import {withAuth} from "next-auth/middleware";
import {NextResponse} from "next/server";
import {RoleEnum} from "./types";
import {AUTH_ROUTES} from "./data/auth-routes";

export default withAuth(
    function middleware(req) {
        // uraditi foreach kroz AUTH_ROUTES.ADMIN
        //procitati rutu pathname :: req.nextUrl.pathname
        //proveriti da li se rute poklapaju

        const { token } = req.nextauth;
        const { pathname } = req.nextUrl;

        if (token?.role === RoleEnum.ADMIN){
            AUTH_ROUTES.ADMIN.forEach((route) => {
                if (pathname === route){
                    console.log("Poklapa se ruta: ", route);
                }
            });
        }

        if (token?.role === RoleEnum.USER){
            AUTH_ROUTES.USERS.forEach((route) => {
                if (pathname === route){
                    console.log("Poklapa se ruta: ", route);
                }
            });
        }

        if (token?.role === RoleEnum.EMPLOYEE){
            AUTH_ROUTES.EMPLOYEE.forEach((route) => {
                if (pathname === route){
                    console.log("Poklapa se ruta: ", route);
                }
            });
        }

        // originalan nacin
        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "Admin")
            return NextResponse.rewrite(
                new URL("/auth/login?message=You Are Not Authorized!", req.url)
            );

        if (req.nextUrl.pathname.startsWith("/users") && req.nextauth.token?.role !== "User")
            return NextResponse.rewrite(
                new URL("/auth/login?message=You Are Not Authorized!", req.url)
            );

        if (req.nextUrl.pathname.startsWith("/employee") && req.nextauth.token?.role !== "Employee")
            return NextResponse.rewrite(
                new URL("/auth/login?message=You Are Not Authorized!", req.url)
            );
    },
    {
        callbacks: {
            authorized: ({token}) => !!token,
        },
    }
);

export const config = {
    matcher: ["/admin/:path*", "/users/:path*", "/employee/:path*"],
}
