'use client'
import Image from 'next/image'
import { DrawerMobile, HeaderLanding, NavMenu } from './styles'
import { Burger, Drawer } from '@mantine/core'
import { useState } from 'react'
import Link from 'next/link'

export default function HeaderLandingPage() {
  const [mobileOpened, setMobileOpened] = useState(false)

  const menuItens = [
    {
      name: 'PORTIFÓLIO',
      link: '/#portifolio',
    },
    {
      name: 'ORÇAMENTO',
      link: '/#orcamento',
    },
    {
      name: 'CONTATO',
      link: '/#contato',
    },
  ]
  return (
    <HeaderLanding>
      <Link href={'/'}>
        <Image src='Logo.svg' alt='Kora studios' width={52} height={28} />
      </Link>

      <Burger
        opened={mobileOpened}
        onClick={() => setMobileOpened(!mobileOpened)}
        hiddenFrom='sm'
        size='sm'
      />

      <Drawer.Root
        padding={0}
        opened={mobileOpened}
        onClose={() => setMobileOpened(false)}
        color='#0E0F0E'
      >
        <Drawer.Overlay />

        <Drawer.Content>
          <Drawer.Body>
            <DrawerMobile>
              <Drawer.CloseButton className='close' />
              <Link
                onClick={() => setMobileOpened(false)}
                href={`/`}
                className=''
              >
                <Image
                  src='Logo.svg'
                  alt='Kora studios'
                  width={235}
                  height={116}
                />
              </Link>
              <NavMenu>
                {menuItens.map((link) => (
                  <Link
                    onClick={() => setMobileOpened(false)}
                    key={link.name}
                    href={`${link.link}`}
                    className=''
                  >
                    {link.name}
                  </Link>
                ))}
              </NavMenu>
            </DrawerMobile>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      <div className='hidden-mobile'>
        <NavMenu>
          {menuItens.map((link) => (
            <Link key={link.name} href={`${link.link}`}>
              {link.name}
            </Link>
          ))}
        </NavMenu>
      </div>
    </HeaderLanding>
  )
}
