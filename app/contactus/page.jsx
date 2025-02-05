import ContactForm from "../components/form";

export default function ContactUs(){
    return(
        <div className="p-2 flex justify-center space-y-10 items-center flex-col">
            <h1 className="text-3xl font-medium ">Contact Us</h1>
            <ContactForm/>
        </div>
    )
}