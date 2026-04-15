import { useNavigate } from 'react-router-dom'
import { Title, Paragraph, Label } from '@/components/display/text'
import { Button } from '@/components/controls/button'
import { Divider } from '@/components/display/divider'
import { PublicLayout } from '@/features/components/public-layout'
import { OptionCard } from '@/features/components/option-card'
import { routes } from '@/screens/console-routes'
import { FileText, Package, Search } from 'lucide-react'

export function HomeScreen() {
  const navigate = useNavigate()

  const handleRequest = () => navigate(routes.publicRequest)

  const handleBooking = () => navigate(routes.publicBooking)

  const handleTrack = () => navigate(routes.publicTrack)

  return (
    <PublicLayout>
      <Title.h5 className="text-center">MOC Request Portal</Title.h5>
      <Paragraph.md className="text-secondary text-center mt-2">
        Submit a production request or book equipment for your next project.
      </Paragraph.md>

      <div className="w-full space-y-4 mt-8">
        <OptionCard
          icon={<FileText />}
          title="Make a Request"
          description="Submit a new production or media request with full details."
          onClick={handleRequest}
        />
        <OptionCard
          icon={<Package />}
          title="Book Equipment"
          description="Browse available equipment and reserve what you need."
          onClick={handleBooking}
        />
      </div>

      <Divider className='mt-8' />

      <Label.sm className="block text-secondary text-center mt-8 mb-2 mx-auto">Already submitted?</Label.sm>
      <Button variant="secondary" icon={<Search />} onClick={handleTrack} className='flex mx-auto'>
        Track a Submission
      </Button>
    </PublicLayout>
  )
}
