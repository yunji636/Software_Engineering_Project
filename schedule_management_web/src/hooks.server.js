import { pb } from '$lib/pocketbase';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // before response (서버 다녀오기 전에 행하고 싶은 것들)
    event.locals.pb = pb
        //서버에게 정보 전달
        event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

        try {
            // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
            event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
        } catch (_) {
            // 에러가 발생하면 그냥 버림 클리어
            event.locals.pb.authStore.clear();
        }
    
        //사용자 정보를 유저에 저장
        event.locals.user = structuredClone(pb.authStore.model);
    
        //기본적으로 항상 있어야 함
        const response = await resolve(event);
    
        // after response (서버 다녀온 후 행하고 싶은 것들)
        //클라이언트한테 다시 전달
        response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());
    
        return response;
}
