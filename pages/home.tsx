import * as fs from 'fs';
import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { InferGetStaticPropsType } from "next"
import Header from "@/app/header"
import Footer from "@/app/footer"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { extname, parse } from 'path';

export const runtime = "edge";

export const geistSans  = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const data_stream: React.JSX.Element[] = [];

const Mark = () =>{
  return (
    data_stream
  )
}

let rendered = 0;

export default function Home({ result } : InferGetStaticPropsType<typeof getStaticProps> ){

  if(rendered == 0){
    const final_result = JSON.parse(JSON.stringify(result));

    for(let a = 0; a < final_result.length; a++){ 
      data_stream.push(

        <Link className='h-[10em]' href={final_result[a]}>
            <div className='pb-[2em] lg:pb-[0]'>
              <Image
                className='rounded-xl h-[300px] object-cover'
                src={"/" + final_result[a+1]}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div>
                <h2 className='mt-[1.3em] text-xl' key={a + 2}>{final_result[a+2]}</h2>
                <p className='text-stone-800 mt-1' key={a + 3}>{final_result[a+3]}</p>
              </div>
          </div>
        </Link>
      
    );

    a = a + 3;
   
    }
    rendered = 1;
  }
  return (  
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Header></Header>
      <header>
      <title>Homepage Militaris</title>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="mobile-web-app-capable" content="yes"/>

      <meta name="title" content="Blog sul mondo miliare"/>
      <meta name="description" content="Siete invitati ad esplorare il mondo miliare, e la nostra passione di tutto ciò che riguarda geopolitica"/>
      <meta name="template" content="Article"/>

      <meta name="Publisher" content="Miliaris.uk"/>
      <meta name="Copyright" content="Miliaris.uk"/>
      </header>
      <div className='items-center lg:pt-[10em] pt-[3em] bg-stone-50'>
        <div className='container grid-cols-1 lg:grid grid-cols-3 grid-rows-[30em] mx-auto lg:gap-[3em] min-h-screen px-[1.1em] lg:px-[var(--standard)]'>
          <Mark></Mark>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )

}

export async function getStaticProps() {

  const result = [];
  const files = fs.readdirSync('_posts/');

  for(const i in files){
    if(extname(files[i]) === ".mdx"){

      const file = fs.readFileSync( "_posts/" + parse(files[i]).name + ".json", "utf-8" );
      const result_2 = JSON.parse(file);

      result.push( "article/" + parse( files[i]).name , parse(files[i]).name + ".jpg", result_2.title, result_2.description );
      
   }
  }

  return {
    props: {
      result,
    }
  };



}