import type { InputHTMLAttributes, KeyboardEvent, MouseEvent } from "react";

interface SelectInputProps {
	currOptionContent?: string;
	onSelect?: (labelContent?: string) => void;
	label?: {
		labelContent?: string;
		isCapitalized?: boolean;
	};
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	layout?: "row" | "column";
}
export function SelectInput({
	inputProps,
	onSelect,
	label,
	currOptionContent,
}: SelectInputProps) {
	const isSelected = currOptionContent === label?.labelContent;

	function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
		const key = e.code.toLowerCase();
		switch (key) {
			case "enter":
			case "space":
				e.preventDefault();
				onSelect?.(label?.labelContent);
		}
	}
	function handleClick(_: MouseEvent<HTMLDivElement>) {
		onSelect?.(label?.labelContent);
	}
	return (
		<div
			onKeyDown={handleKeyDown}
			onClick={handleClick}
			className={`option-wrapper ${isSelected ? "selected-option" : ""}`}
		>
			<input
				className={"input-check-rounded"}
				type="checkbox"
				{...inputProps}
			/>
			<label
				htmlFor={inputProps?.id}
				style={{
					textTransform: label?.isCapitalized ? "capitalize" : undefined,
					pointerEvents: "none",
				}}
			>
				{label?.labelContent}
			</label>
		</div>
	);
}
