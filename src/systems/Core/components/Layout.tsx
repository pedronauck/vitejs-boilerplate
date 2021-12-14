import { FC } from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  head?: any
  title: string
}

export const Layout: FC<Props> = ({ head, children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | NauckSchool</title>
        <meta name="description" content="My app description" />
        {head}
      </Helmet>
      {children}
    </>
  )
}
