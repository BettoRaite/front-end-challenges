import successIcon from "/images/icon-success-check.svg";

type ToastNotificationProps = {
	content: string;
	headerContent: string;
	isShown: boolean;
};

export function ToastNotification({
	content,
	headerContent,
	isShown,
}: ToastNotificationProps) {
	return (
		<div
			className={`toast-notification-wrapper ${!isShown && "toast-notification-wrapper--hidden"}`}
		>
			<section className="toast-notification">
				<div className="toast-notification__header-layout">
					<img
						className="toast-notification__icon"
						src={successIcon}
						alt="successful submit"
					/>
					<h3 className="toast-notification__header">{headerContent}</h3>
				</div>
				<p className="toast-notification__content">{content}</p>
			</section>
		</div>
	);
}
