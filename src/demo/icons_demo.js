import KUIIcon from "../components/kui-icon";

const template = document.createElement("template");
template.innerHTML = `
	<h1>Icons Demo</h1>
	<p>
		this is a kui-icon demo
	</p>
    <div>
        <h1>Basic Usage<h1>
        <kui-icon kui-icon="fas fa-camera" kui-size="${KUIIcon.Size.X3}" kui-label="Take a picture"></kui-icon>
        <kui-icon kui-icon="fab fa-android" kui-size="fa-3x" kui-label="I use Android"></kui-icon>
        <kui-icon kui-icon="fab fa-apple" kui-size="fa-3x" kui-label="And I prefare Apple products"></kui-icon>
        <h1>Sizes</h1>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-xs"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-sm"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-sm"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size=""></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-lg"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-2x"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-3x"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-5x"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-7x"></kui-icon>
        <kui-icon kui-icon="fas fa-camera" kui-size="fa-10x"></kui-icon>
        <h1>Pulled<h1>
        <div>
            <kui-icon
                kui-icon="fas fa-quote-left"
                kui-size="fa-2x"
                kui-pulled="fa-pull-left"
            ></kui-icon>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae neque at
            nulla interdum gravida. Maecenas tempor viverra varius. Aenean vitae
            facilisis odio. Pellentesque faucibus vitae neque sit amet accumsan.
            Phasellus mattis mi nec ligula scelerisque faucibus et id purus. Vestibulum
            convallis, dolor ut malesuada dignissim.
        </div>
        <h1>Animate</h1>
        <div style="font-size: 3rem;">
            <kui-icon kui-icon="fas fa-spinner" kui-animate="fa-spin"></kui-icon>
            <kui-icon kui-icon="fas fa-circle-notch" kui-animate="fa-spin"></kui-icon>
            <kui-icon kui-icon="fas fa-sync" kui-animate="fa-spin"></kui-icon>
            <kui-icon kui-icon="fas fa-cog" kui-animate="fa-spin"></kui-icon>
            <kui-icon kui-icon="fas fa-spinner" kui-animate="fa-pulse"></kui-icon>
            <kui-icon kui-icon="fas fa-stroopwafel" kui-animate="fa-spin"></kui-icon>
	    </div>
        <h1>Rotate</h1>
        <div style="font-size: 3rem;">
            <kui-icon kui-icon="fas fa-snowboarding"></kui-icon>
            <kui-icon kui-icon="fas fa-snowboarding" kui-rotate="fa-rotate-90"></kui-icon>
            <kui-icon kui-icon="fas fa-snowboarding" kui-rotate="fa-rotate-180"></kui-icon>
            <kui-icon kui-icon="fas fa-snowboarding" kui-rotate="fa-rotate-270"></kui-icon>
            <kui-icon kui-icon="fas fa-snowboarding" kui-flip="fa-flip-horizontal"></kui-icon>
            <kui-icon kui-icon="fas fa-snowboarding" kui-flip="fa-flip-vertical"></kui-icon>
            <kui-icon kui-icon="fas fa-snowboarding" kui-flip="fa-flip-both"></kui-icon>
        </div>
        <h1>Fixed width</h1>
        <div style="font-size: 2rem;">
            <div><kui-icon kui-icon="fas fa-skating" kui-fixed-width style="background:DodgerBlue"></kui-icon> Skating</div>
            <div><kui-icon kui-icon="fas fa-skiing" kui-fixed-width style="background:SkyBlue"></kui-icon> Skiing</div>
            <div><kui-icon kui-icon="fas fa-skiing-nordic" kui-fixed-width style="background:DodgerBlue"></kui-icon> Nordic Skiing</div>
            <div><kui-icon kui-icon="fas fa-snowboarding" kui-fixed-width style="background:SkyBlue"></kui-icon> Snowboarding</div>
            <div><kui-icon kui-icon="fas fa-snowplow" kui-fixed-width style="background:DodgerBlue"></kui-icon> Snowplow</div>
        </div>
        <h1>Bordered</h1>
        <kui-icon kui-icon="fas fa-arrow-left" kui-size="fa-2x" kui-bordered></kui-icon>
	    <kui-icon kui-icon="fas fa-arrow-right" kui-size="fa-2x" kui-bordered></kui-icon>
	</div>
`;
export default function buildP2(container) {
	container.appendChild(template.content.cloneNode(true));
}
