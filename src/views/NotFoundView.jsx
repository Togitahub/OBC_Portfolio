import Button from "../components/common/Button";

const NotFoundView = () => {
	return (
		<div className="text-first relative z-10 flex flex-col justify-center items-center gap-4 mt-10">
			<h1 className="text-6xl md:text-7xl font-bold">404</h1>
			<p className="text-2xl md:text-3xl font-semibold">Pagina no econtrada</p>
			<Button type={"button"} variation={"link"} link={"/"} text={"Inicio"} />
		</div>
	);
};

export default NotFoundView;
