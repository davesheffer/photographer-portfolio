import images from "@/app/lib/images";
import Image from "next/image";
const Contanct = () => {
    return (
        <div className="md:w-[85vw]  md:mr-[15vw] p-5 md:mt-0 mt-[15vh]">

            <div className="flex md:flex-col flex-row justify-center items-center h-[90vh]">
                <div className="flex gap-10 flex-col md:flex-row">
                    <div className="">
                        <h1 className="font-amatic text-6xl mb-10">צרו קשר עכשיו!</h1>
                        <p className="text-2xl">נופר שפר</p>
                        <p>צלמת אירועי חברה, פרפורמס ומשפחה</p>
                        <hr className="mb-4" />
                        <p>נייד: 052-1234567</p>
                        <p>מייל: d@ylm.co.il </p>
                    </div>

                    <Image src={images.cars[5].src} alt="" className="w-[50vh]" />
                </div>

            </div>


        </div>
    );
}
export default Contanct;
