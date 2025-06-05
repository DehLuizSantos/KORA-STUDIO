import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Aqui você pode usar o supabase se quiser, por exemplo:
  // const { data: user } = await supabase.auth.getUser();

  return response;
};

export const config = {
  matcher: ["/dashboard/:path*", "/api/protected-route"], // ajuste as rotas protegidas conforme necessário
};
