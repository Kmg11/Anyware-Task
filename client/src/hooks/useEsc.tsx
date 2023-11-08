import { useEventListener } from "./useEventListener";

export function useEsc(callback: (e: Event) => void) {
	useEventListener(
		"keydown",
		(e) => {
			if (e instanceof KeyboardEvent) {
				e.key === "Escape" && e.code === "Escape" && callback(e);
			}
		},
		window
	);
}
