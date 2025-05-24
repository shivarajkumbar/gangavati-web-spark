
import React from 'react';
import { Users, BookOpen, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import AnimatedImage from '../components/AnimatedImage';

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Excellence in Education',
      description: 'We strive for academic excellence and innovation in computer application education.',
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Foster teamwork and collaboration among students and faculty members.',
    },
    {
      icon: Calendar,
      title: 'Continuous Growth',
      description: 'Commitment to continuous improvement and adaptation to industry trends.',
    },
    {
      icon: User,
      title: 'Student-Centric',
      description: 'Placing student success and development at the center of everything we do.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-black dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              About KLE BCA Gangavati
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-slide-in-right">
              Pioneering computer application education with a commitment to excellence, 
              innovation, and student success since our establishment.
            </p>
          </div>
        </div>
      </section>

      {/* College Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  KLE BCA Gangavati was established with a vision to provide world-class education 
                  in computer applications. Over the years, we have grown to become one of the 
                  premier institutions in the region, known for our academic excellence and 
                  industry-relevant curriculum.
                </p>
                <p>
                  Our college is part of the prestigious KLE Society, which has been a pioneer 
                  in educational excellence for decades. We combine traditional values with 
                  modern teaching methodologies to create an environment where students can 
                  thrive and reach their full potential.
                </p>
                <p>
                  With state-of-the-art infrastructure, experienced faculty, and strong 
                  industry connections, we prepare our students to be future-ready 
                  professionals in the rapidly evolving field of computer applications.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <AnimatedImage
                src="photo-1581091226825-a6a2a5aee158"
                alt="College building"
                className="h-96 rounded-2xl shadow-2xl"
                hoverEffect="zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  To provide quality education in computer applications that empowers students 
                  with knowledge, skills, and values necessary to become competent professionals 
                  and responsible citizens in a global society.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  To be recognized as a center of excellence in computer application education, 
                  fostering innovation, research, and industry collaboration while maintaining 
                  the highest standards of academic and ethical values.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at KLE BCA Gangavati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center"
                >
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Modern infrastructure designed to enhance the learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <AnimatedImage
                src="photo-1488590528505-98d2b5aba04b"
                alt="Computer Lab"
                className="h-64 mb-6 group-hover:scale-105 transition-transform duration-500"
                hoverEffect="zoom"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Advanced Computer Labs
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Equipped with latest hardware and software for hands-on learning.
              </p>
            </div>

            <div className="text-center group">
              <AnimatedImage
                src="photo-1649972904349-6e44c42644a7"
                alt="Library"
                className="h-64 mb-6 group-hover:scale-105 transition-transform duration-500"
                hoverEffect="scale"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Digital Library
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extensive collection of books, journals, and digital resources.
              </p>
            </div>

            <div className="text-center group">
              <AnimatedImage
                src="photo-1581091226825-a6a2a5aee158"
                alt="Auditorium"
                className="h-64 mb-6 group-hover:scale-105 transition-transform duration-500"
                hoverEffect="float"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Modern Auditorium
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                State-of-the-art venue for seminars, conferences, and events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
