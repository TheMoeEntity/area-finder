import axios from "axios";
import { ChangeEvent, FormEvent } from "react";

export class Helpers {
    static formatBytes(bytes: number, decimals = 2) {
        if (!+bytes) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }
    static toBase64 = (file: File) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
    static handleFileSelected = async (
        e: ChangeEvent<HTMLInputElement>,
        enqueueSnackbar: any,
        setSize: any,
        setUserFile: any,
        setCurrFile: any,
        size: string
    ) => {
        const files = (e.target as HTMLInputElement).files;

        if (!files) return;
        const fileType = files[0].type;
        console.log(fileType);

        const acceptedFileTypes: string[] = [
            "application/pdf",
            "image/png",
            "image/jpeg",
            "image/png",
        ];
        console.log(files[0].webkitRelativePath)
        if (!acceptedFileTypes.includes(fileType)) {
            enqueueSnackbar(
                "File type not supported. Kindly upload a valid pdf, jpeg or jpg",
                {
                    variant: "error",
                }
            );
            return;
        }

        const sizes = parseFloat(String(files[0].size / (1024 * 1024))).toFixed(2);
        setSize(this.formatBytes(files[0].size));
       
        setCurrFile(files[0].name + `, ${size}`);
        if (Number(sizes) > 2) {
            enqueueSnackbar("Max file size is 2MB", {
                variant: "error",
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            const image = new Image();
            // image.src = (e.target as HTMLInputElement).files[0]
            image.onload = () => {
                const {
                    height,
                    width
                } = image;
                if (height > 4 || width > 800) {
                    alert("Height must not exceed 400px. Width must not exceed 800px");
                    return false;
                }
                alert("Uploaded image has valid Height and Width.");
                return true;
            };
        };

        setUserFile(files[0]);
       

    };
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
                location.href = '/'
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
