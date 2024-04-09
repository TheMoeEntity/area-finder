import axios from "axios";
import { FormEvent } from "react";

export class Helpers {

    static validateSignUpForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus: any,
        enqueueSnackbar: any,
        push: any,
        setError: (err: boolean) => void
    ) => {
        e.preventDefault();
        setError(false)
        const data = {
            firstName: (
                e.target[0 as unknown as keyof typeof e.target] as unknown as HTMLInputElement
            ).value,
            lastName: (
                e.target[1 as unknown as keyof typeof e.target] as unknown as HTMLInputElement
            ).value,
            userName: (
                e.target[
                2 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            email: (
                e.target[
                3 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            password: (
                e.target[
                4 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            CPassword: (
                e.target[
                5 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
        };

        if (data.firstName.trim() === "" || data.lastName.trim() === "") {
            enqueueSnackbar("Name cannot be empty", {
                variant: "error",
            });
            return;
        } else if (data.userName === "") {
            enqueueSnackbar("Specify a username please", {
                variant: "error",
            });
            return;
        } else if (data.password !== data.CPassword) {
            setError(true)
            enqueueSnackbar("Password does not match", {
                variant: "error",
            });
            return;
        }

        setStatus("Sending credentials....");
        try {
            const url = "/api/signup";
            const res = await axios.post(url, data);

            res.status === 200 || res.status === 201 &&
                enqueueSnackbar("User profile created successfully", {
                    variant: "success",
                });

            setStatus("User created successfully");
            setTimeout(() => {
                const resetForm = e.target as HTMLFormElement;
                resetForm.reset();
                push('/');
            }, 3000);
        } catch (error) {
            setStatus("...Error creating user");
            enqueueSnackbar(
                "There was an error creating user, try again: " + error,
                {
                    variant: "error",
                }
            );

        }
        setStatus("Sign up");
    };

    static validateLoginForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus: any,
        enqueueSnackbar: any,
        push: any
    ) => {
        e.preventDefault();
        const data = {
            email: (
                e.target[
                0 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            password: (
                e.target[
                1 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
        };

        if (data.email.trim() === "") {
            enqueueSnackbar("Email cannot be empty", {
                variant: "error",
            });
            return;
        } else if (data.password === '') {
            enqueueSnackbar("Oga enter your password", {
                variant: "error",
            });
            return;
        }

        setStatus("Sending credentials....");
        try {
            const url = "/api/login";
            const res = await axios.post(url, data);

            res.status === 200 || res.status === 201 &&
                enqueueSnackbar("Login success", {
                    variant: "success",
                });


            setStatus("Login processed.");
            setTimeout(() => {
                const resetForm = e.target as HTMLFormElement;
                location.href = ('/?newlogin=true')
                // push('/?newlogin=true')
                resetForm.reset();
            }, 3000);
        } catch (error) {
            setStatus("...Error Loggin in user");
            enqueueSnackbar(
                "There was an error logging in user, try again: " + error,
                {
                    variant: "error",
                }
            );

        }
        setStatus("Log in");
    };

    static validateDashboardForm = async (
        e: FormEvent<HTMLFormElement>,
        setStatus: any,
        enqueueSnackbar: any,
    ) => {
        e.preventDefault();
        const data = {
            firstName: (
                e.target[0 as unknown as keyof typeof e.target] as unknown as HTMLInputElement
            ).value,
            lastName: (
                e.target[1 as unknown as keyof typeof e.target] as unknown as HTMLInputElement
            ).value,
            userName: (
                e.target[
                2 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            phone: (
                e.target[
                4 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            location: (
                e.target[
                5 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
        };

        if (data.userName.trim() === "") {
            enqueueSnackbar("Username cannot be empty", {
                variant: "error",
            });
            return;
        } else if (data.phone === '') {
            enqueueSnackbar("Phone cannot be empty", {
                variant: "error",
            });
            return;
        }

        setStatus("Sending credentials....");
        try {
            const url = "/api/update";
            const res = await axios.post(url, data);

            res.status === 200 || res.status === 201 &&
                enqueueSnackbar("credential updated successfully", {
                    variant: "success",
                });

        } catch (error) {
            setStatus("...Error updating credentials");
            enqueueSnackbar(
                "There was an error updating details, try again: " + error,
                {
                    variant: "error",
                }
            );

        }
        setStatus("save changes");
    };
}
