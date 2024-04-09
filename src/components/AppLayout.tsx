"use client"
import { SnackbarProvider } from 'notistack'
import React, { ReactNode } from 'react'
import Header from './Header'
import Script from 'next/script'
import { UserMetadata } from '@supabase/supabase-js'

const AppLayout = ({ children, session }: { children: ReactNode, session: UserMetadata | null }) => {
  return (
      <SnackbarProvider
          classes={{ containerRoot: "z-alert" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
          <Header getSession={session} />
          {children}
          <Script
              src="https://kit.fontawesome.com/4ef8c63dd7.js"
              crossOrigin="anonymous"
          />
      </SnackbarProvider>
  )
}

export default AppLayout