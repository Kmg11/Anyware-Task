import { MutableRefObject } from "react";
import { useEventListener } from "./useEventListener";

export function useClickOutside(
	ref: MutableRefObject<HTMLElement | null>,
	callback: (e: Event) => void
) {
	useEventListener(
		"click",
		(e) => {
			if (
				ref.current === null ||
				ref.current === undefined ||
				ref.current.contains(e.target as Node)
			)
				return;
			callback(e);
		},
		document
	);
}
