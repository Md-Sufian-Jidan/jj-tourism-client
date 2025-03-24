import { Bounce } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const CommonHeadDes = ({ heading, description }) => {
    const head = heading.split(' ');
    const main = [...head, heading]
    // console.log(head);
    return (
        <div className="text-center max-w-6xl mx-auto my-5">
            <Bounce duration={3000}>
                <h2 className="text-4xl font-bold">
                    <Typewriter cursor={true} cursorBlinking={true} cursorColor="blue" deleteSpeed={50} words={main} />
                </h2>
                <p className="font-semibold">{description}</p>
            </Bounce>
        </div>
    );
};

export default CommonHeadDes;