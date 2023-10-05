import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({locals}){
    //사용자 인증 정보 지우기
    locals.pb.authStore.clear();
    locals.user = null;

    throw redirect(303, '/')
}