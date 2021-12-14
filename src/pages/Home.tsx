import { Layout } from '@/systems/Core'
import { css } from '@emotion/react'
import tw from 'twin.macro'

export const Home = () => {
  return (
    <Layout title="Home">
      <div css={styles.root}>Hello world</div>
    </Layout>
  )
}

const styles = {
  root: css`
    ${tw`p-5`};
  `,
}
