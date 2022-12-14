import resume from "../resume.pdf";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { postEmail } from "../../redux/actions/nodemailerAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import swal from "sweetalert2";

export default function Contact() {
    const [t] = useTranslation("global");
    const dispatch = useDispatch();

    const {
        handleSubmit,
        register,
        formState,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(postEmail(data));
        swal.fire({
            title: t("contact.swalTitle"),
            text: "",
            icon: "success",
            allowEscapeKey: true,
        });
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                email: "",
                subject: "",
                body: "",
            });
        }
    }, [formState, reset]);

    return (
        <div
            id="contact"
            className="pt-[5%] mt-[10%]  w-full items-center justify-center h-[110vh]"
        >
            <h1 className="text-8xl font-bold text-center text-[#90a0d9]">
                {t("contact.h1")}
            </h1>
            <div className="flex gap-10 mt-20 w-[80%] ml-[10%] items-center h-20  justify-around">
                <a
                    href="https://www.linkedin.com/in/juan-ignacio-maraude-8a0694210/"
                    target="_blank"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="linkedin"
                        className="w-20 h-20 hover:w-24 hover:h-24"
                    />
                </a>
                <a href="https://github.com/NachoMaraude" target="_blank">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="github"
                        className="w-20 h-20 hover:w-24 hover:h-24 "
                    />
                </a>
                <a href="mailto:maraudenacho@gmail.com" target="_blank">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                        alt="github"
                        className="w-24 h-24 hover:w-28 hover:h-28 "
                    />
                </a>
                <a
                    href={resume}
                    download="Juan Ignacio Maraude - Resume"
                    target="_blank"
                    className="text-[#90a0d9] bg-[#23283e] font-bold text-2xl border-4 border-[#475569] hover:text-[#23283e]  hover:bg-[#90a0d9] hover:transition-all rounded-full justify-center text-center pt-[1.4%] w-[30%] h-20 hover:h-24 hover:pt-[2%]"
                >
                    {t("contact.resume")}
                </a>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col h-[60vh] border-2 border-[#90a0d9] mt-20 rounded-lg w-[40%] ml-[30%]  bg-[#475569]">
                    {errors?.email && errors.email.type === "required" ? (
                        <p className=" text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.errorRequired")}
                        </p>
                    ) : errors?.email?.type === "pattern" ? (
                        <p className="text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.errorEmail")}
                        </p>
                    ) : errors?.email?.type === "minLength" ? (
                        <p className="text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.minLengthEmail")}
                        </p>
                    ) : errors?.email?.type === "maxLength" ? (
                        <p className="text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.maxLengthEmail")}
                        </p>
                    ) : (
                        <br />
                    )}
                    <input
                        className="bg-[#475569] border-2 border-[#90a0d9] rounded-xl text-xl text-[#23283e] placeholder:text-[#23283e]  text-start pl-3 w-[60%] ml-[20%] m-4 h-12"
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                            pattern:
                                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            required: true,
                            minLength: 5,
                            maxLength: 50,
                        })}
                    />
                    {errors?.subject && errors.subject.type === "required" ? (
                        <p className="  text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.errorRequired")}
                        </p>
                    ) : errors?.subject?.type === "minLength" ? (
                        <p className=" text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.minLengthSubject")}
                        </p>
                    ) : errors?.subject?.type === "maxLength" ? (
                        <p className=" text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.maxLengthSubject")}
                        </p>
                    ) : (
                        <br />
                    )}
                    <input
                        className="bg-[#475569] border-2 border-[#90a0d9] rounded-xl text-xl text-[#23283e] placeholder:text-[#23283e] text-start pl-3 w-[60%] ml-[20%] h-12 m-4"
                        type="text"
                        placeholder={t("contact.subject")}
                        {...register("subject", {
                            required: true,
                            minLength: 2,
                            maxLength: 25,
                        })}
                    />
                    {errors?.body && errors.body.type === "required" ? (
                        <p className=" text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.errorRequired")}
                        </p>
                    ) : errors?.body?.type === "minLength" ? (
                        <p className="text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.minLengthBody")}
                        </p>
                    ) : errors?.body?.type === "maxLength" ? (
                        <p className="text-start text-sm text-[#90a0d9] w-[60%] ml-[20%] pl-4 h-8 pt-4">
                            {t("contact.minLengthBody")}
                        </p>
                    ) : (
                        <br />
                    )}

                    <textarea
                        className="bg-[#475569] border-2 border-[#90a0d9] rounded-xl text-start pl-3 text-2xl text-[#23283e] placeholder:text-[#23283e] w-[60%] ml-[20%] m-4 h-48 resize-none"
                        type="text"
                        placeholder={t("contact.body")}
                        {...register("body", {
                            required: true,
                            minLength: 10,
                            maxLength: 300,
                        })}
                    />
                    <button className="h-8 bg-[#475569] border-2 border-[#90a0d9] rounded-full hover:bg-[#90a0d9] text-center text-xl text-[#23283e]  w-[10%] ml-[70%] m-4">
                        {t("contact.send")}
                    </button>
                </div>
            </form>
        </div>
    );
}
