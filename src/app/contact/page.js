import images from "@/app/lib/images";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="md:w-[85vw]  md:mr-[15vw] p-5 md:mt-0 mt-[15vh]">

            <div className="flex md:flex-col flex-row justify-center items-center h-[90vh]">
                <div className="flex gap-10 flex-col md:flex-row">
                    <div className="">
                        <p className="text-6xl font-amatic">נופר שפר</p>
                        <p>צלמת אירועי חברה, פרפורמס ומשפחה</p>
                        <hr className="mb-4" />
                        <p>נייד: 052-1234567</p>
                        <p>מייל: d@ylm.co.il </p>
                    </div>

                    <Image src={images.people[0][0].images[0].src} alt="נופר שפר - צלמת מקצועית" className="w-[50vh]" />
                </div>

            </div>


        </div>
    );
}
export default Contact;
