interface Props {
    text: string[];
}

const FormCard = ({ text }: Props) => {
    return (
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-main-one to-main-two p-8 items-center justify-center relative overflow-hidden">
            <div className="text-white-800 text-2xl md:text-4xl font-bold text-left z-10">
                {text.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 bg-primary-500 opacity-30 rounded-full w-32 h-32 md:w-64 md:h-64 -mt-16 -mr-16 md:-mt-32 md:-mr-32"></div>
                <div className="absolute bottom-0 left-0 bg-primary-500 opacity-30 rounded-full w-32 h-32 md:w-64 md:h-64 -mb-16 -ml-16 md:-mb-32 md:-ml-32"></div>
            </div>
        </div>
    );
};

export default FormCard;
