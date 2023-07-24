import Home from './koperasi/home.svelte'
import Koperasi from './koperasi/list.svelte'
import Member from './koperasi/member.svelte'
import NotFound from './koperasi/notfound.svelte'
import Login  from './login/+page.svelte'

const routes = {
    // Exact path
    '/': Home,
    '/search/:txt/:page/:limit': Koperasi,

    // Using named parameters, with last being optional
    '/member/:id': Member,
    '/login': Login,

    // Wildcard parameter
//    '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}

export default routes;