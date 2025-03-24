
const CommonHeadDes = ({ heading, description }) => {
    return (
        <div className="text-center max-w-6xl mx-auto my-5">
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="font-semibold">{description}</p>
        </div>
    );
};

export default CommonHeadDes;