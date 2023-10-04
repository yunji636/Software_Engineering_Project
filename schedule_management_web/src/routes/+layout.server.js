//서버가 모든 페이지에 정보를 전달

/** @type {import('./$types').LayoutServerLoad} */
export async function load({locals}) {
    //locals에 user가 있으면?
    if (locals.user) {
        return {
            profile:locals.user
        };
    }
}