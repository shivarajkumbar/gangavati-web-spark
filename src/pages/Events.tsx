
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import AnimatedImage from '../components/AnimatedImage';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Symposium 2024',
      date: '2024-06-15',
      time: '09:00 AM',
      location: 'Main Auditorium',
      description: 'Annual technology symposium featuring industry experts and innovative presentations.',
      image: 'photo-1488590528505-98d2b5aba04b',
      category: 'Conference',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Code Sprint Competition',
      date: '2024-06-20',
      time: '10:00 AM',
      location: 'Computer Lab A',
      description: '48-hour coding competition for students to showcase their programming skills.',
      image: 'photo-1581091226825-a6a2a5aee158',
      category: 'Competition',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Industry Connect Workshop',
      date: '2024-06-25',
      time: '02:00 PM',
      location: 'Seminar Hall',
      description: 'Interactive workshop with industry professionals on current market trends.',
      image: 'photo-1649972904349-6e44c42644a7',
      category: 'Workshop',
      status: 'upcoming'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Annual Cultural Fest',
      date: '2024-05-10',
      time: '06:00 PM',
      location: 'College Campus',
      description: 'Vibrant cultural celebration showcasing student talents and performances.',
      image: 'photo-1506744038136-46273834b3fb',
      category: 'Cultural',
      status: 'completed'
    },
    {
      id: 5,
      title: 'AI & Machine Learning Seminar',
      date: '2024-04-28',
      time: '11:00 AM',
      location: 'Main Auditorium',
      description: 'Deep dive into artificial intelligence and machine learning technologies.',
      image: 'photo-1526374965328-7f61d4dc18c5',
      category: 'Seminar',
      status: 'completed'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Conference': 'bg-blue-500',
      'Competition': 'bg-red-500',
      'Workshop': 'bg-green-500',
      'Cultural': 'bg-purple-500',
      'Seminar': 'bg-yellow-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const EventCard = ({ event, isUpcoming = true }: { event: any, isUpcoming?: boolean }) => (
    <Card className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
      !isUpcoming ? 'opacity-75' : ''
    }`}>
      <div className="relative">
        <AnimatedImage
          src={event.image}
          alt={event.title}
          className="h-48"
          hoverEffect="zoom"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${getCategoryColor(event.category)} text-white`}>
            {event.category}
          </Badge>
        </div>
        {!isUpcoming && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary">Completed</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {event.title}
        </CardTitle>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {event.description}
        </CardDescription>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-black dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Events & Activities
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-slide-in-right">
              Stay updated with the latest events, workshops, and activities happening at KLE BCA Gangavati.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Don't miss out on these exciting upcoming events and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} isUpcoming={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Monthly Calendar
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Keep track of all important dates and deadlines.
            </p>
            
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">June 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="font-bold text-gray-600 dark:text-gray-400 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                    const isEventDay = [15, 20, 25].includes(day);
                    return (
                      <div
                        key={day}
                        className={`p-2 text-center rounded-lg transition-colors ${
                          isEventDay
                            ? 'bg-blue-500 text-white font-bold'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Past Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Take a look at some of our successful past events and activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isUpcoming={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
