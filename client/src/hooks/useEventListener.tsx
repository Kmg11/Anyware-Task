import { useEffect, useRef } from "react";

export function useEventListener(
	eventType: keyof WindowEventMap | keyof DocumentEventMap,
	callback: (e: Event | MouseEvent | KeyboardEvent) => void,
	element: Window | Document
) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (element === null) return;
		const handler = (e: Event) => callbackRef.current(e);
		element.addEventListener(eventType, handler);

		return () => element.removeEventListener(eventType, handler);
	}, [eventType, element]);
}
