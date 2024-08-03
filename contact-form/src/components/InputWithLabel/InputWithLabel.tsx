import type { ChangeEvent, InputHTMLAttributes } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.tsx";

interface InputWithLabelProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	label?: {
		labelContent?: string;
		isCapitalized?: boolean;
		isRequired?: boolean;
	};
	inputError?: {
		showError?: boolean;
		message?: string;
	};
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	layout?: "row" | "column";
}

export function InputWithLabel({
	value,
	onChange,
	inputProps,
	label,
	layout,
	inputError,
}: InputWithLabelProps) {
	const showError = inputError?.showError;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: layout ?? "column",
			}}
		>
			{label && (
				<label
					className={`${label.isRequired ? "label--required" : "label"}`}
					htmlFor={inputProps?.id}
					style={{
						textTransform: label.isCapitalized ? "capitalize" : undefined,
					}}
				>
					{label.labelContent}
				</label>
			)}

			<input
				className={`input ${showError ? "input--error" : ""}`}
				value={value}
				onChange={onChange}
				{...inputProps}
			/>
			{showError && (
				<ErrorMessage
					id={inputProps?.["aria-describedby"]}
					content={inputError?.message ?? "This field is required"}
				/>
			)}
		</div>
	);
}
