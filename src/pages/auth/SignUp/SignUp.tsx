import { useState,type ChangeEvent, type FormEvent } from "react";
import {Form, Button, FormGroup, FormLabel, FormControl} from "react-bootstrap"
import ApiClient from "../../utlis/ApiClient";
import {NavLink} from "react-router-dom";

interface SignUpForm {
    name: string,
    email: string,
    password: string,
}

function SignUp() {
    const [form, setform] = useState<SignUpForm>({
        name: "",
        email: "",
        password: ""
    })

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target

        setform({
            ...form,
            [name]: value
        })
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try{
            const response = await ApiClient.post("/auth/signup", form)

            console.log("Signup response:", response.data)
            alert("Signup berhasil, silahkan login !")
        } catch (error){
            console.log(error)
            alert("Signup Gagal !")
        }
    }

    return (
        <div className="container mx-auto">
            <h1>SIGN UP PAGE</h1>

            <Form onSubmit={onSubmit}>
                <FormGroup className="mb-3" controlId="formname">
                    <FormLabel>Nama</FormLabel>
                    <FormControl
                        onChange={onHandleChange}
                        value={form.name}
                        name="name"
                        type="text"
                        placeholder="Nama Lengkap">
                    </FormControl>

                </FormGroup>

                <FormGroup className="mb-3" controlId="formemail">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        onChange={onHandleChange}
                        value={form.email}
                        name="email"
                        type="email"
                        placeholder="Email">
                    </FormControl>

                </FormGroup>

                <FormGroup className="mb-3" controlId="formpassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        onChange={onHandleChange}
                        value={form.password}
                        name="password"
                        type="password"
                        placeholder="Password">
                    </FormControl>

                </FormGroup>

                <Button type="submit" variant="primary">Sign Up</Button>

                <NavLink to="/signin">Sudah punya akun? Sign in </NavLink>

            </Form>

        </div>
    )
}

export default SignUp