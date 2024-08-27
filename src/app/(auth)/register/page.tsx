'use client'

// react
import React from 'react'

// fonts
import { silkscreen } from '@/fonts/fonts'

// components
import AuthForm from '@/components/form/AuthForm'

// actions

// utils
import swal from "sweetalert2";
import { AxiosResponse } from 'axios'
import { authApiService } from '@/api/auth/auth'

function RegisterPage() {

    const onSubmitHandler = async (value: any) => {
        try {
            const response: AxiosResponse = await authApiService.Register(value)
            if (response.status === 201) {
                return swal.fire({
                    icon: 'success',
                    title: 'xdding?',
                    text: `Register success!`,
                })
            }
        } catch (error: any) {
            console.log("ERR", error)
            if (error) {
                return swal.fire({
                    icon: 'error',
                    title: 'xdding?',
                    text: error.response.data.message,
                })
            }
        }
    }

    return (
        <div className={`${silkscreen.className} flex flex-col w-full h-full justify-center justify-items-center p-8 gap-y-4`}>
            <AuthForm pageType='register' onFormSubmit={onSubmitHandler} />
        </div>
    )
}

export default RegisterPage