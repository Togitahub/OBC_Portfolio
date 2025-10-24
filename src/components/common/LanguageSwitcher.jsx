import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const currentLang = i18n.language;

	const containerClass =
		"flex justify-center items-center text-first font-bold border-2 px-2 rounded cursor-pointer transition-colors duration-300 hover:bg-first hover:text-main";

	return (
		<div className="flex">
			{currentLang === "es-419" ? (
				<div onClick={() => changeLanguage("en")} className={containerClass}>
					ES
				</div>
			) : (
				<div
					onClick={() => changeLanguage("es-419")}
					className={containerClass}
				>
					EN
				</div>
			)}
		</div>
	);
}

export default LanguageSwitcher;
