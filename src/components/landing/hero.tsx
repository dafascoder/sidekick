"use client"

import React from "react"

import Image from "next/image"

import { ChevronRightIcon } from "lucide-react"

import { FallInPlace } from "../animations/fall"

type HeroProps = {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <img
            alt="Robin"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-11"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 bg-primary-600 ring-1 ring-inset ring-indigo-600/10">
                New
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Coming soon</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
            <FallInPlace delay={0.5}>{title}</FallInPlace>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <FallInPlace delay={0.75}>{description}</FallInPlace>
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-secordary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const HeroImage = () => {
  return (
    <FallInPlace delay={1}>
      <Image
        src={"/static/screenshots/dashboard.png"}
        width={1200}
        height={762}
        alt="Dashboard Screenshot"
        quality={75}
        priority
      />
    </FallInPlace>
  )
}
