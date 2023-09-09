import type { AstroGlobal } from "astro";

const post = (astro: AstroGlobal, fn: (data: FormData) => void) => {
  if (astro.request.method == "POST") {
    fn(astro.locals.data)    
  }
}

const on = {
  post: post
}

export default on