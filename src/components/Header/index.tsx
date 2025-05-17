import { ScrollIcon, TimerIcon } from '@phosphor-icons/react'
import logoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo do Ignite" />
      <nav>
        <NavLink to="/" title="Timer">
          <TimerIcon size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <ScrollIcon size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
