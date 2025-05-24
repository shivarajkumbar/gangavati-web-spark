
import React from 'react';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import AnimatedImage from '../components/AnimatedImage';

const Admissions = () => {
  const programs = [
    {
      id: 1,
      name: 'Bachelor of Computer Applications (BCA)',
      duration: '3 Years',
      eligibility: '12th Pass with Mathematics',
      seats: '120',
      fees: '₹85,000 per year',
      description: 'Comprehensive program covering programming, software development, and computer applications.',
      highlights: ['Programming Languages', 'Database Management', 'Web Development', 'Software Engineering']
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Submit online application with required documents',
      icon: BookOpen
    },
    {
      step: 2,
      title: 'Entrance Test',
      description: 'Appear for college entrance examination',
      icon: User
    },
    {
      step: 3,
      title: 'Merit List',
      description: 'Check merit list and counseling schedule',
      icon: Calendar
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Complete admission formalities and fee payment',
      icon: ArrowRight
    }
  ];

  const importantDates = [
    { event: 'Application Start Date', date: 'April 1, 2024' },
    { event: 'Application Last Date', date: 'June 15, 2024' },
    { event: 'Entrance Test Date', date: 'June 25, 2024' },
    { event: 'Merit List Declaration', date: 'July 5, 2024' },
    { event: 'Counseling Begins', date: 'July 10, 2024' },
    { event: 'Classes Commence', date: 'August 1, 2024' }
  ];

  const requirements = [
    'Class 12th marksheet and certificate',
    'Entrance test scorecard',
    'Transfer certificate',
    'Character certificate',
    'Caste certificate (if applicable)',
    'Income certificate (if applicable)',
    'Passport size photographs',
    'Aadhaar card copy'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-black dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Admissions 2024
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-slide-in-right">
              Join us at KLE BCA Gangavati and embark on your journey to become a technology leader of tomorrow.
            </p>
            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Programs Offered
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore our comprehensive programs designed to prepare you for the future.
            </p>
          </div>

          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-500 text-white">{program.duration}</Badge>
                      <Badge variant="outline">{program.seats} Seats</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {program.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Eligibility</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{program.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Annual Fees</h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-bold">{program.fees}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Course Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div className="p-8 lg:p-0">
                  <AnimatedImage
                    src="photo-1581091226825-a6a2a5aee158"
                    alt={program.name}
                    className="h-full min-h-80 rounded-lg lg:rounded-r-lg lg:rounded-l-none"
                    hoverEffect="zoom"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Simple and transparent admission process to help you join our college.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process) => {
              const Icon = process.icon;
              return (
                <Card key={process.step} className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                      STEP {process.step}
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {process.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Important Dates
              </h2>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-900 dark:text-white">{item.event}</span>
                    <Badge className="bg-blue-500 text-white">{item.date}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Required Documents
              </h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Scholarships Available
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Financial assistance to support deserving students in their educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Merit Scholarship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50%</div>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Fee concession for students with 90%+ in 12th standard
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Need-based Aid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">75%</div>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Financial assistance based on family income criteria
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Sports Quota
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">25%</div>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Special consideration for students with sports achievements
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Admissions?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Our admission counselors are here to guide you through the process and answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Contact Admissions Office
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
