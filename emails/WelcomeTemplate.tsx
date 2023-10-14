import React, { CSSProperties } from 'react'
import { Html, Body, Container, Tailwind, Text, Link, Preview } from "@react-email/components"

export default function WelcomeTemplate({name}:{name:string}){

  return (
    <Html>
        <Preview>
            Welcome Aboard!
        </Preview>
        <Tailwind>
        <Body className='bg-rose-200'>
            <Container>
                <Text className='font-bold text-3xl'>Hello {name}</Text>
                <Link href='https://www.linkedin.com/in/yasir-zahid/'>www.Yasir.com</Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}
// const body : CSSProperties = {
//   background: "#fff"
// }

// const heading: CSSProperties={
//   fontSize: '32px'
// }
