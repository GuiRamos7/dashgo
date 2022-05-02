import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContext = UseDisclosureReturn

export const SidebarDrawerContext = createContext({} as SidebarDrawerContext)

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {

  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
