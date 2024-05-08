'use client'

import React, { useReducer, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
    })
     
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            // Sign up with appwrite and create a plaid link tokey

            if (type === 'sign-up') {
                const newUser = await signUp(data);
                setUser(newUser);
            }

            if (type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password,
                });

                if(response) router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }

        setIsLoading(false);
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className='flex cursor-pointer items-center gap-1'>
                    <Image 
                        alt="logo" 
                        src='/icons/logo.svg'
                        width={34}
                        height={34}
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                <div className="flec flex-col gap-1 md:gap-3">
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        {user
                            ? 'Link Account'
                            : type === 'sign-in'
                                ? "Sign In"
                                : 'Sign Up'
                        }
                    </h1> 

                    <p className="text-16 font-cormal text-gray-600">
                        {user
                            ? 'Link your account'
                            : 'Please enter your details'
                        }
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/* PLAID LINK COMP */}
                </div>
            ):(
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {type === "sign-up" && (
                                    <>

                                        <div className="flex gap-4">
                                            <CustomInput 
                                                control={form.control}
                                                name="firstName"
                                                label="First Name"
                                                placeholder='Enter your first name'
                                            />

                                            <CustomInput 
                                                control={form.control}
                                                name="lastName"
                                                label="Last Name"
                                                placeholder='Enter your last name'
                                            />
                                        </div>

                                        <CustomInput 
                                            control={form.control}
                                            name="address1"
                                            label="Address"
                                            placeholder='Enter your address'
                                        />

                                        <CustomInput 
                                            control={form.control}
                                            name="city"
                                            label="City"
                                            placeholder='Ex: Phoenix'
                                        />

                                        <div className='flex gap-4'>
                                            <CustomInput 
                                                control={form.control}
                                                name="state"
                                                label="State"
                                                placeholder='Enter your city'
                                            />

                                            <CustomInput 
                                                control={form.control}
                                                name="postalCode"
                                                label="Postal Code"
                                                placeholder='Example: 85040'
                                            />
                                        </div>

                                        <div className='flex gap-4'>
                                            <CustomInput 
                                                control={form.control}
                                                name="dateOfBirth"
                                                label="Date Of Birth"
                                                placeholder='YYYY-MM-DD'
                                            />

                                            <CustomInput 
                                                control={form.control}
                                                name="ssn"
                                                label="SSN"
                                                placeholder='Example: 1234'
                                            />
                                        </div>
                                    </>
                                )}

                                <CustomInput 
                                    control={form.control}
                                    name="email"
                                    label="Email"
                                    placeholder='Enter your email'
                                    key='9'
                                />

                                <CustomInput 
                                    control={form.control}
                                    name="password"
                                    label="Password"
                                    placeholder='Enter your password'
                                    key='10'
                                />

                                <div className="flex flex-col gap-4">
                                    <Button className="form-btn w-full" type="submit" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 size={20} className='animate-spin'/>
                                                &nbsp;
                                                Loading...
                                            </>
                                        ): type === 'sign-in' ?
                                            'Sign In' : 'Sign Up'
                                        }
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <footer className="flex justify-center gap-1">
                            <p className='text-14 font-normal text-gray-600'>{type === 'sign-in'
                                ? "Don't have an account?"
                                : "Already have an account?"}
                            </p>
                            <Link 
                                className='form-link'
                                href={type === 'sign-in'
                                ? '/sign-up'
                                : '/sign-in'
                            }>
                                {type === 'sing-in'
                                ? 'Sign In'
                                : 'Sign Up'}
                            </Link>
                        </footer>
                    </>
                )
            }
        </section>
  )
}

export default AuthForm