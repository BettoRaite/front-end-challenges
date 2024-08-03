type ErrorMessageProps = {
	content: string;
	id?: string;
};

export function ErrorMessage({ id, content }: ErrorMessageProps) {
	return (
		<span id={id} aria-live="assertive" className="error-message">
			{content}
		</span>
	);
}
