/* 제일 상위계층의 layout이므로, 모든 페이지에서 해당 정보를 사용할 수 있다.*/

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	//locals에 user 정보가 존재한다면, user 정보를 내보낸다.
	if (locals.user) {
		return {
			profile: locals.user
		};
	}
}
