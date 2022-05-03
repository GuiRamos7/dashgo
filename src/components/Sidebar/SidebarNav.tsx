import { Box, Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import NavLink from "./NavLink"
import NavSection from "./NavSection"

const SidebarNav = () => {
  return <Stack spacing='12' align='flex-start'>
    <NavSection title='GENERAL'>
      <Box>
        <NavLink href="/dashboard" icon={RiDashboardLine} >
          Dashboard
        </NavLink>
      </Box>
      <Box>
        <NavLink href="/users" icon={RiContactsLine} >
          Users
        </NavLink>
      </Box>
    </NavSection>
    <NavSection title='AUTOMATION'>
      <Box>
        <NavLink href="/forms" icon={RiInputMethodLine} >
          Forms
        </NavLink>
      </Box>
      <Box>
        <NavLink href="/automation" icon={RiGitMergeLine} >
          Automation
        </NavLink>
      </Box>
    </NavSection>
  </Stack>
}

export default SidebarNav