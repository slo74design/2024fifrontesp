// type: 1) bkg white - 2) bkg light gray - 3) bkg pattern triangle white - 4) bkg pattern red - 5) bkg gradient Primary>Light - 6) bkg gradient Light>Primary
// isSquared: 1) true - 2) false

const FISectionBkgd = ({ type, isSquared, children }) => {
    const isType = (type) => {
        switch (type) {
            case 1:
                return "bg-white";
                break;
            case 2:
                return "bg-slate-50";
                break;
            case 3:
                return "bg-redpattern";
                break;
            case 4:
                return "bg-trianglepattern bg-cover";
                break;
            case 5:
                return "bg-gradient-to-tr from-black from-2% via-fiLight-500 to-fiLight-300 to-100% bg-cover";
                break;
        }
    };
    return (
        <div className={`${isType(type)} min-w-full w-screen p-16`}>
            {children}
        </div>
    );
};

export default FISectionBkgd;
