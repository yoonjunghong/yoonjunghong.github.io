import { Typography, Box, Container } from '@material-ui/core'

export default function AboutPage() {
  return (
    <div>
      <Box sx={{ marginBottom: 8 }} />
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
          {'간단한 자기 소개'}
        </Typography>
      </Container>
      <Box sx={{ marginBottom: 16 }} />
    </div>
  )
}

// export async function getStaticProps({ params }) {
//   const announcement = await fetchStrapiAPI('/announcement')

//   return {
//     props: { announcement },
//     revalidate: 1
//   }
// }
