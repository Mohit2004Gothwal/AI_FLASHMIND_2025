"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Corrected import path
import { UserButton, useUser } from '@clerk/nextjs';
import SignInButton from './SignInButton'; // Importing the new SignInButton component
import Link from 'next/link';


function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-5 border-b shadow-sm'>
      <div className='flex items-center justify-between'>
        <Image src={'/logo.svg'} width={180} height={50} alt='logo' />
        {isSignedIn ? 
        <div className='flex items-center gap-5'>
            <Link href="/DashBoard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline">Quiz</Button>
            </Link>
            <Link href="/flashcards">
              <Button variant="outline">Flashcards</Button>
            </Link>
            <Link href="/learn-more">
              <Button variant="outline">Learn More</Button>
            </Link>
            <UserButton />
          </div> :

          <SignInButton>
            Sign In
          </SignInButton>

        }
        {/* <h1><b>FlashMind</b></h1>
        <p>Boost Memory with AI Flashcards</p> */}
      </div>
    </div>
  );
}

export default Header;
