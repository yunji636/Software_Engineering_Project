// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			//포켓베이스에서 온것임을 명시
			pb: import('pocketbase').default;
			user: import('pocketbase').default['authStore']['model'];
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
