
import React from 'react';
import { User, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import AnimatedImage from '../components/AnimatedImage';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      position: 'Head of Department',
      qualification: 'Ph.D. Computer Science',
      experience: '15 Years',
      specialization: 'Database Management, Software Engineering',
      image: 'photo-1649972904349-6e44c42644a7',
      courses: ['Database Systems', 'Software Engineering', 'Data Structures']
    },
    {
      id: 2,
      name: 'Prof. Rajesh Kumar',
      position: 'Associate Professor',
      qualification: 'M.Tech Computer Applications',
      experience: '12 Years',
      specialization: 'Web Development, Programming Languages',
      image: 'photo-1581091226825-a6a2a5aee158',
      courses: ['Web Technologies', 'Java Programming', 'Python Programming']
    },
    {
      id: 3,
      name: 'Dr. Anita Desai',
      position: 'Assistant Professor',
      qualification: 'Ph.D. Information Technology',
      experience: '10 Years',
      specialization: 'Machine Learning, Artificial Intelligence',
      image: 'photo-1488590528505-98d2b5aba04b',
      courses: ['Machine Learning', 'AI Fundamentals', 'Data Mining']
    },
    {
      id: 4,
      name: 'Prof. Suresh Patel',
      position: 'Assistant Professor',
      qualification: 'M.Sc. Computer Science',
      experience: '8 Years',
      specialization: 'Computer Networks, Cyber Security',
      image: 'photo-1526374965328-7f61d4dc18c5',
      courses: ['Computer Networks', 'Network Security', 'Operating Systems']
    },
    {
      id: 5,
      name: 'Ms. Deepika Singh',
      position: 'Lecturer',
      qualification: 'MCA',
      experience: '6 Years',
      specialization: 'Mobile App Development, UI/UX Design',
      image: 'photo-1506744038136-46273834b3fb',
      courses: ['Mobile Application Development', 'User Interface Design', 'Graphics Design']
    },
    {
      id: 6,
      name: 'Prof. Amit Verma',
      position: 'Assistant Professor',
      qualification: 'M.Tech Information Technology',
      experience: '9 Years',
      specialization: 'Cloud Computing, DevOps',
      image: 'photo-1501854140801-50d01698950b',
      courses: ['Cloud Computing', 'DevOps', 'System Administration']
    }
  ];

  const departments = [
    {
      name: 'Computer Applications',
      head: 'Dr. Priya Sharma',
      faculty: 15,
      description: 'Comprehensive programs in computer applications covering all aspects of modern computing.'
    },
    {
      name: 'Software Development',
      head: 'Prof. Rajesh Kumar',
      faculty: 8,
      description: 'Specialized courses in software development methodologies and programming languages.'
    },
    {
      name: 'Data Science & AI',
      head: 'Dr. Anita Desai',
      faculty: 6,
      description: 'Cutting-edge research and education in data science and artificial intelligence.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-black dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Our Faculty
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-slide-in-right">
              Meet our dedicated team of experienced educators and industry experts who are committed to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Departments
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our organized academic departments ensuring specialized education in various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-center text-gray-900 dark:text-white">
                    {dept.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-400 mb-4">
                    {dept.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Department Head:</strong> {dept.head}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Faculty Members:</strong> {dept.faculty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Faculty
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experienced educators dedicated to shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <AnimatedImage
                    src={faculty.image}
                    alt={faculty.name}
                    className="h-64"
                    hoverEffect="zoom"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">
                      {faculty.position}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faculty.name}
                  </CardTitle>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{faculty.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{faculty.experience} Experience</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specialization:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{faculty.specialization}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {faculty.courses.map((course, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Faculty Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Recognizing excellence in teaching, research, and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400">Industry Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Awards & Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Average Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
