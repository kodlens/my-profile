import Desktop from "../../../icons/Dekstop";
import Mobile from "../../../icons/Mobile";
import Web from "../../../icons/Web";

export default function Services() {
  return (
    <div className="mt-20">
        <div className="flex flex-col justify-center items-center mb-16">
            <div className="text-3xl font-semibold text-orange-primary mb-4">
                SERVICES I OFFERED
            </div>
            <div className="border-2 border-orange-primary w-20"></div>
        </div>


        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6">
            
            <div className=" border-2 border-orange-primary 
                flex flex-col h-[200px] w-[200px] 
                justify-center items-center
                hover:border-6 ease-in-out duration-150">
                <div className="mb-2">
                    <Web height={'100px'} width={"100px"} fill={"#FFA688"} />
                </div>
                <div className="font-bold text-orange-primary">
                    WEB DEVELOPMENT
                </div>

            </div>

            <div className=" border-2 border-orange-primary 
                flex flex-col h-[200px] w-[200px] 
                justify-center items-center
                hover:border-6 ease-in-out duration-150">
                <div className="mb-4">
                    <Desktop height={'80px'} width={"80px"} fill={"#FFA688"} />
                </div>
                <div className="font-bold text-orange-primary text-center">
                    DESKTOP APP DEVELOPEMENT
                </div>
            </div>

            <div className=" border-2 border-orange-primary 
                flex flex-col h-[200px] w-[200px] 
                justify-center items-center
                hover:border-6 ease-in-out duration-150">
                <div className="mb-2">
                    <Mobile height={'100px'} width={"100px"} fill={"#FFA688"} />
                </div>
                <div className="font-bold text-orange-primary text-center">
                    MOBILE APP DEVELOPEMENT
                </div>

            </div>
        </div>
    </div>
  )
}
