import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
	const { i18n } = useTranslation();

	const languages = {
		en: "EN",
		es: "ES",
	};

	return (
		<select
            className="rounded bg-main border-2 border-first text-first"
			value={i18n.language}
			onChange={(e) => i18n.changeLanguage(e.target.value)}
		>
			{Object.entries(languages).map(([code, name]) => (
				<option key={code} value={code}>
					{name}
				</option>
			))}
		</select>
	);
}

export default LanguageSwitcher;
