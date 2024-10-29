import SectionHarvesters from "@/components/pages/home/SectionHarvesters";
import Main from "../components/layout/Main";
import SectionHero from "@/components/pages/home/SectionHero";
import SectionNoMoreWaste from "@/components/pages/home/SectionNoMoreWaste";
import SectionServices from "@/components/pages/home/SectionServices";
import SectionSystemFeatures from "@/components/pages/home/SectionSystemFeatures";
import SectionGetTheSun from "@/components/pages/home/SectionGetTheSun";

export default function Home() {
	return (
		<Main>
			<SectionHero />

			<SectionNoMoreWaste />

			<SectionServices />

			<SectionSystemFeatures />

			<SectionHarvesters />

			<SectionGetTheSun />
		</Main>
	);
}
