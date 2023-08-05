import { PropertiesConsumer } from "@/contexts/propertiesContext";
import { appName, creatorNick } from "@/utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png"
import { Heart } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { FormErrors, InputType } from "@/utils/enums";

export const Login = () => {
    const navigate = useNavigate();
    const [channel, setChannel] = useState("")
    const {lifes, setLifes, maxNumber, setMaxNumber} = PropertiesConsumer()
    const [errors, setErrors] = useState<FormErrors>({})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(channel.toLowerCase())
    }

    const changeNumber = (setNumber: React.Dispatch<React.SetStateAction<number>>, text: string) => {
        setNumber(Number(text))
    }

    return (
        <section className="flex flex-col justify-between items-center w-full h-full">
            <header className="flex justify-center items-center self-start">
                <img src={logo} className="w-12 object-cover"/>
                <h1 className="text-4xl">{appName}</h1>
            </header>
            <form className="flex flex-col gap-2 w-56" onSubmit={ e => handleSubmit(e)}>
                <Input title="Canal de twitch" name="channel" text={channel} setText={setChannel}  error={errors.channel}/>
                <Input type={InputType.number} title="Number of lifes to users" name="text" text={lifes} setText={(text) => changeNumber(setLifes, text)}  error={errors.lifes}/>
                <Input type={InputType.number} title="Max range number" name="text" text={maxNumber} setText={(text) => changeNumber(setMaxNumber, text)}  error={errors.maxNumber}/>
                <button type="submit">Comenzar</button>
            </form>
            <footer>
                <p>Created by {creatorNick} with <Heart className="inline w-4"/> for <a href="https://itch.io/jam/numerica-twitch-jam">Numerica Twitch Jam</a></p>
            </footer>
        </section>
    )
}