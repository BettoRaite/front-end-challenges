import { validateEmail } from "../../utils/validation.ts";
import {
	useState,
	type ChangeEvent,
	type FormEvent,
	type KeyboardEvent,
} from "react";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel.tsx";
import styles from "./contactForm.module.css";
import { SelectInput } from "../SelectInput/SelectInput.tsx";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.tsx";
import { ToastNotification } from "../ToastNotification/ToastNotification.tsx";

type InputFields =
	| "firstName"
	| "lastName"
	| "email"
	| "message"
	| "option"
	| "consent";

const initialFormData: Record<InputFields, string> = {
	firstName: "",
	lastName: "",
	email: "",
	message: "",
	option: "",
	consent: "",
};

const MAX_EMAIL_INPUT_LENGTH = 254;
const MAX_TEXT_INPUT_LENGTH = 50;
const MAX_MESSAGE_INPUT_LENGTH = 500;

export function ContactForm() {
	const [formData, setFormData] = useState(initialFormData);
	const [errorFieldNames, setErrorFieldNames] = useState<InputFields[]>([]);
	const [showToastNotification, setShowToastNotification] = useState(false);

	function removeFromErrorFieldNames(name: InputFields) {
		if (errorFieldNames.includes(name)) {
			setErrorFieldNames(
				errorFieldNames.filter((errorFieldName) => errorFieldName !== name),
			);
		}
	}

	function handleOptionSelect(labelContent?: string) {
		if (!labelContent) {
			return;
		}
		setFormData({
			...formData,
			option: labelContent,
		});
		removeFromErrorFieldNames("option");
	}

	function handleChange(
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
	) {
		const key = e.target.name as unknown as InputFields;
		const value = e.target.value;
		setFormData({
			...formData,
			[key]: value,
		});
		removeFromErrorFieldNames(key);
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const nextErrorFieldNames: InputFields[] = [];
		const fieldNames = Object.keys(formData) as unknown as InputFields[];

		for (const name of fieldNames) {
			if (name === "email") {
				if (!validateEmail(formData[name])) {
					nextErrorFieldNames.push(name);
				}
				continue;
			}
			if (!formData[name]) {
				nextErrorFieldNames.push(name);
			}
		}

		if (nextErrorFieldNames.length > 0) {
			setErrorFieldNames(nextErrorFieldNames);
		} else {
			const nextFormData: Record<string, string> = {};

			for (const name of fieldNames) {
				nextFormData[name] = "";
			}

			setFormData(nextFormData);
			setShowToastNotification(true);

			setTimeout(() => {
				setShowToastNotification(false);
			}, 3000);
		}
	}

	return (
		<>
			<ToastNotification
				content="Thanks for completing the form. We'll be in touch soon!"
				headerContent="Message Sent!"
				isShown={showToastNotification}
			/>
			<form className={styles.contactForm} onSubmit={handleSubmit}>
				<h2 className={styles.title}>Contact Us</h2>

				<div className={styles.layoutFullname}>
					<InputWithLabel
						inputError={{
							showError: errorFieldNames.includes("firstName"),
						}}
						value={formData.firstName}
						onChange={handleChange}
						inputProps={{
							name: "firstName",
							id: "firstname",
							maxLength: MAX_TEXT_INPUT_LENGTH,
							autoComplete: "name",
							"aria-describedby": "first-name-error",
						}}
						label={{
							labelContent: "first name",
							isCapitalized: true,
							isRequired: true,
						}}
					/>

					<InputWithLabel
						inputError={{
							showError: errorFieldNames.includes("lastName"),
						}}
						value={formData.lastName}
						onChange={handleChange}
						inputProps={{
							name: "lastName",
							id: "lastname",
							maxLength: MAX_TEXT_INPUT_LENGTH,
							autoComplete: "family-name",
							"aria-describedby": "last-name-error",
						}}
						label={{
							labelContent: "last name",
							isCapitalized: true,
							isRequired: true,
						}}
					/>
				</div>

				<div className={styles.layout}>
					<InputWithLabel
						value={formData.email}
						onChange={handleChange}
						inputError={{
							showError: errorFieldNames.includes("email"),
							message: "Please enter a valid email address",
						}}
						inputProps={{
							name: "email",
							id: "email",
							maxLength: MAX_EMAIL_INPUT_LENGTH,
							type: "text",
							autoComplete: "email",
							"aria-describedby": "email-error",
						}}
						label={{
							labelContent: "email address",
							isCapitalized: true,
							isRequired: true,
						}}
					/>
				</div>

				<div className={styles.layout}>
					<label className={"label--required"}>query type</label>
					<div className={styles.optionsLayout}>
						<SelectInput
							currOptionContent={formData.option}
							onSelect={handleOptionSelect}
							inputProps={{
								id: "option-general-enquiry",
								"aria-describedby": "option-erro",
							}}
							label={{
								isCapitalized: true,
								labelContent: "general enquiry",
							}}
						/>
						<SelectInput
							currOptionContent={formData.option}
							onSelect={handleOptionSelect}
							inputProps={{
								id: "option-support-request",
								"aria-describedby": "option-error",
							}}
							label={{
								isCapitalized: true,
								labelContent: "support request",
							}}
						/>
					</div>
					{errorFieldNames.includes("option") && (
						<ErrorMessage
							content="Please select a query type"
							id="option-error"
						/>
					)}
				</div>

				<div className={styles.layout}>
					<label htmlFor="message" className={"label--required"}>
						message
					</label>
					<textarea
						className={`input message-input ${errorFieldNames.includes("message") && "input--error"}`}
						name="message"
						id="message"
						maxLength={MAX_MESSAGE_INPUT_LENGTH}
						value={formData.message}
						onChange={handleChange}
						aria-describedby="message-error"
					/>
					{errorFieldNames.includes("message") && (
						<ErrorMessage id="message-error" content="This field is required" />
					)}
				</div>

				<div className="consent-layout">
					<input
						className="input-check"
						value={formData.consent ? "" : "true"}
						type="checkbox"
						id="consent"
						name="consent"
						checked={Boolean(formData.consent)}
						onChange={handleChange}
						onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
							const key = e.code.toLowerCase();
							switch (key) {
								case "enter":
								case "space":
									e.preventDefault();
									setFormData({
										...formData,
										consent: e.currentTarget.value,
									});
							}
						}}
						aria-describedby="consent-error"
					/>
					<label className={"label--required"} htmlFor="consent">
						I consent to being contacted by the team
					</label>
				</div>
				{errorFieldNames.includes("consent") && (
					<ErrorMessage
						id="consent-error"
						content="To submit this form, please consent to being contacted"
					/>
				)}

				<input className={"button-submit"} type="submit" value={"submit"} />
			</form>
		</>
	);
}
