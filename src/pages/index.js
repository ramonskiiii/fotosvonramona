import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Em, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0 700px 0"
			sm-padding="40px 0 40px 0"
			align-items="center"
			background="url(https://uploads.quarkly.io/691451a290a2bb0024baca77/images/DSCF5401%202.JPG?v=2025-11-12T09:42:38.605Z) center/cover no-repeat"
			width="100% border-box50% content-box"
			position="relative"
			height="100vh"
		>
			<Override
				slot="SectionContent"
				sm-align-items="center"
				display="flex"
				align-self="auto"
				position="absolut"
				align-items="center"
				justify-content="flex-start"
				flex-direction="row"
			/>
			<Box
				max-width="600px"
				padding="30px 80px 80px 30px"
				color="--dark"
				display="flex"
				flex-direction="row"
				flex-wrap="wrap"
				align-items="center"
				justify-content="flex-start"
				align-content="flex-start"
				flex="0 1 auto"
				position="absolute"
				bottom="auto"
				left="62px"
				right="auto"
				top="101px"
				width="600px"
				height="583px"
			>
				<Text
					as="h5"
					font="1em --fontFamily-mono"
					font-size="32px"
					margin="0 0 20px 0"
					color="#c0d0ab"
					letter-spacing="<length>"
					white-space="pre-line"
					width="500px"
					display="block"
				>
					<Span
						font-weight="normal"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								tenderness
							</Span>
						</Span>
						<br />
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							fotos von ramona
						</Span>
					</Span>
				</Text>
				<Text font="1em --fontFamily-mono" color="#c0d0ab" line-height="1.6" letter-spacing="0.05em">
					<Em>
						mit 16 habe ich eine alte nikon kamera bei meinen eltern im keller gefunden. seit dem hat mich fotografie begleitet und ist zu einer form geworden, mich auszudrücken. so genieße ich im fotografieren den moment der stille und des genauen beobachtens
						<br />
						<br />
						im zentrum meiner motive standen lange zeit menschen, die mir nahe waren und in den bildern hat sich meine erfahrung der beziehung gespiegelt
						<br />
						die leben haben sich gewandelt, hochzeiten und kinder wurden bedeutsam und ich begleitete mit meinen bildern diese lebensabschnitte
					</Em>
				</Text>
			</Box>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-3" height="1500px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Image
				src="https://uploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11:17:05.542Z"
				display="block"
				position="absolute"
				bottom="587px"
				height="341.46875px"
				top="auto"
				left="-14px"
				right="auto"
				width="601.578125px"
				quarkly-title="nola2"
				srcSet="https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6501%29.jpeg?v=2025-11-12T11%3A17%3A05.542Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Image
				src="https://uploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11:26:49.561Z"
				display="block"
				position="absolute"
				bottom="252px"
				height="518px"
				left="618px"
				right="4px"
				top="1570px"
				width="658px"
				quarkly-title="lea katze"
				srcSet="https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/IMG_3598.JPG?v=2025-11-12T11%3A26%3A49.561Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Image
				src="https://uploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10:58:07.116Z"
				display="block"
				position="absolute"
				bottom="914px"
				height="557px"
				left="30px"
				right="514px"
				top="869px"
				width="736px"
				quarkly-title="nola1"
				srcSet="https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/691451a290a2bb0024baca77/images/Gro%C3%9F%20%28DSCF6502%29.jpeg?v=2025-11-12T10%3A58%3A07.116Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"691451a290a2bb0024baca75"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});