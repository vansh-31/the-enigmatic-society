import React, { useEffect } from "react";

const TypeformEmbed = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//embed.typeform.com/next/embed.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div
			data-tf-widget="tEQPxFfL"
			data-tf-opacity="100"
			data-tf-iframe-props="title=Event Registration Form"
			data-tf-transitive-search-params
			data-tf-medium="snippet"
			style={{
				width: "100%",
				height: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
			}}
		></div>
	);
};

export default TypeformEmbed;
