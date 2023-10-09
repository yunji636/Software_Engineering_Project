import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	//로그인 상태면 홈페이지로 가게 함
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		//자바 스크립트 객체로 변경
		const data = Object.fromEntries(formData);

		try {
			//DB에 있는것과 비교
			//@ts-ignore
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (error) {
			// 로그인에 문제가 있으면 422 에러를 반환한다.
			// 그 결과, 페이지에 해당 에러메시지가 표시된다.
			return fail(422, {
				error: '아이디나 비밀번호가 잘못되었습니다.'
			});
		}
		throw redirect(303, '/');
	}
};
