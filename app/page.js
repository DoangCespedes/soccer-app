import Image from 'next/image'
import { Navigation } from './components/Navigation'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <Navigation />
        <Container>
          <Box>
            <Card>
              <Typography variant="h2">Hello World ~</Typography>
            </Card>
          </Box>
        </Container>


        <h2 className={`mb-3 text-2xl font-semibold`}>
          Soccer App
        </h2>
      </div>
    </main>

  )
}
