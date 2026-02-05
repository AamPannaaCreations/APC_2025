'use client'

import WorkshopHero from '@/components/workshop/WorkshopHero'
import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Calendar, Clock, User, CheckCircle2, MapPinHouse } from 'lucide-react'
import PayForm from '@/components/PayForm'
import toast from 'react-hot-toast'

interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  platform: string;
  instructor: string;
  capacity: number;
  enrolled: number;
  price: number;
  topics: string[];
}

export default function WorkshopPage() {
  const [isPayFormOpen, setIsPayFormOpen] = useState(false)
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null)
  const [upcomingWorkshops, setUpcomingWorkshops] = useState<Workshop[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWorkshops()
  }, [])

  const fetchWorkshops = async () => {
    try {
      const response = await fetch('/api/workshop/upcoming-workshop')
      const data = await response.json()
      
      if (data.success) {
        setUpcomingWorkshops(data.workshops)
      } else {
        toast.error('Failed to load workshops')
      }
    } catch (error) {
      console.error('Error fetching workshops:', error)
      toast.error('Failed to load workshops')
    } finally {
      setLoading(false)
    }
  }

  const handleEnrollClick = (workshopId: string) => {
    setSelectedWorkshop(workshopId)
    setIsPayFormOpen(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const selectedWorkshopData = upcomingWorkshops.find(w => w.id === selectedWorkshop)

  return (
    <div className='min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <WorkshopHero />

        {/* Upcoming Workshops */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Upcoming Workshops
          </h2>
          {upcomingWorkshops.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No upcoming workshops at the moment</p>
            </div>
          ) : (
            <div className='grid gap-8 md:grid-cols-2'>
              {upcomingWorkshops.map((workshop) => (
                <Card key={workshop.id} className='overflow-hidden hover:shadow-xl transition-shadow'>
                  <CardHeader>
                    <div className='flex justify-between items-start mb-2'>
                      <CardTitle className='text-2xl'>{workshop.title}</CardTitle>
                      <Badge variant="secondary" className='bg-green-100 text-green-800 hover:bg-green-200'>
                        ₹{workshop.price}
                      </Badge>
                    </div>
                    <CardDescription>{workshop.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className='space-y-4'>
                    <div className='space-y-2'>
                      <div className='flex items-center text-sm text-gray-700'>
                        <Calendar className='w-4 h-4 mr-2' />
                        <span>{formatDate(workshop.date)}</span>
                      </div>
                      <div className='flex items-center text-sm text-gray-700'>
                        <Clock className='w-4 h-4 mr-2' />
                        <span>{workshop.time} ({workshop.duration})</span>
                      </div>
                      <div className='flex items-center text-sm text-gray-700'>
                        <User className='w-4 h-4 mr-2' />
                        <span>Instructor: {workshop.instructor}</span>
                      </div>
                      <div className='flex items-center text-sm text-gray-700'>
                        <MapPinHouse className='w-4 h-4 mr-2' />
                        <span>Platform: {workshop.platform}</span>
                      </div>
                    </div>

                    <Separator />

                    {workshop.topics && workshop.topics.length > 0 && (
                      <div>
                        <h4 className='font-semibold text-sm mb-2'>Topics Covered:</h4>
                        <div className='flex flex-wrap gap-2'>
                          {workshop.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className='bg-blue-50 text-blue-700 border-blue-200'>
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className='flex justify-between text-sm text-gray-600 mb-2'>
                        <span>Enrollment</span>
                        <span>{workshop.enrolled}/{workshop.capacity} enrolled</span>
                      </div>
                      <Progress value={(workshop.enrolled / workshop.capacity) * 100} className='h-2' />
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className='w-full' 
                      size="lg"
                      onClick={() => handleEnrollClick(workshop.id)}
                      disabled={workshop.enrolled >= workshop.capacity}
                    >
                      {workshop.enrolled >= workshop.capacity ? 'Workshop Full' : 'Enroll Now'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Payment Information */}
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>Payment & Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  Accepted Payment Methods
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-center text-gray-700'>
                    <CheckCircle2 className='w-5 h-5 mr-3 text-green-500' />
                    Credit/Debit Cards (Visa, Mastercard, Amex)
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <CheckCircle2 className='w-5 h-5 mr-3 text-green-500' />
                    PayPal
                  </li>
                  <li className='flex items-center text-gray-700'>
                    <CheckCircle2 className='w-5 h-5 mr-3 text-green-500' />
                    Bank Transfer
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  Registration Process
                </h3>
                <ol className='space-y-3'>
                  <li className='flex text-gray-700'>
                    <span className='font-semibold mr-2 text-blue-600'>1.</span>
                    Select your desired workshop
                  </li>
                  <li className='flex text-gray-700'>
                    <span className='font-semibold mr-2 text-blue-600'>2.</span>
                    Complete the registration form
                  </li>
                  <li className='flex text-gray-700'>
                    <span className='font-semibold mr-2 text-blue-600'>3.</span>
                    Make payment securely online
                  </li>
                  <li className='flex text-gray-700'>
                    <span className='font-semibold mr-2 text-blue-600'>4.</span>
                    Receive confirmation email with details
                  </li>
                </ol>
              </div>
            </div>
            <Separator className='my-6' />
            <div className='p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded'>
              <p className='text-yellow-800 text-sm'>
                <strong>Note:</strong> Full payment is required to secure your spot. Cancellations made 7 days before the workshop are eligible for a full refund.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Dialog */}
      <Dialog open={isPayFormOpen} onOpenChange={setIsPayFormOpen}>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle>
              {selectedWorkshopData ? `Enroll in ${selectedWorkshopData.title}` : 'Workshop Enrollment'}
            </DialogTitle>
          </DialogHeader>
          <PayForm 
            workshopId={selectedWorkshop}
            workshopPrice={selectedWorkshopData?.price}
            onClose={() => setIsPayFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}